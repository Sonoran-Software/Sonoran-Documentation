---
description: >-
  This page will explain all exported functions from the SonoranCAD Core that
  can be used on the client and server side
---

# Shared Functions

### isPluginLoaded

Checks if a specific plugin is loaded by searching through the `submodules` table.

```lua
exports.sonorancad.isPluginLoaded(submoduleName)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="183" align="center">Parameter</th><th width="104" align="center">Type</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>submoduleName</code></td><td align="center"><code>string</code></td><td align="center">The name of the submodule to check for in the <code>submodules</code> table.</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="125">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>boolean</code></td><td><code>true</code> if the specified submodule (<code>pluginName</code>) is found in the <code>submodules</code> table. <code>false</code> otherwise.</td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
submodules = { "callcommands", "dispatchnotify", "civintegration" }

local isLoaded = isPluginLoaded("dispatchnotify")
print(isLoaded)  -- Output: true

local isLoaded2 = isPluginLoaded("vehreg")
print(isLoaded2)  -- Output: false
```
{% endtab %}
{% endtabs %}

***

### shallowcopy

Creates a shallow copy of a table or directly returns non-table values.

```lua
exports.sonorancad.shallowcopy(data)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="137" align="center">Parameter</th><th width="103" align="center">Type</th><th width="449" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>orig</code></td><td align="center"><code>any</code></td><td align="center">The value or table to copy. Can be of any type: table, string, number, etc.</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="94">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>any</code></td><td>If <code>orig</code> is a table: Returns a new table with the same key-value pairs as <code>orig</code>. If <code>orig</code> is not a table (e.g., a number, string, boolean): Returns the value directly.</td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
-- Example 1: Shallow copying a table
local original = { a = 1, b = 2, c = { 3, 4 } }
local copy = exports.sonorancad.shallowcopy(original)

print(copy.a)  -- Output: 1
print(copy.b)  -- Output: 2
print(copy.c)  -- Output: table: 0x... (same reference as original.c in shallow copy)

-- Example 2: Copying a non-table value
local value = 42
local valueCopy = exports.sonorancad.shallowcopy(value)
print(valueCopy)  -- Output: 42

```
{% endtab %}
{% endtabs %}

***

### stringsplit

Splits a string into substrings based on a specified delimiter.

```lua
exports.sonorancad.stringsplit(inputstr, sep)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="137" align="center">Parameter</th><th width="103" align="center">Type</th><th width="449" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>inputstr</code></td><td align="center"><code>string</code></td><td align="center">The input string that will be split into substrings based on a specified delimiter (<code>sep</code>)</td></tr><tr><td align="center"><code>sep</code></td><td align="center"><code>string</code></td><td align="center">(Optional) If not provided, the default is <code>"%s"</code>, which matches any whitespace character</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="120" align="center">Type</th><th width="574" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>table</code></td><td align="center">The table contains the substrings of <code>inputstr</code> split by the delimiter <code>sep</code>. The substrings are stored sequentially starting at index <code>1</code></td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
local result = exports.sonorancad.stringsplit("Hello,World,Lua", ",")
-- result = { "Hello", "World", "Lua" }

local result2 = exports.sonorancad.stringsplit("One Two Three")
-- result2 = { "One", "Two", "Three" } (uses default separator: whitespace)

```
{% endtab %}
{% endtabs %}

***

### findIndex

Searches for a specific identifier in the `LocationCache` table and returns the index of the first matching entry.

```lua
exports.sonorancad.findIndex(identifier)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="155" align="center">Parameter</th><th width="96" align="center">Type</th><th width="449" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>identifier</code></td><td align="center"><code>any</code></td><td align="center">The identifier to search for, compared against the <code>apiId</code> field of each entry in <code>LocationCache</code>.</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="120" align="center">Type</th><th width="574" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>number</code> or <code>nil</code></td><td align="center">The index (<code>i</code>) of the first entry in <code>LocationCache</code> whose <code>apiId</code> matches <code>identifier</code>. <code>nil</code> if no matching entry is found</td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
-- Example: Searching for an identifier in LocationCache
LocationCache = {
    { apiId = 101, name = "LocationA" },
    { apiId = 202, name = "LocationB" },
    { apiId = 303, name = "LocationC" },
}

local index = exports.sonorancad.findIndex(202)
print(index)  -- Output: 2

local notFound = exports.sonorancad.findIndex(404)
print(notFound)  -- Output: nil
```
{% endtab %}
{% endtabs %}

***

### GetIdentifiers

Extracts and organizes player identifiers into a key-value table format.

```lua
exports.sonorancad.GetIdentifiers(player)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="128" align="center">Parameter</th><th width="161" align="center">Type</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>player</code></td><td align="center"><code>PlayerSource</code></td><td align="center">The player source ID for whom the identifiers are being retrieved.</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="120" align="center">Type</th><th width="574" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>table</code></td><td align="center">A key-value table where the keys are identifier types (e.g., <code>steam</code>, <code>license</code>, <code>discord</code>) and the values are the corresponding identifier strings.</td></tr></tbody></table>
{% endtab %}

{% tab title="Example Usage" %}
```lua
local playerIdentifiers = exports.sonorancad.GetIdentifiers(1)

-- Output
-- playerIdentifiers = {
--     steam = "110000112345678",
--     license = "abcdef1234567890",
--     discord = "123456789012345678"
-- }

print(playerIdentifiers.steam)    -- Output: 110000112345678
print(playerIdentifiers.license)  -- Output: abcdef1234567890
print(playerIdentifiers.discord)  -- Output: 123456789012345678

```
{% endtab %}
{% endtabs %}

***

### PerformHttpRequestS

Simplifies making HTTP requests by providing a wrapper around `exports["sonorancad"]:HandleHttpRequest`.

```lua
exports.sonorancad.PerformHttpRequestS(url, cb, method, data, headers)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="128" align="center">Parameter</th><th width="161" align="center">Type</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>url</code></td><td align="center"><code>string</code></td><td align="center">The URL to which the HTTP request is sent.</td></tr><tr><td align="center"><code>cb</code></td><td align="center"><code>function</code></td><td align="center">The callback function executed when the HTTP request completes.</td></tr><tr><td align="center"><code>method</code></td><td align="center"><code>string</code></td><td align="center">The HTTP method to use (e.g., <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>).</td></tr><tr><td align="center"><code>data</code></td><td align="center"><code>string</code></td><td align="center">(Optional) The data to send with the HTTP request. Defaults to an empty string.</td></tr><tr><td align="center"><code>headers</code></td><td align="center"><code>table</code></td><td align="center">(Optional) A table containing custom headers for the HTTP request. Defaults to include <code>X-User-Agent</code>.</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="120" align="center">Type</th><th width="574" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>none</code></td><td align="center">This function does not directly return a value. Results are handled asynchronously via the <code>cb</code> callback function.</td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
-- Example: Performing a POST request with custom data
local function callback(statusCode, response)
    print("Status:", statusCode)
    print("Response:", response)
end

exports.sonorancad.PerformHttpRequestS(
    "https://api.example.com/data", 
    callback, 
    "POST", 
    '{"key": "value"}', 
    { ["Content-Type"] = "application/json" }
)

```
{% endtab %}
{% endtabs %}

***

### has\_value

Checks if a specific value exists in a table.

```lua
exports.sonorancad.has_value(tab, val)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="137" align="center">Parameter</th><th width="103" align="center">Type</th><th width="449" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>tab</code></td><td align="center"><code>table</code></td><td align="center">The table to search for the value.</td></tr><tr><td align="center"><code>val</code></td><td align="center"><code>any</code></td><td align="center">The value to search for within the table.</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="124" align="center">Type</th><th width="574" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>boolean</code></td><td align="center"><code>true</code> if <code>val</code> is found in the table tab. <code>false</code> if <code>val</code> is not found, or if tab is nil.</td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
-- Example 1: Checking if a value exists in a table
local myTable = { "apple", "banana", "cherry" }

local exists = exports.sonorancad.has_value(myTable, "banana")
print(exists)  -- Output: true

local notExists = exports.sonorancad.has_value(myTable, "grape")
print(notExists)  -- Output: false

-- Example 2: Handling a nil table
local nilTable = nil
local result = exports.sonorancad.has_value(nilTable, "value")
print(result)  -- Output: false (with debugLog: "nil passed to has_value, ignore")
```
{% endtab %}
{% endtabs %}

***

### compareVersions

Compares two semantic version strings.

```lua
exports.sonorancad.compareVersions(version1, version2)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="137" align="center">Parameter</th><th width="103" align="center">Type</th><th width="449" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>version1</code></td><td align="center"><code>string</code></td><td align="center">The first version string (e.g., <code>1.0.0</code>).</td></tr><tr><td align="center"><code>version2</code></td><td align="center"><code>string</code></td><td align="center">The second version string (e.g., <code>1.0.1</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Returns" %}
<table><thead><tr><th width="124" align="center">Type</th><th width="574" align="center">Description</th></tr></thead><tbody><tr><td align="center"><code>table</code></td><td align="center"><ul><li><code>result</code>: <code>true</code> if <code>version1</code> is greater than <code>version2</code>, <code>false</code> otherwise.</li><li><code>parsedVersion1</code>: The weighted numeric representation of <code>version1</code>.</li><li><code>parsedVersion2</code>: The weighted numeric representation of <code>version2</code>.</li><li><code>version1</code>: The original <code>version1</code> string.</li><li><code>version2</code>: The original <code>version2</code> string.</li></ul></td></tr></tbody></table>
{% endtab %}

{% tab title="Usage Example" %}
```lua
-- Example: Comparing two versions
local comparison = exports.sonorancad.compareVersions("1.2.3", "1.1.10")

print(comparison.result)          -- Output: true
print(comparison.parsedVersion1)  -- Output: 10203
print(comparison.parsedVersion2)  -- Output: 10110
```
{% endtab %}
{% endtabs %}
