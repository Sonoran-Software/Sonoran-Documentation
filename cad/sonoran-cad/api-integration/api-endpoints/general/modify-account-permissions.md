---
description: >-
  Sonoran CAD allows you to manually add or remove user account permissions via
  API.
---

# Modify Account Permissions

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Modify Account Permissions

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/set_account_permissions`

This endpoint allows you to apply a permission key to a user in your community.

#### Request Body

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| id   | string | Your community's ID                      |
| key  | string | Your community's API Key                 |
| type | string | SET\_ACCOUNT\_PERMISSIONS                |
| data | array  | Array of user account permission objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
User account permissions updated.
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response:" %}
```http
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API ENDPOINT IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
```
{% endtab %}

{% tab title="404 A non-linked API ID will be met with the following response:" %}
```
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "SET_ACCOUNT_PERMISSIONS",
    "data": [
        {
            "apiId": "STEAM:1234",      // (OPTION 1) API ID: Typically, this is their STEAM ID
            "username": "SonoranBrian", // (OPTION 2) CAD Username
            "accId": 000-000-000,       // (OPTION 3) Sonoran SSO UUID
            "active": true,             // OPTIONAL: Set account status to ACTIVE (true) or PENDING (false)
            "add": [
                // Array of permission names to ADD
                "POLICE",
                "POLICERECEDIT"
            ],
            "remove": [
                // Array of permission names to REMOVE
                "CIVILIAN"
            ],
            "set": [
                // (Optional) Array of the ONLY permissions the user will get
                // This overrides ADD and REMOVE
            ],
            "join": true // (OPTIONAL) will force-join the user to the community.
            // This force join only works when using `accId`
        },
    ]
}
```

The `username`, `apiId`, and `accId` are separate ways to specify the account you are modifying the permissions of. You only need to specify one.

The `add` and `remove` permission string arrays do not both have to be specified. You can use this API call to only add, only remove, or both add and remove permissions.

The `active` boolean is optional and will update the user's account status to `ACTIVE` or `PENDING`.

| Permission String Name  | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| CIVILIAN                | Access to the Civilian page                           |
| LAWYER                  | Access to the Law page                                |
| DMV                     | Access to the DMV page                                |
| POLICE                  | Access to the Police page                             |
| FIRE                    | Access to the Fire page                               |
| EMS                     | Access to the EMS page                                |
| DISPATCH                | Access to the Dispatch page                           |
| ADMIN                   | Access to the Admin page                              |
| POLRECADD               | Permission to add police records                      |
| POLRECEDIT              | Permission to edit police records                     |
| POLRECREMOVE            | Permission to remove police records                   |
| POLSUPER                | Permission to modify police record supervisor fields  |
| POLEDITUNIT             | Permission to edit their unit identifier              |
| POLEDITOTHERUNIT        | Permission to edit other unit identifiers             |
| SELFDISPATCH            | Permission to enable self dispatch                    |
| LIVEMAP                 | Access to the live map                                |
| MEDRECADD               | Permission to add medical records                     |
| MEDRECEDIT              | Permission to edit medical records                    |
| MEDRECREMOVE            | Permission to remove medical records                  |
| MEDSUPER                | Permission to modify medical record supervisor fields |
| FIRERECADD              | Permission to add fire records                        |
| FIRERECEDIT             | Permission to edit fire records                       |
| FIRERECREMOVE           | Permission to remove fire records                     |
| FIRESUPER               | Permission to modify fire record supervisor fields    |
| DMVRECADD               | Permission to add DMV records                         |
| DMVRECEDIT              | Permission to edit DMV records                        |
| DMVRECREMOVE            | Permission to remove DMV records                      |
| DMVSUPER                | Permission to modify DMV record supervisor fields     |
| MODIFYSTREETSIGNS       | Permission to modify street signs                     |
| LAWRECADD               | Permission to add law records                         |
| LAWRECEDIT              | Permission to edit law records                        |
| LAWRECREMOVE            | Permission to remove law records                      |
| LAWSUPER                | Permission to modify law record supervisor fields     |
| ADMINACCOUNTS           | Permission to view/modify user accounts               |
| ADMINPERMISSIONKEYS     | Permission to view/modify permission keys             |
| ADMINCUSTOMIZATION      | Permission to access the admin customization menu     |
| ADMINDEPARTMENTS        | Permission to modify the department structure         |
| ADMINTENCODES           | Permission to modify the 10-codes                     |
| ADMINPENALCODES         | Permission to modify the penal codes                  |
| ADMININGAMEINTEGRATION  | Permission to access the in-game integration panel    |
| ADMINDISCORDINTEGRATION | Permission to access the Discord integration panel    |
| ADMINLIMITS             | Permission to view the community limits panel         |
| ADMINLOGS               | Permission to view the community logs                 |
