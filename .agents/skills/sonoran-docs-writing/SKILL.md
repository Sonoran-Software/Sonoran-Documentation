---
name: sonoran-docs-writing
description: Write and revise public Sonoran product guides and API documentation in this repository, including screenshots that explain the user workflow.
---

# Sonoran documentation writing

Write for the person using the product or integrating the API. Help them understand what a feature does and how to use it, with the least copy that makes the task clear.

## Copy

- Lead with the feature's purpose or the user's result. Use plain, factual language without marketing claims, filler, ornamental headings, or repeated summaries.
- Explain the actions needed to complete the task. Use the actual UI labels where they help readers find a control. Avoid narrating every icon, badge, count, or visible detail.
- Keep implementation details out of feature walkthroughs. Memory, browser storage, database behavior, connection routing, and internal architecture belong only where they are necessary to answer the reader's specific question.
- Do not add speculative advice or caveats such as hosting recommendations to a simple feature guide. Include limitations only when they materially affect the documented task.
- For API reference sections, retain the technical details an integrator needs: method, path, authentication, inputs, constraints, working examples, responses, and relevant errors. Concise does not mean removing the API contract.
- Prefer a short explanation and a clear visual sequence over dense prose. Do not impose a fixed paragraph count or template on every page.

For example, a photo walkthrough can say: “Photos sent through this endpoint appear in Recent photos, where users can view them or attach them to a custom record.” It does not need to explain where the recent list is stored, when it clears, its unread count, or how to host images.

## Screenshots

- Show the workflow, not just the dialog. Capture the starting screen with the control the reader needs, the result of clicking it, and the completed result.
- For attaching a photo, show the record's Image field and folder button, the photo picker with its selection action, then the photo attached to the record.
- Keep enough surrounding UI to locate the action. Avoid several nearly identical modal screenshots that omit the entry point or final state.
- Use real product UI with safe example data. Reuse reviewed captures when they accurately show the current behavior. Do not fabricate UI or expose customer information.
- Put each screenshot beside its step with one short instruction or caption. Use tabs for distinct tasks when useful; keep the steps within each task in order.
- Check images at the width they will appear in the docs. Verify that controls and outcomes are visible and that all images load after publishing.

## Repository and publication

- Follow the root [README](../../../README.md) for the active Mintlify source, media host, validation commands, and deployment checks. Keep existing routes and heading IDs stable.
- Look for existing coverage before adding sections. Update related reference content only where the change applies; avoid broad rewrites during a focused edit.
- Review the final page as a reader: what is this, where do I start, what do I do, and what should I see when finished? Remove sentences that do not help answer those questions or use the API correctly.
- Validate changed docs and inspect the rendered page. Publish within the user's authorized scope and verify the affected live page, images, and relevant links.

## Maintaining this skill

Fold concrete editorial feedback into the relevant guidance. Prefer refining an existing rule over adding repetitive prohibitions. Keep examples brief and do not turn a product-specific fact into a rule for every guide.
