---
description: >-
  View all of our API endpoints, learn about our data structuring, and integrate
  your framework with Sonoran CAD.
hidden: true
---

# API Endpoints

{% hint style="info" %}
API endpoints are not enabled with the free version of Sonoran CAD.\
For more information, see our [pricing](../../pricing/faq/) or view how to check your community [limits](../../tutorials/getting-started/view-your-limits.md).
{% endhint %}

{% hint style="success" %}
Looking for the new header-based API? See [v2 API Endpoints](../api-endpoints-v2/).
{% endhint %}

{% hint style="success" %}
Looking for VPS, web, or dedicated hosting? Check out our official [server hosting](/broken/pages/-MRResNcPrj2q6MmmS6j)!
{% endhint %}

## Available API Endpoints

### Emergency Endpoints

View all emergency endpoints including unit actions, emergency calls, dispatching, and more!

{% content-ref url="emergency/" %}
[emergency](emergency/)
{% endcontent-ref %}

### Civilian Endpoints

View all civilian endpoints including creating new characters, modifying licenses, vehicle registrations, and more!

{% content-ref url="civilian/" %}
[civilian](civilian/)
{% endcontent-ref %}

### General Endpoints

View all general endpoints for user account actions, administrative actions, and more!

{% content-ref url="general/" %}
[general](general/)
{% endcontent-ref %}

### v2 API Endpoints

View the new versioned API with bearer authentication, resource-style routes, and structured error responses.

{% content-ref url="../api-endpoints-v2/" %}
[api-endpoints-v2](../api-endpoints-v2/)
{% endcontent-ref %}

## API Code Examples

### Javascript

This example makes a [unit panic request](emergency/identifiers/unit-panic.md) based on a unit's API ID. This uses the [Axios library](https://www.npmjs.com/package/axios) to help make the HTTP POST request.

The server response is then logged to console.

```javascript
// Import Axios library
// https://www.npmjs.com/package/axios
// Install command: `npm i axios` 
import axios from 'axios';
// Set the API URL (CAD backend)
let baseURL = 'https://api.sonorancad.com';
// Set the `api` object to be used
let api = axios.create({ baseURL });

// Format the POST body data
// https://info.sonorancad.com/sonoran-cad/api-integration/api-endpoints/emergency/unit-panic
const data = {
  id: 'YOUR_COMMUNITY_ID',
  key: 'YOUR_API_KEY',
  type: 'UNIT_PANIC',
  data: [
    // Data: List (array) of unit panic objects
    //  Here, we're specifying one unit to PANIC
    {
      apiId: "STEAM:5678", // Unit with their API ID set as `STEAM:5678`
      isPanic: true,       // Panic ON
    }
  ],
};

// Send the POST request
//  Format the data to JSON
api.post('/emergency/unit_panic', JSON.stringify(data))
  .then((response) => {
    // Response back from the backend
    console.log(response);
  })
  .catch((err) => {
    // Error response back from the backend
    console.log(err);
 });
```

### Lua

This example makes a [unit panic request](emergency/identifiers/unit-panic.md) based on a unit's API ID. This uses the[ FiveM performHttpRequest native](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/PerformHttpRequest/) to help make the HTTP POST request.

The server response is then logged to console.

```lua
-- Body payload object
local payload = {}

-- Specify our community ID, API key, and API method type (Panic)
payload["id"] = "YOUR_COMMUNITY_ID"
payload["key"] = "YOUR_API_KEY"
payload["type"] = "UNIT_PANIC"

-- Data: List (array) of unit panic objects
--    Here, we're specifying one unit to PANIC
local postData = {
    {
        ["apiId"] = "STEAM:5678",  -- Unit with their API ID set as `STEAM:5678`
        ["isPanic"] = true         -- Panic ON
    },
}
-- Add this data to our payload
payload["data"] = postData

-- Send POST request with JSON encoded body (payload)
PerformHttpRequest("https://api.sonorancad.com/emergency/unit_panic", function(statusCode, res, headers)
    if statusCode == 200 and res ~= nil then
        -- Status code 200 (Success)
        print("result: "..tostring(res))
    else
        -- Error code
        print(("CAD API ERROR: %s %s"):format(statusCode, res))
    end
end, "POST", json.encode(payload), {["Content-Type"]="application/json"})
```
