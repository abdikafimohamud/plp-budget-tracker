# budget-tracker - Personal Budget & Expense Tracker

## Project Overview

SpendWise is a simple Personal Budget & Expense Tracker built using HTML and CSS. The project helps users organize and view their expenses in one place.

This project was originally started in Week 1 and was expanded in Week 2 by adding structured expense data, an improved expense form, multimedia content, interactive elements, semantic HTML, and advanced CSS selectors.

In Week 3, the project was visually redesigned using an intentional color palette, custom Google Fonts typography, refined table and form styling, and the CSS Box Model, transforming it from a functional page into a polished, professional-looking application.

In Week 4, the page was rebuilt into a true dashboard shell using CSS Grid and Flexbox, with a sidebar, a top header bar, six spending-category overview cards, a responsive breakpoint, and card micro-interactions — while keeping all existing content (the expense form, expense table, "How to Use" section, and budgeting video) intact.

## Features

### 1. Expense Table

The project includes a structured HTML expense table containing:

* Expense Name
* Amount
* Category
* Date

The table uses semantic table elements including:

* `<table>`
* `<thead>`
* `<tbody>`
* `<tr>`
* `<th>`
* `<td>`

It also includes five sample expense records.

### 2. Add Expense Form

The Add Expense section contains a form where users can enter:

* Expense name
* Expense amount
* Expense category
* Expense date

The category field uses a dropdown with five options:

* Food
* Transport
* Rent
* Entertainment
* Other

The form also includes an "Add Expense" button.

JavaScript functionality will be added in a later week.

### 3. Multimedia Content

A logo image is used both in the sidebar brand mark and, previously, near the main heading, via the `<img>` element with `src`, `alt`, and `width`.

A YouTube budgeting video has also been embedded using an `<iframe>`.

### 4. Interactive Elements

A collapsible "How to use this tracker" section was created using `<details>` and `<summary>`.

The expense table also includes a hover effect that changes the appearance of table rows when the user moves the mouse over them.

The Add Expense button uses `cursor: pointer` to indicate that it can be clicked.

### 5. Advanced CSS Selectors

The project demonstrates several advanced CSS selectors, including:

* Descendant selectors
* `:nth-child(even)`
* `:first-child`
* `:not()`
* `:focus`
* `:hover`
* `:required`
* `:active`
* `:focus-visible` (added in Week 4, for keyboard-accessible card interactions)

### 6. Semantic HTML

The project uses semantic HTML elements to give the page meaningful structure:

* `<nav>` - The sidebar navigation.
* `<header>` - The top bar containing the page title.
* `<main>` - Contains the main dashboard content.
* `<section>` - Organizes different parts of the tracker.
* `<footer>` - Contains copyright information.

### 7. Visual Identity & Design System (Week 3)

Week 3 focused entirely on transforming SpendWise's visual design using CSS.

#### Color Palette

A cohesive green-based color palette was implemented using CSS custom properties (`:root` variables) so that colors stay consistent and easy to update across the entire site:

* `--color-primary: #2e7d32` — main brand green, used for the header, sidebar active link, table headers, and buttons.
* `--color-primary-dark: #1b5e20` — used for hover states, the sidebar background, and the footer.
* `--color-primary-light: #81c784` — used for input focus outlines and required-field indicators.
* `--color-primary-pale: #e8f5e9` — used as a soft background for the Add Expense card and card tags.
* `--color-accent-row: #c8e6c9` — used for the table row hover effect.
* `--color-text`, `--color-text-light`, `--color-bg`, `--color-white`, `--color-border` — neutral tones for text, page background, cards, and borders.

Green was chosen because it reinforces the app's theme of financial growth, savings, and trust.

#### Typography

Custom typography was added using [Google Fonts](https://fonts.google.com/):

* **Poppins** (weights 600/700) is used for headings, sidebar links, card labels/amounts, table header text, and buttons, giving the interface a strong, confident personality.
* **Inter** (weights 400/500/600) is used for body text, labels, and paragraph content, prioritizing readability.

#### Table and Form Styling

* Table cells and form inputs use consistent padding for comfortable spacing.
* The table header (`<thead>`) is styled with the primary green background and bold heading font.
* Table rows alternate background color using `:nth-child(even)` for easier scanning.
* Table rows highlight on `:hover` to show interactivity.
* Form inputs and the dropdown share consistent padding, borders, border-radius, and font styling.
* Inputs display a green outline and background tint on `:focus`, and a colored left border on `:required` fields.
* The "Add Expense" button uses the primary color, rounded corners, a hover state, and a subtle `:active` press effect.

#### CSS Box Model

Margin, padding, border-radius, and box-shadow were used intentionally to turn the Add Expense form, expense table, "How to Use" section, and video section into distinct, separated visual "cards" with consistent spacing.

### 8. Dashboard Shell (Week 4)

Week 4 restructured the page into a dashboard layout without changing any of the existing content.

#### Layout: CSS Grid + Flexbox

* **CSS Grid** defines the overall page shell: a `.dashboard` grid with `grid-template-areas` for a sidebar, a header row, a main content row, and a full-width footer row. No absolute positioning is used for the layout.
* **Flexbox** handles every smaller arrangement: the sidebar's stacked brand + nav links, the header's title alignment, and each overview card's internal label/amount/meta stack.
* Six new **overview cards** (Rent, Food, Transport, Utilities, Entertainment, Savings) were added in a `display: grid` card row, each showing a realistic static amount, a budget or status tag, and a short meta line.

#### New Theme Variable

* `--color-accent: #f9a825` — a warm amber accent, distinct from the brand green, used for the Savings card amount and "on track" status tags, so goal-related information stands out from routine spending.

#### Responsive Design

* A new `max-width: 768px` media query collapses the dashboard grid into a single column (sidebar on top, then header, then main, then footer) and turns the sidebar's vertical nav into a horizontal, scrollable row. This is in addition to the existing 700px/600px breakpoints from Week 3, which still handle the table and form's mobile behavior.

#### Micro-interactions

* Each overview card lifts slightly and gains a soft shadow on `:hover` and `:focus-visible`, using a 200ms `transform` + `box-shadow` transition, so keyboard users get the same feedback as mouse users.

#### Dark Theme (Stretch Goal)

* A `@media (prefers-color-scheme: dark)` block overrides only the `:root` color variables — no other CSS was changed — so the whole dashboard, including the sidebar, cards, form, and table, re-themes automatically for users with a dark system preference.

## Technologies Used

* HTML5
* CSS3 (Grid, Flexbox, custom properties)
* Google Fonts (Poppins, Inter)

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
└── README.md
```

## What I Learned

During Week 2, I learned how to:

* Create structured HTML tables.
* Build and improve HTML forms.
* Use `<select>` and `<option>` elements.
* Embed images and YouTube videos.
* Create collapsible content using `<details>` and `<summary>`.
* Use semantic HTML elements.
* Apply advanced CSS selectors.
* Use pseudo-classes such as `:hover`, `:focus`, and `:nth-child()`.
* Improve the visual design and usability of a web page.
* Organize a project using HTML, CSS, and a README file.

During Week 3, I learned how to:

* Build a cohesive color palette using CSS custom properties (`--variables`).
* Import and apply Google Fonts, and pair a heading font with a body font.
* Use `font-weight`, `letter-spacing`, and font pairing to build visual hierarchy.
* Style tables and forms with intentional padding, borders, and consistent input styling.
* Use the CSS Box Model (padding, margin, border, border-radius) to create distinct "card" sections.
* Apply `box-shadow` to give sections depth and separation from the page background.
* Recognize the difference between a webpage that "works" and one that feels professional.

During Week 4, I learned how to:

* Structure a full page layout using CSS Grid `grid-template-areas`, instead of stacking everything in Normal Flow.
* Use Flexbox for smaller, internal arrangements (sidebar nav, header, card contents) while Grid handles the overall page structure.
* Build a responsive dashboard that collapses cleanly into a single column below 768px, including turning a vertical sidebar into a horizontal scrollable nav.
* Add accessible hover **and** keyboard-focus micro-interactions using `transform`, `box-shadow`, and `:focus-visible`.
* Implement a full dark theme by overriding only `:root` custom properties inside a `prefers-color-scheme` media query.
* Merge a new layout into an existing project without breaking or duplicating previously built content.

## What was hardest

Getting the sidebar and overview card grid to collapse cleanly at 768px, on top of the existing 700px/600px breakpoints from Week 3, took the most care — making sure the new dashboard-shell breakpoint and the older content-specific breakpoints didn't conflict, and that the sidebar became a usable horizontal nav on small screens instead of just shrinking in place.

## Future Improvements

In future weeks, I plan to add JavaScript functionality so that users can:

* Add new expenses dynamically.
* Remove expenses.
* Calculate total expenses.
* Filter expenses by category.
* Store and manage expense data.
* Connect the overview cards to real calculated totals instead of static figures.

## Author

Created as part of the PLP Web Development learning journey.

## License

This project is created for educational purposes.