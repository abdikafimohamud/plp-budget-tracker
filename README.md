# budget-tracker - Personal Budget & Expense Tracker

## Project Overview

SpendWise is a simple Personal Budget & Expense Tracker built using HTML and CSS. The project helps users organize and view their expenses in one place.

This project was originally started in Week 1 and was expanded in Week 2 by adding structured expense data, an improved expense form, multimedia content, interactive elements, semantic HTML, and advanced CSS selectors.

In Week 3, the project was visually redesigned using an intentional color palette, custom Google Fonts typography, refined table and form styling, and the CSS Box Model, transforming it from a functional page into a polished, professional-looking application.

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

A logo image has been added near the main heading using the `<img>` element with:

* `src`
* `alt`
* `width`

A YouTube budgeting video has also been embedded using an `<iframe>`.

### 4. Interactive Elements

A collapsible "How to use this tracker" section was created using:

* `<details>`
* `<summary>`

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

These selectors are used to improve the appearance and interactivity of the page.

### 6. Semantic HTML

The project uses semantic HTML elements to give the page meaningful structure:

* `<header>` - Contains the main heading and logo.
* `<nav>` - Contains navigation links.
* `<main>` - Contains the main page content.
* `<section>` - Organizes different parts of the tracker.
* `<footer>` - Contains copyright information.

### 7. Visual Identity & Design System (Week 3)

Week 3 focused entirely on transforming SpendWise's visual design using CSS. No new HTML structure or functionality was added — only styling improvements to the existing markup.

#### Color Palette

A cohesive green-based color palette was implemented using CSS custom properties (`:root` variables) so that colors stay consistent and easy to update across the entire site:

* `--color-primary: #2e7d32` — main brand green, used for the header, nav, table headers, and buttons.
* `--color-primary-dark: #1b5e20` — used for hover states, nav background, and the footer.
* `--color-primary-light: #81c784` — used for input focus outlines and required-field indicators.
* `--color-primary-pale: #e8f5e9` — used as a soft background for the Add Expense card.
* `--color-accent-row: #c8e6c9` — used for the table row hover effect.
* `--color-text`, `--color-bg`, `--color-white`, `--color-border` — neutral tones for text, page background, cards, and borders.

Green was chosen because it reinforces the app's theme of financial growth, savings, and trust.

#### Typography

Custom typography was added using [Google Fonts](https://fonts.google.com/):

* **Poppins** (weights 600/700) is used for headings, the nav links, table header text, and buttons, giving the interface a strong, confident personality.
* **Inter** (weights 400/500/600) is used for body text, labels, and paragraph content, prioritizing readability.

This font pairing creates a clear visual hierarchy between prominent interface text and everyday reading content.

#### Table and Form Styling

* Table cells and form inputs use consistent padding for comfortable spacing.
* The table header (`<thead>`) is styled with the primary green background and bold heading font.
* Table rows alternate background color using `:nth-child(even)` for easier scanning.
* Table rows highlight on `:hover` to show interactivity.
* Form inputs and the dropdown share consistent padding, borders, border-radius, and font styling.
* Inputs display a green outline and background tint on `:focus`, and a colored left border on `:required` fields.
* The "Add Expense" button uses the primary color, rounded corners, a hover state, and a subtle `:active` press effect.

#### CSS Box Model

Margin, padding, border-radius, and box-shadow were used intentionally to turn the header, Add Expense form, expense table, "How to Use" section, and video section into distinct, separated visual "cards" with consistent spacing — replacing the previous edge-to-edge banner-style header with a rounded, shadowed card that matches the rest of the page.

## Technologies Used

* HTML5
* CSS3
* Google Fonts (Poppins, Inter)

## Project Structure

```text
SpendWise/
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

## Future Improvements

In future weeks, I plan to add JavaScript functionality so that users can:

* Add new expenses dynamically.
* Remove expenses.
* Calculate total expenses.
* Filter expenses by category.
* Store and manage expense data.

## Author

Created as part of the PLP Week 3 Web Development learning journey.

## License

This project is created for educational purposes.