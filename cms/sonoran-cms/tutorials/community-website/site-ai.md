---
description: Create and refine community website pages with Site AI.
---

# Site AI

Site AI is the assistant built into the [Website Builder](website-builder.md). Describe a page or a change in plain language to generate editable layouts, text, styling, and images. You can also ask questions and refine a design through follow-up messages.

## Create your first page

1. Open **Administration Panel > Website Builder**.
2. Add a new page or open an existing page you have permission to edit.
3. Select **Site AI** in the right sidebar.
4. Describe the page you want, then select **Send**. You can also use **Ctrl + Enter** or **⌘ + Enter**.
5. Answer any clarification questions in the same conversation.
6. When a draft is ready, use **Full preview** to inspect it, or **Apply to preview** to put it into the editor.
7. Review the result on desktop, tablet, and mobile, then select **Save** in the page header.

{% hint style="warning" %}
Generating a draft or applying it to the editor does **not** save the page. Select **Save** to make the changes available on the saved page. Review the page's public/private setting before saving.
{% endhint %}

## Writing a useful prompt

Include your community name, game or purpose, preferred style, sections, and where buttons should go. Tell Site AI what to preserve when editing an existing page.

> Create a modern, dark homepage for Arizona Roleplay, a serious FiveM roleplay community established in 2019. Include a hero, three community benefits, and a final call to action. Add Apply and Rules buttons. Link Apply to our Membership Application form and Rules to our existing Rules page. Use generous spacing and make the layout work on mobile. Generate a realistic roleplay-themed hero background.

For a smaller edit:

> Keep the existing text and images. Add more space around the hero content, make the application button narrower on desktop, and stack the benefit cards on mobile.

Be specific about image requests. If you already like the artwork, ask Site AI to reuse it rather than generate replacements.

## Follow-up questions and changes

Continue in the same conversation to ask questions or revise the page. Site AI may ask you to choose a destination when several forms or pages match your request. Reply with the exact option you want.

For example:

> Use Membership Application 2.0 for the Apply button.

> Make the hero less tall, but keep its background and heading.

> Change the accent color to blue without changing the layout.

A question or explanation does not necessarily produce a new draft. When a change produces a draft, its preview controls appear with that completed draft in the conversation.

Apply the draft you want to continue editing before requesting more changes. Review each new result and **Save** again when you are ready to keep it.

## Drafts and manual editing

Drafts and conversation history are associated with the page. New pages can use Site AI before their first save; their conversation is linked to the saved page when it receives its page ID.

You can mix AI changes with manual editing:

* **Insert:** Add elements and ready-made Content Blocks.
* **Selected element:** Edit text, images, button destinations, size, and styling.
* **Design:** Adjust site fonts, manage custom fonts, and change the page background. Advanced options include Custom CSS Classes.

After applying a draft, **Undo draft application** restores the editor state from before the latest application. It also discards manual changes made afterward. Undo affects the editor; save again if you want the restored version to replace the saved page.

{% hint style="info" %}
Site-wide font defaults have their own **Save site styles** action and apply across the community website. They are separate from saving an individual page.
{% endhint %}

## Images and button destinations

Ask Site AI to generate images for backgrounds or image elements. Generated images are public website assets and count toward the community's Site AI usage. Do not include credentials, sensitive information, or private member data in image requests.

Site AI can look up supported navigation destinations, including forms, internal pages, and Drive files. Give the exact form or page name where possible. For external links, provide the full HTTPS URL.

Linking to a page, form, or file does not grant visitors permission to access it. Check destinations and permissions before sharing the page.

## Usage and availability

Site AI usage is shared by the community, not allocated separately to each member. The Site AI panel and community Limits panel show the percentage of the monthly allowance used. Your subscription tier determines the allowance.

* Usage depends on the work performed, including conversation context, generated text, and images. It is not a fixed number of pages.
* Only one Site AI generation can run at a time within a community. Wait for it to finish before another member starts a request.
* The allowance resets at the start of each calendar month in UTC.
* A request admitted while usage is below the allowance may finish even if it takes usage over the limit. Further requests are blocked until usage is available again.
* A failed request can still consume usage if AI processing or image generation already occurred.

For efficient revisions, request a focused change and reuse existing images when possible.

## Troubleshooting

### The assistant asks a question instead of creating a page

Reply in the same conversation. It may need to distinguish between forms or pages, or obtain an external URL before building the links.

### Generation is reconnecting or status is temporarily unavailable

Allow the existing request to reconnect rather than repeatedly sending the same prompt. If the problem persists, reopen the page and check the conversation for the result. Contact support with the community ID, approximate time, prompt, and exact error message if no result appears.

### A draft failed validation or could not finish

The generated result could not be completed or accepted as a valid draft. Check the conversation's error message and try a smaller, more specific change. Usage may already have been recorded. For repeated failures, send support the prompt and exact error.

### The draft looks correct, but visitors do not see it

Confirm that you selected **Apply to preview**, then **Save**. Check that you are opening the correct page URL and that its visibility and permissions are appropriate. Creating a page does not automatically make it the community homepage; see [Default / Home Landing Page](website-builder.md#default--home-landing-page).

### Saving the page fails

Keep the editor open so you do not lose unsaved changes. Check the displayed error and whether the URL slug conflicts with another page. If it continues, contact support with the community ID, page URL, approximate time, and error text. A ready draft is not confirmation that the page was saved.
