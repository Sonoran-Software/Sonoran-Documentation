---
description: Choose built-in and Google fonts, or upload your own custom fonts through CMS Drive.
---

# Fonts & Custom Uploads

Use the font selector wherever a CMS editor offers font customization, including website text, navigation bars, and roster text. Choose from the included system and Google fonts, or add your community's own fonts through CMS Drive.

## Using Included Fonts

Open the editor for the text or component you want to customize, then choose a font from its font selector. In a rich-text editor, select existing text before choosing a font to change that selection. Save your changes when finished.

The included Google fonts load automatically when selected. No upload or Google account is required. System fonts depend on which fonts are available on the viewer's device.

## Uploading Your Own Fonts

### 1. Prepare Your Font File

CMS accepts these formats:

| File format | Extension |
| --- | --- |
| TrueType | `.ttf` |
| OpenType | `.otf` |
| Web Open Font Format | `.woff` |
| Web Open Font Format 2 | `.woff2` |

Each font file must be **5 MB or smaller**. Upload individual font files using **Upload File**; fonts inside a ZIP are not imported. If your download is a ZIP, extract it on your computer first.

CMS automatically converts TTF, OTF, and WOFF uploads to WOFF2 for storage and web delivery. You do not need to convert them yourself. The stored file counts toward your community's Drive storage allowance.

Upload fonts you have permission to use on a website.

### 2. Upload to CMS Drive

1. Open **Drive** in your community's admin panel.
2. Open the folder where you want to store the font, or stay in the Drive root.
3. Select **New** > **Upload File**, or right-click in Drive and select **Upload File**.
4. Select your font file and complete the upload.

Your rank needs **Modify Documents (Drive)** permission, and you must be able to edit the destination folder. Your community also needs enough available Drive storage.

New font uploads start private. Uploading the file alone does not make it appear in the font menus.

### 3. Make the Font Available

1. Right-click the uploaded font in Drive and open **Share Settings**.
2. Turn off **Inherit Parent Folder Access Permissions**, if enabled.
3. Set **General Access** to **Anyone with this link**. Select this on the font itself, even if its parent folder is already public.
4. Save the sharing settings.

The font must not be marked sensitive or be in the trash. Its parent folders must also remain out of the trash.

{% hint style="info" %}
Making a font available lets visitors download its font data so their browsers can display it. Only publish font files that you are allowed to share for web use.
{% endhint %}

### 4. Apply Your Custom Font

Return to the editor and open its font selector. Your font appears under its Drive filename with **(custom)** added to the label. Select it and save the page, roster, or component you are editing.

If an already-open editor does not show the new font, close and reopen it or refresh the page after saving the font's sharing settings.

## Managing Uploaded Fonts

Rename the font in Drive to change its name in the font menus. Renaming keeps existing font references intact.

To stop making a font available, change its General Access to **Restricted** or move it to the trash. Content that used it may display a fallback font once the custom font can no longer load. This cannot remove copies visitors have already downloaded.

Uploading a replacement creates a separate font. Select the replacement in the content that should use it before removing the old font. Downloads from Drive use the stored WOFF2 format, including fonts originally uploaded as TTF, OTF, or WOFF.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| The upload is rejected | Use a valid individual TTF, OTF, WOFF, or WOFF2 file up to 5 MB. Check your Modify Documents permission, destination folder access, and available Drive storage. Renaming a file's extension does not convert it. |
| The font is missing from the selector | Set General Access on the font itself to Anyone with this link and disable inherited access permissions. Check that the font is not sensitive and neither it nor its parent folders are in the trash. Save, then reopen the editor or refresh. |
| Existing text still uses its old font | Select the text in the rich-text editor before applying the font, then save your changes. |
| The font stopped displaying | Check whether its sharing settings changed or the font or a parent folder was moved to the trash. Restore access or select another available font. |
| Conversion is busy or times out | Retry the upload shortly. If the same file repeatedly fails, try another valid export of the font. |

For more on file permissions and storage, see [Drive & Documents](../your-drive-and-documents.md).
