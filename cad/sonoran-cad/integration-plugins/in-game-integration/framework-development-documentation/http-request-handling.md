---
description: Have your submodule handle HTTP requests sent to a special URL.
---

# HTTP Request Handling

## Submodule Code

This code only works on the Server side files since HTTP only works on servers, obviously!

{% hint style="danger" %}
You **must** return something, even if it's just a confirmation the data was received. Otherwise, the HTTP request will hang and eventually error on the client's side.
{% endhint %}

```
RegisterPluginHttpEvent("yourpluginname:hello", function(data)
    debugLog(("Got data: %s"):format(json.encode(data)))
    return { result = "ok, got some data!" }
end)
```

#### Breakdown

The framework exposes the `RegisterPluginHttpEvent` function for plugins to use (is not exported, currently). Using this function "registers" a particular type where the framework will send the POSTed payload to the callback function.

**Note: This will block the HTTP request, so take care if this is requesting data from an external source like a database.**

To actually use this, we would POST to the URL, as noted below.

Return a LUA table which will be encoded as JSON back to the requesting client.

## Submodule Event

<mark style="color:green;">`POST`</mark> `http://yourserverip:serverport/sonorancad/pluginevent`

Send a payload to trigger a specific HTTP event that was defined in the submodule code.

#### Request Body

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| data | object | A JSON object containing the payload to be sent |
| type | string | The registered type this data should be sent to |
| key  | string | Your API Key                                    |

{% tabs %}
{% tab title="200 " %}
```
Response varies based on return statement defined in the handler.
```
{% endtab %}
{% endtabs %}
