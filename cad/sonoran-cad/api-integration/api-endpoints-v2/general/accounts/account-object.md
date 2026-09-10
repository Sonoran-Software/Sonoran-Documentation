---
description: The Account Object represents a single community member's Sonoran CAD account.
---

# Account Object

The Account Object is returned by the following endpoints:

* [Get Account](get-account.md) — returns a single Account Object
* [Get Accounts](get-accounts.md) — returns an array of Account Objects under the `accounts` field

## Schema

| Field             | Type              |
| ----------------- | ----------------- |
| `uuid`            | string (uuid)     |
| `username`        | string            |
| `communityUserId` | string            |
| `status`          | integer           |
| `joined`          | string (ISO 8601) |
| `lastLogin`       | string (ISO 8601) |
| `permissions`     | object            |

## Example

```json
{
  "uuid": "00000000-0000-0000-0000-000000000000",
  "username": "ExampleUser",
  "communityUserId": "player-1234",
  "status": 1,
  "joined": "2026-01-14T18:22:00Z",
  "lastLogin": "2026-04-08T20:55:00Z",
  "permissions": {
    "police": true,
    "admin": false,
    // Rest of the permissions, see below
  }
}
```

## Enumeration Values

### ACCOUNT\_STATUS

| Value | Description |
| ----- | ----------- |
| `0`   | `PENDING`   |
| `1`   | `VALIDATED` |
| `2`   | `EXPIRED`   |
| `3`   | `REMOVED`   |
| `4`   | `BANNED`    |

## Permissions

| Field                     | Type    |
| ------------------------- | ------- |
| `admin`                   | boolean |
| `adminAccounts`           | boolean |
| `adminCustomization`      | boolean |
| `adminDepartments`        | boolean |
| `adminDiscordIntegration` | boolean |
| `adminInGameIntegration`  | boolean |
| `adminLimits`             | boolean |
| `adminLogs`               | boolean |
| `adminPenalCodes`         | boolean |
| `adminPermissionKeys`     | boolean |
| `adminTenCodes`           | boolean |
| `civilian`                | boolean |
| `dispatch`                | boolean |
| `dmv`                     | boolean |
| `dmvRecAdd`               | boolean |
| `dmvRecEdit`              | boolean |
| `dmvRecRemove`            | boolean |
| `dmvSuper`                | boolean |
| `ems`                     | boolean |
| `fire`                    | boolean |
| `fireRecAdd`              | boolean |
| `fireRecEdit`             | boolean |
| `fireRecRemove`           | boolean |
| `fireSuper`               | boolean |
| `lawRecAdd`               | boolean |
| `lawRecEdit`              | boolean |
| `lawRecRemove`            | boolean |
| `lawSuper`                | boolean |
| `lawyer`                  | boolean |
| `liveMap`                 | boolean |
| `medRecAdd`               | boolean |
| `medRecEdit`              | boolean |
| `medRecRemove`            | boolean |
| `medSuper`                | boolean |
| `modifyStreetSigns`       | boolean |
| `police`                  | boolean |
| `polEditOtherUnit`        | boolean |
| `polEditUnit`             | boolean |
| `polRecAdd`               | boolean |
| `polRecEdit`              | boolean |
| `polRecRemove`            | boolean |
| `polSuper`                | boolean |
| `selfDispatch`            | boolean |
