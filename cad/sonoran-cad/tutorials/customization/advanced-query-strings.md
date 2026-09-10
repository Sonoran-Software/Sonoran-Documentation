---
description: Sonoran CAD provides additional query string options for embedded use!
---

# Advanced Query Strings

### Force Mobile

| String      | Usage                                  | Description                                                                                                                                                                                                                             |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| forcemobile | app.sonorancad.com/#/?forcemobile=TRUE | Your CAD will forcefully format the emergency services action bars to mobile format. This is beneficial for communities that are embedding the CAD in-game on a smaller format that does not quite meet the standard mobile dimensions. |

![Sonoran CAD's 'forcemobile' action bar](../../.gitbook/assets/mobile.PNG)

### Default Audio Level

| String     | Usage                               | Description                                                                                                                                                                                         |
| ---------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audiolevel | app.sonorancad.com/#/?audiolevel=25 | Your CAD audio settings will be set by default to the value provided. This is beneficial to communities that are embedding the CAD inside of a resource, and may wish to mute the audio by default. |

![Sonoran CAD's 'audiolevel' query string result](../../.gitbook/assets/audio.PNG)

### Hide "Switch Community"

| String        | Usage                                    | Description                                                                                                                                                                                                                |
| ------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lockCommunity | app.sonorancad.com/#/?lockCommunity=true | For communities using the [tablet ](/broken/pages/-MCu5Pqlq4KeXD2LHoVt)resource or [custom login page](custom-login-page.md), this query string locks the user to your community and hides the "Switch Community" buttons. |
