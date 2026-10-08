# SpendWise - Personal Budget & Expense Tracker

## Project Overview

SpendWise is a Personal Budget & Expense Tracker designed to help users organize, manage, and understand their spending in one place.

The project was developed progressively through the PLP Software Development training program.

The project started in Week 1 with the basic HTML structure. In Week 2, structured expense data, an improved expense form, multimedia content, interactive elements, and semantic HTML were added.

In Week 3, the project was visually redesigned using an intentional green-based color palette, custom Google Fonts typography, refined table and form styling, and the CSS Box Model.

In Week 4, the project was rebuilt into a responsive dashboard using CSS Grid and Flexbox, with a sidebar, top header, overview cards, responsive breakpoints, and card micro-interactions.

In Week 6, JavaScript was introduced to transform SpendWise from a primarily visual application into an application that can collect user input, store data, perform calculations, and display budget results.

---

# Features

## 1. Expense Table

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

The table also includes sample expense records.

---

## 2. Add Expense Form

The Add Expense section contains a form where users can enter:

* Expense name
* Expense amount
* Expense category
* Expense date

The category field includes:

* Food
* Transport
* Rent
* Entertainment
* Other

The form also includes an "Add Expense" button.

The project now also uses JavaScript to collect budgeting information using browser prompts and process expense amounts.

---

## 3. Multimedia Content

A logo image is used in the sidebar brand area.

A YouTube budgeting video has also been embedded using an `<iframe>`.

---

## 4. Interactive Elements

A collapsible "How to use this tracker" section was created using:

* `<details>`
* `<summary>`

The expense table also includes hover effects.

The Add Expense button uses `cursor: pointer` to indicate that it can be clicked.

JavaScript prompts are used to collect budget and expense information from the user.

---

# JavaScript Foundation - Week 6

## 5. JavaScript Setup

A separate JavaScript file called `script.js` was created for the Week 6 assignment.

The JavaScript file is linked to `index.html` using:

```html
<script src="script.js"></script>
```

This allows JavaScript code to run when the SpendWise webpage loads.

---

## 6. JavaScript Concepts Implemented

The following JavaScript concepts are implemented in SpendWise:

* Variables
* Data types
* Arrays
* User input
* Type conversion
* Functions
* Loops
* Conditional statements
* Arithmetic calculations
* Browser console output
* DOM manipulation

---

## 7. Variables

Variables are used to store important budgeting information.

For example:

```javascript
let budget = 0;
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;
```

### Budget

The `budget` variable stores the monthly budget entered by the user.

### Expenses

The `expenses` variable is an array used to store multiple expense amounts.

### Total Expenses

The `totalExpenses` variable stores the calculated total amount spent.

### Remaining Balance

The `remainingBalance` variable stores the amount left after subtracting expenses from the budget.

---

## 8. Data Types

Different JavaScript data types are used in the application.

### Number

Numbers are used for budget and expense amounts:

```javascript
let budget = 0;
let totalExpenses = 0;
```

### String

Strings are used for messages and user input:

```javascript
let addAnother = "yes";
```

### Array

An array stores multiple expense amounts:

```javascript
let expenses = [];
```

---

## 9. Collecting User Input

SpendWise collects user input using the JavaScript `prompt()` function.

The application asks the user for their monthly budget:

```javascript
let budgetInput = prompt(
    "Welcome to SpendWise!\n\n" +
    "Enter your monthly budget:"
);
```

The application also asks the user to enter expense amounts:

```javascript
let expenseInput = prompt(
    "Enter an expense amount."
);
```

Because values returned by `prompt()` are strings, the input is converted to a number using:

```javascript
Number(expenseInput);
```

This allows the application to perform mathematical calculations.

---

## 10. Budget Calculations

SpendWise calculates the total expenses using a reusable function:

```javascript
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i];
    }

    return total;
}
```

The function loops through the expense array and adds all expense amounts together.

---

## 11. Remaining Balance

The remaining balance is calculated using a separate reusable function:

```javascript
function calculateRemainingBalance(
    budgetAmount,
    expenseAmount
) {
    return budgetAmount - expenseAmount;
}
```

The calculation is:

```text
Remaining Balance = Budget - Total Expenses
```

For example:

```text
Budget = $1,000
Total Expenses = $650

Remaining Balance = $1,000 - $650

Remaining Balance = $350
```

---

## 12. Reusable Functions

Functions help organize the JavaScript code into smaller reusable sections.

The main functions used in SpendWise are:

### `calculateTotalExpenses()`

Calculates the total amount spent.

### `calculateRemainingBalance()`

Calculates the amount remaining after expenses.

### `getBudgetInformation()`

Collects the monthly budget from the user.

### `getExpenseInformation()`

Collects expense amounts from the user.

### `calculateBudgetSummary()`

Calculates the total expenses and remaining balance.

### `displayResults()`

Displays the calculated results in the browser console.

### `displayResultsOnPage()`

Displays the budget summary on the webpage.

### `startSpendWise()`

Starts the SpendWise JavaScript application.

---

## 13. Loops

A `for` loop is used to process all expenses stored in the expenses array.

Example:

```javascript
for (let i = 0; i < expenseList.length; i++) {
    total += expenseList[i];
}
```

The loop goes through each expense and adds it to the total.

---

## 14. Conditional Statements

Conditional statements are used to determine the user's budget status.

For example:

```javascript
if (remainingBalance > 0) {
    console.log("Status: You are within your budget.");
} else if (remainingBalance === 0) {
    console.log("Status: You have used your entire budget.");
} else {
    console.log("Status: You have exceeded your budget.");
}
```

This allows SpendWise to give the user useful feedback based on their spending.

---

## 15. Displaying Results in the Browser Console

The assignment requires calculated results to be displayed in the browser console.

SpendWise displays clearly labelled information such as:

```text
------------------------------------
        SPENDWISE BUDGET SUMMARY
------------------------------------
Monthly Budget: $1000.00
Total Expenses: $650.00
Remaining Balance: $350.00
Number of Expenses: 3
Status: You are within your budget.
------------------------------------
```

The browser console can be opened using the browser developer tools.

---

## 16. Displaying Results on the Webpage

In addition to the browser console, SpendWise dynamically creates a budget summary section on the webpage.

The summary displays:

* Monthly Budget
* Total Expenses
* Remaining Balance
* Number of Expenses
* Budget status

JavaScript DOM manipulation is used to create and display this information.

---

# How SpendWise Works

When the webpage loads:

1. JavaScript starts running.
2. The user is asked to enter their monthly budget.
3. The user enters expense amounts.
4. Expense amounts are stored in an array.
5. The application calculates the total expenses.
6. The application calculates the remaining balance.
7. The results are displayed in the browser console.
8. The results are also displayed on the webpage.

---

# Example Calculation

If the user enters:

```text
Monthly Budget: $1000

Expenses:
Food: $200
Transport: $100
Rent: $400
```

The application calculates:

```text
Total Expenses = $700

Remaining Balance = $1000 - $700

Remaining Balance = $300
```

The console displays:

```text
Monthly Budget: $1000.00
Total Expenses: $700.00
Remaining Balance: $300.00
Number of Expenses: 3
Status: You are within your budget.
```

---

# Testing

The application was tested using different budget and expense values.

## Test 1 - Within Budget

```text
Budget: $1000
Expenses: $300

Remaining Balance: $700
```

Expected result:

```text
You are within your budget.
```

---

## Test 2 - Entire Budget Used

```text
Budget: $500
Expenses: $500

Remaining Balance: $0
```

Expected result:

```text
You have used your entire budget.
```

---

## Test 3 - Budget Exceeded

```text
Budget: $500
Expenses: $650

Remaining Balance: -$150
```

Expected result:

```text
You have exceeded your budget.
```

---

# Previous Development Weeks

## Week 1 - HTML Foundation

The initial SpendWise structure was created using HTML5.

---

## Week 2 - HTML Structure and Content

The project was improved by adding:

* Structured expense tables
* HTML forms
* Select and option elements
* Images
* YouTube video
* Interactive elements
* Semantic HTML
* Advanced CSS selectors

---

## Week 3 - CSS Styling

The visual design was improved using:

* CSS custom properties
* Green colour palette
* Google Fonts
* Poppins and Inter typography
* Table styling
* Form styling
* CSS Box Model
* Padding and margins
* Borders
* Border radius
* Box shadows
* Responsive design

---

## Week 4 - Dashboard Layout

The page was transformed into a dashboard using:

* CSS Grid
* Flexbox
* Sidebar navigation
* Header
* Overview cards
* Responsive layout
* Micro-interactions
* Keyboard focus styles
* Dark theme support

---

## Week 6 - JavaScript Foundation

JavaScript was introduced to make SpendWise capable of processing budgeting data.

The application now demonstrates:

* Variables
* Data types
* Arrays
* User input
* Type conversion
* Functions
* Loops
* Conditional statements
* Arithmetic calculations
* Console output
* DOM manipulation

---

# Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* Google Fonts
* Git
* GitHub
* VS Code
* Ubuntu/Linux

---

# Project Structure

```text
plp-budget-tracker/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
```

---

# How to Run the Project

Clone the repository:

```bash
git clone https://github.com/abdikafimohamud/plp-budget-tracker.git
```

Enter the project:

```bash
cd plp-budget-tracker
```

Open the project in VS Code:

```bash
code .
```

Open `index.html` in a web browser.

The project can also be run using the VS Code Live Server extension.

---

# GitHub Repository

GitHub repository:

https://github.com/abdikafimohamud/plp-budget-tracker

---

# What I Learned

## Week 2

I learned how to:

* Create structured HTML tables.
* Build and improve HTML forms.
* Use `<select>` and `<option>` elements.
* Embed images and YouTube videos.
* Create collapsible content using `<details>` and `<summary>`.
* Use semantic HTML elements.
* Apply advanced CSS selectors.
* Use pseudo-classes such as `:hover`, `:focus`, and `:nth-child()`.
* Improve the visual design and usability of a webpage.
* Organize a project using HTML, CSS, and a README file.

## Week 3

I learned how to:

* Build a cohesive color palette using CSS custom properties.
* Import and apply Google Fonts.
* Pair heading and body fonts.
* Use `font-weight` and `letter-spacing`.
* Build visual hierarchy.
* Style tables and forms.
* Use the CSS Box Model.
* Use `box-shadow` to create depth.
* Create a more professional webpage design.

## Week 4

I learned how to:

* Structure a full-page layout using CSS Grid.
* Use `grid-template-areas`.
* Use Flexbox for smaller internal arrangements.
* Build a responsive dashboard.
* Create a mobile-friendly sidebar.
* Add hover and keyboard-focus interactions.
* Implement a dark theme using CSS variables.
* Merge a new layout into an existing project without breaking previous content.

## Week 6

I learned how to:

* Create and link a JavaScript file.
* Declare and use variables.
* Work with different JavaScript data types.
* Store multiple values using arrays.
* Collect user input using `prompt()`.
* Convert user input from strings to numbers.
* Perform arithmetic calculations.
* Create reusable functions.
* Use loops to process data.
* Use conditional statements.
* Display calculated information in the browser console.
* Use JavaScript to dynamically display information on a webpage.

---

# What Was Hardest

The most challenging part of Week 6 was connecting user input with the budget calculations.

The application needed to collect values using `prompt()`, convert those values into numbers, store expense amounts in an array, calculate the total expenses, and then calculate the remaining balance.

Organizing these tasks into reusable functions made the JavaScript easier to understand and maintain.

---

# Future Improvements

In future weeks, I plan to add more advanced JavaScript functionality so that users can:

* Add expenses directly through the webpage form.
* Remove expenses.
* Edit expenses.
* Calculate category totals.
* Filter expenses by category.
* Update overview cards dynamically.
* Store expense data using local storage.
* Create charts and spending visualizations.
* Add monthly spending reports.
* Connect the application to a backend database.

---

# Author

Created by **Abdikafi Mohamud** as part of the PLP Software Development learning journey.

---

# License

This project is created for educational purposes.
