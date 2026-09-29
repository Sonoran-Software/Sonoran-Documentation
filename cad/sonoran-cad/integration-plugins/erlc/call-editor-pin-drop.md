---
description: Select a location on the ERLC map to fill a dispatch call's street address and postal code.
---

# Call Editor Pin Drop

![ERLC Call Editor Pin Drop](../../.gitbook/assets/erlc_pin_picker_promo.png)

Drop a pin instead of typing an address. Select a location on the 2D ERLC map and Sonoran CAD fills the nearest street name and postal code in your dispatch call.

### 1. Check ERLC mode

Make sure your CAD community is in **ER:LC** mode under **Administration → Advanced → In-Game Integration**.

### 2. Open the map

Create or edit a dispatch call. Select the **pin icon** inside the **Address** field to open the 2D map picker.

### 3. Select the location

Drag to pan and scroll to zoom. Open **Legend** to access the map controls, including the **map labels** button to show or hide street and postal labels.

![The ERLC 2D map picker with street names and postal labels](../../.gitbook/assets/erlc_pin_picker_map.jpg)

Click the call's location. The map closes and fills the **Address** and **Postal** fields. You can adjust either field before saving the call.

The picker uses the nearest mapped street and postal. It does not fill a building number.

## Use the ERLC street list

To suggest ERLC street names while typing, open **Administration → Advanced → In-Game Integration → ER:LC**. In **Addresses**, select **Use ER:LC street list**.

This loads the official map's **75 street and trail names** into your community's address dropdowns and replaces the current address list.

New communities that select ERLC during registration receive this list automatically. Selecting ERLC later also fills an empty address list; an existing custom list is preserved until you choose to replace it.

For custom address lists, see [Addresses and Street Names](../../tutorials/customization/addresses-and-street-names.md).

## Send the location to Discord

You can also enable [ERLC Location Notifications](location-notifications.md) to include an aerial location image with emergency and dispatch call webhooks.
