---
description: >-
  The EVENT_RECORD_EDIT push event will be sent when a record is modified in the
  CAD.
---

# Record Edited

### EVENT\_RECORD\_EDIT

Note: This event will NOT be fired when editing a record via API, as your server is already aware of the record being added.

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_RECORD_EDIT",
  "data": {
    "record": {} // Custom record object
  }
}
```

### Custom Record Object

The `record` object will contain the custom record object, in accordance with the record format below:

{% content-ref url="../../api-endpoints/general/custom-records/" %}
[custom-records](../../api-endpoints/general/custom-records/)
{% endcontent-ref %}
