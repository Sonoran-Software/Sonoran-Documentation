---
description: >-
  Rapid IQ guides emergency call-takers through dynamic, protocol-driven medical
  intake flows, enabling faster triage, consistent decision-making, and accurate
  dispatching.
---

# Rapid IQ

<figure><img src="../../.gitbook/assets/rapidiq_promo.png" alt=""><figcaption></figcaption></figure>

## What is Rapid IQ?

**Rapid IQ** (Rapid Intake Questionnaire) is an emergency call intake system that helps dispatchers ask the right questions during medical calls designed after [standardized MPDS systems](https://en.wikipedia.org/wiki/Medical_Priority_Dispatch_System). It guides dispatchers step-by-step through a structured flow based on the caller’s answers, making sure important details aren’t missed.

Rapid IQ combines these responses into the dispatch call description, giving the best possible information to responding units.

## Using Rapid IQ

### Opening Rapid IQ

<details>

<summary>Via Call Editor</summary>

Select the **Rapid IQ** button at the top of the call editor to open the window.

<figure><img src="../../.gitbook/assets/Screenshot 2026-02-13 at 3.44.22 PM.png" alt="" width="375"><figcaption></figcaption></figure>

</details>

<details>

<summary>Via Taskbar</summary>

In the taskbar, use the search box or navigate to **Dispatch** > **Rapid IQ** to open the window.

<figure><img src="../../.gitbook/assets/Screenshot 2026-02-13 at 3.45.04 PM.png" alt="" width="331"><figcaption></figcaption></figure>

</details>

### Navigating Flows

<details>

<summary>Inputs</summary>

Rapid IQ is designed for quick, seamless information inputs.

**Text Inputs**

* Inputs are automatically focused
* Pressing **Enter** navigates to the next question
* Custom addresses are type-to-filter
  * If results are filtered to a single result, pressing **Enter** automatically selects it and navigates to the next question. Pressing **Enter** with more than one result left will select the top option.

**Checkbox Inputs**

* Type-to-filter search at the top is automatically focused
  * If results are filtered to a single result, pressing **Enter** automatically selects it and navigates to the next question. Pressing **Enter** with more than one result left will select the top option.
* Selecting a checkbox navigates to the next question

**Navigation**

* Use the **Left** and **Right** arrow keys to navigate forward and backwards manually

**Masks**

* Flow inputs that use a mask (strict formatting for numbers, text, symbols, etc.) will automatically navigate to the next question once all text has been entered

</details>

<details>

<summary>End Toggle Options</summary>

Once all information has been entered, Rapid IQ offers different data display options.

**Import to Call Editor**

When toggled, all information will be automatically imported into the dispatch call editor and the window will be automatically closed (unless **Display Card** is enabled).

This feature is automatically toggled on when opening Rapid IQ from the call editor.

<div><figure><img src="../../.gitbook/assets/image (50).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure></div>

**Display Card**

When toggled, all information will be displayed in a card of questions and answers. Users can also press the **Copy** button (top right) to copy and paste all questions and answers elsewhere.

This feature is automatically toggled on when opening Rapid IQ from the taskbar.

<div><figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure></div>

</details>

## Customizing Flows

The default Rapid IQ flow is complex and configured by real-world dispatchers and medical personnel. **With heavy knowledge**, the system can be customized for different localities and situations. [You can read more about standard MPDS systems here](https://en.wikipedia.org/wiki/Medical_Priority_Dispatch_System).

#### Accessing the Editor

The Rapid IQ configuration is accessible under **Admin** > **Customization** > **Customization** > **Rapid IQ**

#### Default Path

The **Default Path** section configures the initial questions asked in-order. These questions can be selected and reordered via drag-and-drop.

<figure><img src="../../.gitbook/assets/image (518).png" alt="" width="375"><figcaption></figcaption></figure>

#### Questions

Configure custom **Questions** to be asked in order to gain more information about the medical issue.

Questions have specific input types like **Text**, **Number**, [**Address**](../customization/addresses-and-street-names.md), or **Choices**.

**Text** and **Number** inputs can also have a **Mask** input. A **Mask** enforces a specific input format. Once a user has entered all numbers/letters into the input, it will automatically advance to the next question.

Ex: `(###) ### - ####` forces a phone number format.

<details>

<summary><strong>Mask Options</strong></summary>

| Token | Description  |
| ----- | ------------ |
| #     | Numeric      |
| S     | Letter A-Z   |
| X     | Alphanumeric |

</details>

<figure><img src="../../.gitbook/assets/image (519).png" alt="" width="375"><figcaption></figcaption></figure>

#### Codes

Once all questions have been answered, Rapid IQ will display a code. The code is a short way to classify and triage the severity of the incident and to determine how best to respond.

#### What a code means

<details>

<summary>What a code means</summary>

A Rapid IQ code is a triage label in this format:

```
[Protocol Number][Priority Letter][Branch Number]
```

Example: `31C3`

* `31` = Unconscious / Fainting
* `C` = priority tier
* `3` = specific branch inside that protocol

</details>

#### Protocol numbers

<details>

<summary>Protocol Numbers</summary>

1. Abdominal Pain
2. Allergies / Envenomations
3. Animal Bites / Attacks
4. Assault / Sexual Assault
5. Back Pain
6. Breathing Problems
7. Burns / Explosion
8. Carbon Monoxide / Inhalation / HazMat
9. Cardiac / Respiratory Arrest / Death
10. Chest Pain
11. Choking
12. Convulsions / Seizures
13. Diabetic Problems
14. Drowning / Diving / SCUBA
15. Electrocution / Lightning
16. Eye Problems / Injuries
17. Falls
18. Headache
19. Heart Problems / AICD
20. Heat / Cold Exposure
21. Hemorrhage / Lacerations
22. Inaccessible Incident / Entrapment
23. Overdose / Poisoning
24. Pregnancy / Childbirth / Miscarriage
25. Psychiatric / Abnormal Behavior / Suicide Attempt
26. Sick Person
27. Penetrating Trauma
28. Stroke / TIA
29. Traffic / Transportation Incidents
30. Traumatic Injuries
31. Unconscious / Fainting
32. Unknown Problems (Person Down)

</details>

#### Priority Letters

<details>

<summary>Priority Letters</summary>

* E = highest severity / most urgent
* D = very high severity
* C = high severity
* B = moderate severity
* A = lower severity
* Ω = public assist / lowest-acuity pathway
* 000 = no final code (an error code)

</details>

#### How the system picks a code

<details>

<summary>Flow Code Selection</summary>

1. Ask default intake questions.
2. Check flow rules in order (top to bottom).
3. If a rule needs an unanswered question, ask that question next.
4. When a full rule matches, return that rule’s code.
5. Some rules use @ to auto-set/re-route (example: nature@chestpain).

</details>

#### Flows

Flows combine everything above. Flows string a list of questions together and determine which questions should be asked next, based on response. Once a flow is completed, a code will be generated.

#### Flow rule format

`{question} -> condition is “answered” {question=value} -> equals {question>=number} -> numeric compare {question<=number} -> numeric compare {question@value} -> auto-set answer {cond1}.{cond2}.{cond3}->CODE`

Example:

`{nature=abdominalPain}.{fainting=true}.{age>=50}->1C1`

<figure><img src="../../.gitbook/assets/image (520).png" alt="" width="375"><figcaption></figcaption></figure>

### Import and Export

Rapid IQ configurations can be imported and exported to save and share with other communities. Simply select the **Import** or **Export** button at the top to handle JSON files.

<figure><img src="../../.gitbook/assets/image (521).png" alt="" width="375"><figcaption></figcaption></figure>
