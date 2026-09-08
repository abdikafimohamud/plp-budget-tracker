# budget-tracker - Personal Budget & Expense Tracker

## Project Overview

SpendWise is a simple Personal Budget & Expense Tracker built using HTML and CSS. The project helps users organize and view their expenses in one place.

This project was originally started in Week 1 and was expanded in Week 2 by adding structured expense data, an improved expense form, multimedia content, interactive elements, semantic HTML, and advanced CSS selectors.

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

## Technologies Used

* HTML5
* CSS3

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

## Future Improvements

In future weeks, I plan to add JavaScript functionality so that users can:

* Add new expenses dynamically.
* Remove expenses.
* Calculate total expenses.
* Filter expenses by category.
* Store and manage expense data.

## Author

Created as part of the PLP Week 2 Web Development learning journey.

## License

This project is created for educational purposes.
