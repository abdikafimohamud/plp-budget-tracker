# SpendWise - Personal Budget & Expense Tracker

## Project Overview

SpendWise is a Personal Budget & Expense Tracker designed to help users organize, manage, and understand their spending in one place.

The project was developed progressively through the PLP Software Development training program.

The project started in Week 1 with the basic HTML structure. In Week 2, structured expense data, an improved expense form, multimedia content, interactive elements, and semantic HTML were added.

In Week 3, the project was visually redesigned using an intentional green-based color palette, custom Google Fonts typography, refined table and form styling, and the CSS Box Model.

In Week 4, the project was rebuilt into a responsive dashboard using CSS Grid and Flexbox, with a sidebar, top header, overview cards, responsive breakpoints, and card micro-interactions.

In Week 6, JavaScript was introduced to make SpendWise interactive. The application can now collect expense information from the webpage form, store multiple expense records in arrays, process the records using loops, make decisions using conditional statements, update the webpage dynamically using DOM manipulation, and respond to user actions using event listeners.

---

# Week 6 Assignment - Make SpendWise Interactive

The main goal of the Week 6 assignment was to transform SpendWise from a mostly static webpage into an interactive budgeting application.

The application now demonstrates the following JavaScript concepts:

* Conditional statements
* Arrays
* Loops
* Functions
* DOM manipulation
* Event listeners
* User input
* Type conversion
* Arithmetic calculations
* Dynamic webpage updates

The complete flow of the application is:

```text
User enters expense
        ↓
User submits the form
        ↓
JavaScript event listener runs
        ↓
Input values are collected
        ↓
Expense is stored in an array
        ↓
Loop processes expense records
        ↓
Total expenses are calculated
        ↓
Remaining balance is calculated
        ↓
Conditional statement checks budget status
        ↓
DOM is updated
        ↓
Updated information appears on the webpage
```

---

# Features

## 1. Expense Table

SpendWise contains an expense table that displays:

* Expense Name
* Amount
* Category
* Date

The table uses semantic HTML elements:

* `<table>`
* `<thead>`
* `<tbody>`
* `<tr>`
* `<th>`
* `<td>`

Expense records are displayed dynamically using JavaScript.

When a user adds a new expense through the form, JavaScript adds the new record to the expense table without requiring the webpage to be manually edited.

---

## 2. Add Expense Form

The Add Expense section allows users to enter:

* Expense name
* Expense amount
* Expense category
* Expense date

Available categories include:

* Food
* Transport
* Rent
* Entertainment
* Other

The form is connected to JavaScript using an event listener.

When the user submits the form:

1. JavaScript receives the form submission.
2. The default browser submission is prevented.
3. The input values are collected.
4. The amount is converted from a string to a number.
5. A new expense record is added to the expenses array.
6. The expense table is updated.
7. The budget totals are recalculated.
8. The dashboard is updated.

---

# JavaScript Implementation

## 3. Application Data

JavaScript variables are used to store the application's budgeting information.

Example:

```javascript
let budget = 1000;

let expenses = [];

let totalExpenses = 0;

let remainingBalance = 0;
```

The variables allow the application to keep track of the budget and expense information while the page is running.

---

# 4. Arrays

Arrays are used to store multiple expense records.

Instead of creating separate variables for every expense, SpendWise stores the records in one array.

Example:

```javascript
let expenses = [
    {
        name: "Groceries",
        amount: 50,
        category: "Food",
        date: "2026-09-01"
    },
    {
        name: "Bus Fare",
        amount: 10,
        category: "Transport",
        date: "2026-09-02"
    }
];
```

Each expense is stored as an object inside the array.

This makes it possible for the application to manage multiple expense records efficiently.

New expenses can be added using:

```javascript
expenses.push(newExpense);
```

The `push()` method adds a new record to the end of the array.

---

# 5. Processing Data with Loops

Loops are used to process all expense records stored in the array.

For example:

```javascript
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }

    return total;
}
```

The `for` loop starts at index `0` and continues until all expenses have been processed.

For every expense, the amount is added to the total.

This allows SpendWise to calculate the total amount spent regardless of how many expenses are stored in the array.

---

# 6. Conditional Statements

Conditional statements are used to make decisions based on the user's budget.

SpendWise checks the remaining balance and provides appropriate feedback.

Example:

```javascript
if (remainingBalance > 0) {
    statusMessage = "You are within your budget.";
} else if (remainingBalance === 0) {
    statusMessage = "You have used your entire budget.";
} else {
    statusMessage = "You have exceeded your budget.";
}
```

The application therefore provides different feedback depending on the user's financial situation.

### Within Budget

If the remaining balance is greater than zero:

```text
You are within your budget.
```

### Budget Fully Used

If the remaining balance is exactly zero:

```text
You have used your entire budget.
```

### Budget Exceeded

If the remaining balance is below zero:

```text
You have exceeded your budget.
```

This demonstrates how JavaScript can make decisions using `if`, `else if`, and `else`.

---

# 7. Budget Calculations

SpendWise calculates the total expenses using a reusable function.

```javascript
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }

    return total;
}
```

The remaining balance is calculated using:

```javascript
function calculateRemainingBalance(budgetAmount, expenseAmount) {
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

# 8. Functions

Functions are used to organize the JavaScript code into reusable sections.

Important functions in SpendWise include:

### `calculateTotalExpenses()`

Calculates the total amount spent.

### `calculateRemainingBalance()`

Calculates the amount remaining after expenses.

### `calculateBudgetSummary()`

Calculates the total expenses and remaining balance.

### `renderExpenses()`

Displays expense records in the HTML table.

### `updateDashboard()`

Updates the budget summary and dashboard information.

### `getBudgetStatus()`

Uses conditional statements to determine the user's budget status.

### `handleExpenseSubmit()`

Handles the Add Expense form submission.

Using functions makes the application easier to understand, test, and maintain.

---

# 9. DOM Manipulation

The Document Object Model (DOM) allows JavaScript to interact with HTML elements.

SpendWise uses DOM manipulation to update information directly on the webpage.

For example:

```javascript
document.getElementById("total-expenses").textContent =
    `$${totalExpenses.toFixed(2)}`;
```

The `textContent` property changes the text displayed inside an HTML element.

SpendWise uses DOM manipulation to update:

* Monthly budget
* Total expenses
* Remaining balance
* Number of expenses
* Budget status
* Expense table

The application therefore displays updated information directly on the webpage instead of only displaying results in the browser console.

---

# 10. Selecting HTML Elements

SpendWise uses JavaScript methods to select HTML elements.

For example:

```javascript
document.getElementById("expense-name");
```

The `getElementById()` method selects an HTML element using its `id`.

SpendWise can also use:

```javascript
document.querySelector("form");
```

The `querySelector()` method selects an element using a CSS selector.

These methods allow JavaScript to access and update the webpage.

---

# 11. Event Listeners

Event listeners allow JavaScript to respond to user actions.

SpendWise uses `addEventListener()` to detect form submissions.

Example:

```javascript
form.addEventListener("submit", handleExpenseSubmit);
```

When the user submits the form, JavaScript runs the `handleExpenseSubmit()` function.

The application can therefore respond to user actions without requiring the page to reload.

---

# 12. Preventing Default Form Submission

The form submission uses:

```javascript
event.preventDefault();
```

This prevents the browser from refreshing the webpage when the user submits the form.

JavaScript can then process the form data and update the page dynamically.

The process is:

```text
User submits form
        ↓
submit event occurs
        ↓
preventDefault()
        ↓
JavaScript processes input
        ↓
Expense added to array
        ↓
DOM updated
```

---

# 13. User Input and Type Conversion

The amount entered into an HTML form is initially received as a string.

JavaScript converts the amount into a number before performing calculations.

Example:

```javascript
const amount = Number(amountInput.value);
```

This allows JavaScript to correctly perform arithmetic calculations.

For example:

```text
"50" → 50
```

The value can then be used in calculations:

```javascript
totalExpenses += amount;
```

---

# 14. Dynamic Expense Table

The expense table is updated dynamically using JavaScript.

When a user adds an expense, JavaScript creates a new table row.

Example:

```javascript
const row = document.createElement("tr");

row.innerHTML = `
    <td>${expense.name}</td>
    <td>$${expense.amount.toFixed(2)}</td>
    <td>${expense.category}</td>
    <td>${expense.date}</td>
`;

expenseTableBody.appendChild(row);
```

This means the user does not need to manually edit the HTML to add an expense.

---

# 15. Dynamic Dashboard

The dashboard is also updated whenever the expense data changes.

The application displays:

* Monthly Budget
* Total Expenses
* Remaining Balance
* Number of Expenses
* Budget Status

For example:

```text
Monthly Budget
$1,000.00

Total Expenses
$650.00

Remaining Balance
$350.00

Number of Expenses
3

Status
You are within your budget.
```

When another expense is added, these values are recalculated automatically.

---

# 16. Connecting Everything Together

SpendWise connects all the JavaScript concepts together.

The application follows this process:

### Step 1 - User Action

The user enters:

* Expense name
* Amount
* Category
* Date

### Step 2 - Event

The user submits the form.

An event listener detects the submission.

### Step 3 - JavaScript Runs

The JavaScript event handler collects the input values.

### Step 4 - Data Storage

The new expense is stored in the expenses array.

### Step 5 - Loop Processing

A loop processes the expense records.

### Step 6 - Calculation

JavaScript calculates:

```text
Total Expenses
Remaining Balance
```

### Step 7 - Conditional Decision

JavaScript checks whether the user is:

* Within budget
* Exactly at the budget
* Over budget

### Step 8 - DOM Update

The dashboard and expense table are updated.

### Step 9 - User Sees the Result

The updated information appears directly on the webpage.

---

# 17. Example User Interaction

Suppose the user has:

```text
Monthly Budget: $1,000
```

The user adds:

```text
Groceries - $200 - Food
Bus Fare - $100 - Transport
House Rent - $400 - Rent
```

The application stores the records in the array.

The loop processes all three records:

```text
$200 + $100 + $400 = $700
```

The remaining balance becomes:

```text
$1,000 - $700 = $300
```

The conditional statement determines:

```text
You are within your budget.
```

The dashboard is then updated automatically.

---

# 18. Testing

The application was tested using different budget and expense values.

## Test 1 - Within Budget

```text
Budget: $1,000

Expenses:
Food: $200
Transport: $100
Rent: $400

Total Expenses: $700
Remaining Balance: $300
```

Expected result:

```text
You are within your budget.
```

---

## Test 2 - Entire Budget Used

```text
Budget: $500

Expenses:
Food: $200
Transport: $100
Rent: $200

Total Expenses: $500
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

Expenses:
Food: $250
Transport: $150
Shopping: $250

Total Expenses: $650
Remaining Balance: -$150
```

Expected result:

```text
You have exceeded your budget.
```

---

## Test 4 - Add Expense Through Form

The Add Expense form was tested by entering a new expense.

Example:

```text
Name: Lunch
Amount: $15
Category: Food
Date: 2026-10-08
```

Expected result:

* The expense is added to the array.
* The expense appears in the table.
* Total expenses increase.
* Remaining balance is recalculated.
* Number of expenses increases.
* Budget status is updated.

---

# Challenges Encountered and Solutions

## Challenge 1 - Connecting the HTML Form to JavaScript

One challenge was making the Add Expense form communicate with JavaScript.

### Solution

An event listener was added to the form:

```javascript
form.addEventListener("submit", handleExpenseSubmit);
```

This allows JavaScript to process the form whenever the user submits it.

---

## Challenge 2 - Handling User Input

Form values are received as strings, while calculations require numbers.

### Solution

The amount is converted using:

```javascript
Number(amountInput.value);
```

This allows the application to perform correct calculations.

---

## Challenge 3 - Managing Multiple Expenses

Using separate variables for every expense would make the application difficult to manage.

### Solution

An array is used to store multiple expense records:

```javascript
let expenses = [];
```

New records are added using:

```javascript
expenses.push(newExpense);
```

---

## Challenge 4 - Calculating the Total

The application needs to process every expense.

### Solution

A `for` loop is used to go through the array and calculate the total.

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

---

## Challenge 5 - Updating the Webpage

Another challenge was displaying updated information directly on the webpage.

### Solution

DOM manipulation is used with methods such as:

```javascript
document.getElementById()
```

and:

```javascript
textContent
```

This allows the dashboard and expense table to update dynamically.

---

# Previous Development Weeks

## Week 1 - HTML Foundation

The initial SpendWise structure was created using HTML5.

The project included the basic webpage structure and content.

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

## Week 6 - Make SpendWise Interactive

JavaScript was introduced to make the application interactive.

The application now demonstrates:

* Variables
* Data types
* Arrays
* Objects
* User input
* Type conversion
* Functions
* Loops
* Conditional statements
* Arithmetic calculations
* Event listeners
* Form handling
* DOM manipulation
* Dynamic table updates
* Dynamic dashboard updates

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

## 1. Clone the Repository

```bash
git clone https://github.com/abdikafimohamud/plp-budget-tracker.git
```

## 2. Enter the Project Directory

```bash
cd plp-budget-tracker
```

## 3. Open the Project in VS Code

```bash
code .
```

## 4. Run the Application

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

---

## Week 3

I learned how to:

* Build a cohesive colour palette using CSS custom properties.
* Import and apply Google Fonts.
* Pair heading and body fonts.
* Use `font-weight` and `letter-spacing`.
* Build visual hierarchy.
* Style tables and forms.
* Use the CSS Box Model.
* Use `box-shadow` to create depth.
* Create a more professional webpage design.

---

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

---

## Week 6

I learned how to:

* Create and link a JavaScript file.
* Declare and use variables.
* Work with different JavaScript data types.
* Store multiple values using arrays.
* Store expense records using objects.
* Use `push()` to add records to an array.
* Use loops to process multiple records.
* Use conditional statements to make decisions.
* Collect user input from HTML forms.
* Convert input values from strings to numbers.
* Perform arithmetic calculations.
* Create reusable functions.
* Use `addEventListener()` to respond to user actions.
* Use `preventDefault()` to control form submission.
* Select HTML elements using `getElementById()` and `querySelector()`.
* Use `textContent` to update webpage content.
* Create and update HTML elements using JavaScript.
* Dynamically update the expense table.
* Dynamically update the budget dashboard.

---

# What Was Hardest

The most challenging part of Week 6 was connecting all the JavaScript concepts together.

The application needed to receive information from the HTML form, store the information in an array, process multiple records using loops, calculate the total expenses, determine the remaining balance, make decisions using conditional statements, and finally update the webpage using DOM manipulation.

Another challenge was preventing the normal form submission from refreshing the page.

This was solved by using:

```javascript
event.preventDefault();
```

Event listeners were then used to handle the user's form submission and update the application dynamically.

Breaking the application into reusable functions made the code easier to understand, debug, and maintain.

---

# Future Improvements

In future weeks, I plan to add more advanced functionality so users can:

* Remove expenses.
* Edit expenses.
* Filter expenses by category.
* Calculate category totals.
* Update category overview cards dynamically.
* Store expense data using Local Storage.
* Create charts and spending visualizations.
* Add monthly spending reports.
* Add income tracking.
* Add savings goals.
* Connect the application to a backend database.
* Add user accounts and authentication.

---

# Author

Created by **Abdikafi Mohamud** as part of the PLP Software Development learning journey.

---

# License

This project is created for educational purposes.
