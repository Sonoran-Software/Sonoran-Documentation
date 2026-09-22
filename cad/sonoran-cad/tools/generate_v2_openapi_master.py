from __future__ import annotations

import re
from collections import OrderedDict
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
V2_DOCS_DIR = ROOT / "api-integration" / "api-endpoints-v2"
README_PATH = V2_DOCS_DIR / "README.md"

START_MARKER = "<!-- BEGIN GENERATED V2 OPENAPI -->"
END_MARKER = "<!-- END GENERATED V2 OPENAPI -->"


def dump_yaml(data: object) -> str:
    def to_builtin(value: object) -> object:
        if isinstance(value, dict):
            return {key: to_builtin(inner) for key, inner in value.items()}
        if isinstance(value, list):
            return [to_builtin(item) for item in value]
        return value

    return yaml.safe_dump(
        to_builtin(data),
        sort_keys=False,
        allow_unicode=False,
        default_flow_style=False,
    ).rstrip()


def extract_openapi_block(markdown: str, path: Path) -> dict:
    match = re.search(
        r'{% tab title="OpenAPI" %}.*?(?:~~~yaml|```yaml)\s*\n(.*?)\n(?:~~~|```)\s*\n{% endtab %}',
        markdown,
        flags=re.DOTALL,
    )
    if not match:
        raise ValueError(f"Missing OpenAPI tab in {path}")

    block_text = re.sub(
        r'^(\s*)(\{\{[^}]+\}\}):',
        r'\1"\2":',
        match.group(1),
        flags=re.MULTILINE,
    )
    block = yaml.safe_load(block_text)
    if not isinstance(block, dict) or "paths" not in block:
        raise ValueError(f"Invalid OpenAPI block in {path}")
    return block


def endpoint_files() -> list[Path]:
    files: list[Path] = []
    for path in sorted(V2_DOCS_DIR.rglob("*.md")):
        if path.name == "README.md":
            continue
        text = path.read_text(encoding="utf-8")
        if '{% tab title="OpenAPI" %}' in text and 'openapi: "3.0.3"' in text:
            files.append(path)
    return files


def infer_tag(path: Path) -> str:
    relative = path.relative_to(V2_DOCS_DIR)
    parts = relative.parts[:-1]
    if not parts:
        return "Misc"
    return " / ".join(part.replace("-", " ").title() for part in parts)


def build_master_spec() -> tuple[dict, int]:
    paths: OrderedDict[str, dict] = OrderedDict()
    components: OrderedDict[str, dict] = OrderedDict()
    count = 0

    for path in endpoint_files():
        document = extract_openapi_block(path.read_text(encoding="utf-8"), path)
        tag = infer_tag(path)

        for route, operations in document.get("paths", {}).items():
            normalized_operations = paths.setdefault(route, OrderedDict())
            for method, operation in operations.items():
                if method in normalized_operations:
                    raise ValueError(f"Duplicate method detected: {method.upper()} {route}")
                if isinstance(operation, dict) and "tags" not in operation:
                    operation = OrderedDict(operation)
                    operation["tags"] = [tag]
                if isinstance(operation, dict):
                    # OpenAPI response codes are strings; empty OAuth scopes must be arrays.
                    if "responses" in operation:
                        operation["responses"] = {str(code): value for code, value in operation["responses"].items()}
                    for requirement in operation.get("security", []):
                        for scheme, scopes in requirement.items():
                            if scopes is None:
                                requirement[scheme] = []
                normalized_operations[method] = operation
                count += 1

        for component_group, values in document.get("components", {}).items():
            existing_group = components.setdefault(component_group, OrderedDict())
            for name, value in values.items():
                if name in existing_group and existing_group[name] != value:
                    raise ValueError(
                        f"Conflicting component {component_group}.{name} in {path}"
                    )
                existing_group[name] = value

    spec = OrderedDict(
        [
            ("openapi", "3.0.3"),
            (
                "info",
                OrderedDict(
                    [
                        ("title", "Sonoran CAD v2 API"),
                        ("version", "1.0.0"),
                        (
                            "description",
                            "Combined OpenAPI import for all documented Sonoran CAD v2 endpoints.",
                        ),
                    ]
                ),
            ),
            ("servers", [{"url": "https://api.sonorancad.com"}]),
            ("paths", paths),
            ("components", components),
        ]
    )
    return spec, count


def build_readme_section(spec_yaml: str, endpoint_count: int) -> str:
    return (
        f"{START_MARKER}\n"
        "## Full OpenAPI Collection\n\n"
        "Use this combined OpenAPI document if you want to import the full Sonoran CAD v2 API into Postman in one pass.\n\n"
        f"This generated collection currently includes `{endpoint_count}` documented v2 operations.\n\n"
        "<details>\n"
        "<summary>Copy the full OpenAPI YAML</summary>\n\n"
        "```yaml\n"
        f"{spec_yaml}\n"
        "```\n"
        "</details>\n"
        f"{END_MARKER}"
    )


def update_readme(section: str) -> None:
    readme = README_PATH.read_text(encoding="utf-8")
    pattern = re.compile(
        rf"{re.escape(START_MARKER)}.*?{re.escape(END_MARKER)}",
        flags=re.DOTALL,
    )

    if pattern.search(readme):
        updated = pattern.sub(section, readme)
    elif "## Full OpenAPI Collection" in readme:
        # GitBook may strip HTML comments when syncing pages back to Git.
        collection = re.compile(r"## Full OpenAPI Collection.*?</details>", re.DOTALL)
        if not collection.search(readme):
            raise ValueError("Existing OpenAPI section is missing its closing details tag")
        updated = collection.sub(lambda _: section, readme, count=1)
    else:
        updated = readme.rstrip() + "\n\n" + section + "\n"

    README_PATH.write_text(updated, encoding="utf-8")


def main() -> None:
    spec, endpoint_count = build_master_spec()
    spec_yaml = dump_yaml(spec)
    section = build_readme_section(spec_yaml, endpoint_count)
    update_readme(section)
    print(f"Updated {README_PATH} with {endpoint_count} v2 operations.")


if __name__ == "__main__":
    main()
