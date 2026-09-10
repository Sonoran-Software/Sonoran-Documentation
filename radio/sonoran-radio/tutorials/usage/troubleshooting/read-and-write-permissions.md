---
description: >-
  How to fix SonoranRadio issues caused by read-only file permissions on Windows
  and Linux servers.
---

# Read and Write Permissions

#### <br>

## SonoranRadio – Fix “Config File Is Read-Only” Error

***

### Step 1: Open Your Game Panel

Log into the game panel where your FiveM server is hosted\
(e.g. **ZAP-Hosting, txAdmin, Pterodactyl, Gamepanel, VPS**).

***

### Step 2: Locate the Config File

Navigate to:

```
resources/sonoranradio/config.lua
```

***

## 🪟 WINDOWS HOSTS

#### Step 1: Locate the file

```
resources\sonoranradio\config.lua
```

***

#### Step 2: Open file properties

1. Right-click `config.lua`
2. Click **Properties**

***

#### Step 3: Allow Read & Write access

1. Under the **General** tab:
   * ❌ Uncheck **Read-only**
2. Click **Apply**
3. Click **OK**

This allows the file to be both **read and written** by the server.

***

#### If it keeps reverting to Read-Only

Apply the change to the entire folder:

1. Right-click the **`sonoranradio`** folder
2. Click **Properties**
3. Uncheck **Read-only**
4. Click **Apply**
5. Select **Apply changes to this folder, subfolders, and files**
6. Click **OK**

***

## 🐧 LINUX HOSTS

(ZAP-Hosting, Gamepanel, Pterodactyl, VPS)

#### Step 1: Open your game panel or file manager

Log into the panel where your FiveM server is hosted.

***

#### Step 2: Locate the config file

```
resources/sonoranradio/config.lua
```

***

#### Step 3: Fix file permissions

Set the file permissions so the server can write to it:

* **Recommended:** `766`
* **If that fails:** `666`

If your panel supports it:

1. Right-click `config.lua`
2. Select **Permissions**
3. Apply the change

⚠️ If your panel does **not** allow permission changes, contact your hosting provider and ask them to make the file writable.

***

### Linux File Permissions – Quick Reference

Each permission digit is the sum of:

* **4** = Read (r)
* **2** = Write (w)
* **1** = Execute (x)

#### Common Permission Values

* `0` = --- (No access)
* `4` = r-- (Read only)
* `6` = rw- (Read + Write)
* `7` = rwx (Read + Write + Execute)

#### Permission Structure

```
OWNER | GROUP | OTHERS
  X   |   Y   |   Z
```

Example:

* `766` → Owner has full access, group/others can read & write
* `666` → Read & write for everyone (no execute)

***

### Final Step: Restart SonoranRadio

After making changes, restart the resource or server:

```
restart sonoranradio
```

#### <br>
