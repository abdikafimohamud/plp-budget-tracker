# SpendWise - Personal Budget & Expense Tracker

## Project Description

SpendWise is a responsive Personal Budget & Expense Tracker that helps users organize, manage, and understand their spending in one place. Users enter a monthly budget, add expenses with a name, amount, category and date, and see their totals, remaining balance and number of expenses update instantly.

The project was developed progressively through the PLP Software Development training program, from a basic HTML page to an interactive JavaScript application, and was then published to the internet using GitHub and Netlify as part of the Web Hosting and Deployment module.

---

## Live Website

**Live Netlify URL:** https://abdikafi-spendwise.netlify.app

---

## GitHub Repository Information

* **Repository:** https://github.com/abdikafimohamud/plp-budget-tracker
* **Visibility:** Public
* **Branch:** `main`

### Project Structure

```text
plp-budget-tracker/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
```

---

## Technologies Used

* HTML5
* CSS3 (CSS Grid, Flexbox, custom properties)
* JavaScript (ES6)
* Google Fonts (Inter and Poppins)
* Git and GitHub (version control and source of truth)
* Netlify (cloud hosting with continuous deployment)
* VS Code
* Ubuntu/Linux (WSL)

---

## Deployment Process Summary

1. **Deployment readiness check** - Confirmed that `index.html` is in the project root, that `style.css` and `script.js` are linked with relative paths, and that all file names match exactly (lowercase) to avoid case-sensitivity problems on Linux servers.
2. **GitHub repository** - Created a public repository and pushed the SpendWise project using Git (`git add`, `git commit`, `git push`).
3. **Netlify deployment** - Signed in to Netlify with GitHub, imported the repository, used the `main` branch, and left the build command and publish directory blank because SpendWise is a static website.
4. **Custom site name** - Changed the auto-generated Netlify subdomain (`splendorous-kitten-70095e`) to `abdikafi-spendwise`.
5. **Continuous deployment test** - Updated the footer text in `index.html` to "Deployed with GitHub & Netlify", committed and pushed the change, watched the new deploy run in the Netlify **Deploys** tab, and confirmed the change appeared on the live site automatically.
6. **Final testing** - Opened the live site and verified that the styles, JavaScript, expense form, budget calculations, navigation links and embedded YouTube video all load and work correctly.

---

## Challenges Encountered During Deployment

* **Random site name:** Netlify generated a hard-to-remember URL, so I had to find the site-name setting and rename it to something meaningful.
* **File paths and naming rules:** I had to double-check that every file path was relative and that file names matched exactly, because hosting servers are case-sensitive.
* **Verifying automatic deployment:** I had to confirm that pushing to GitHub really triggered a new Netlify build by watching the Deploys page and checking the live site afterwards.
* **Git setup issues:** My commits showed a placeholder author name because Git was not configured, and the repository had been renamed on GitHub, so I had to configure my Git identity and update the remote URL.
* **README formatting:** Copying README text from a chat window removed the Markdown headings and bullets, so I had to copy the raw file instead and check the preview before pushing.

---

## Lessons Learned from Deployment

* Deployment is a workflow, not a single step: build locally, push to GitHub, and let Netlify publish.
* GitHub acts as the master copy of the project, and Netlify keeps the live site in sync with it.
* Relative paths and consistent, case-correct file names prevent most "works on my computer" problems.
* Continuous deployment makes updates fast, but mistakes are published just as quickly, so changes should be tested locally first.
* Deploy logs and live-site testing are the best tools for finding problems after publishing.
* A README should be previewed before it is pushed, so the formatting is correct on GitHub.

---

## How to Run the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/abdikafimohamud/plp-budget-tracker.git
```

2. Enter the project directory:

```bash
cd plp-budget-tracker
```

3. Open the project in VS Code:

```bash
code .
```

4. Open `index.html` in a web browser, or use the VS Code Live Server extension.

---

## Development History

### Project Overview

The project started in Week 1 with the basic HTML structure. In Week 2, structured expense data, an improved expense form, multimedia content, interactive elements, and semantic HTML were added.

In Week 3, the project was visually redesigned using an intentional green-based color palette, custom Google Fonts typography, refined table and form styling, and the CSS Box Model.

In Week 4, the project was rebuilt into a responsive dashboard using CSS Grid and Flexbox, with a sidebar, top header, overview cards, responsive breakpoints, and card micro-interactions.

In Week 6, JavaScript was introduced to make SpendWise interactive. The application can collect expense information from the webpage form, store multiple expense records in arrays, process the records using loops, make decisions using conditional statements, update the webpage dynamically using DOM manipulation, and respond to user actions using event listeners.

---

## Week 6 Assignment - Make SpendWise Interactive

The main goal of the Week 6 assignment was to transform SpendWise from a mostly static webpage into an interactive budgeting application.

The application demonstrates the following JavaScript concepts:

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

## Features

### 1. Expense Table

SpendWise contains an expense table that displays:

* Expense Name
* Amount
* Category
* Date

The table uses semantic HTML elements: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`.

Expense records are displayed dynamically using JavaScript. When a user adds a new expense through the form, JavaScript adds the new record to the expense table without requiring the webpage to be manually edited.

### 2. Add Expense Form

The Add Expense section allows users to enter:

* Expense name
* Expense amount
* Expense category
* Expense date

Available categories include Food, Transport, Rent, Entertainment, and Other.

The form is connected to JavaScript using an event listener. When the user submits the form:

1. JavaScript receives the form submission.
2. The default browser submission is prevented.
3. The input values are collected.
4. The amount is converted from a string to a number.
5. A new expense record is added to the expenses array.
6. The expense table is updated.
7. The budget totals are recalculated.
8. The dashboard is updated.

---

## JavaScript Implementation

### 3. Application Data

JavaScript variables are used to store the application's budgeting information.

```javascript
let budget = 1000;

let expenses = [];

let totalExpenses = 0;

let remainingBalance = 0;
```

The variables allow the application to keep track of the budget and expense information while the page is running.

### 4. Arrays

Arrays are used to store multiple expense records. Instead of creating separate variables for every expense, SpendWise stores the records in one array.

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

Each expense is stored as an object inside the array. New expenses can be added using:

```javascript
expenses.push(newExpense);
```

The `push()` method adds a new record to the end of the array.

### 5. Processing Data with Loops

Loops are used to process all expense records stored in the array.

```javascript
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }

    return total;
}
```

The `for` loop starts at index `0` and continues until all expenses have been processed. For every expense, the amount is added to the total. This allows SpendWise to calculate the total amount spent regardless of how many expenses are stored in the array.

### 6. Conditional Statements

Conditional statements are used to make decisions based on the user's budget. SpendWise checks the remaining balance and provides appropriate feedback.

```javascript
if (remainingBalance > 0) {
    statusMessage = "You are within your budget.";
} else if (remainingBalance === 0) {
    statusMessage = "You have used your entire budget.";
} else {
    statusMessage = "You have exceeded your budget.";
}
```

* **Within budget:** the remaining balance is greater than zero, and the message is "You are within your budget."
* **Budget fully used:** the remaining balance is exactly zero, and the message is "You have used your entire budget."
* **Budget exceeded:** the remaining balance is below zero, and the message is "You have exceeded your budget."

### 7. Budget Calculations

SpendWise calculates the total expenses using a reusable function (shown above) and the remaining balance using:

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
Remaining Balance = $1,000 - $650 = $350
```

### 8. Functions

Functions organize the JavaScript code into reusable sections. Important functions in SpendWise include:

* `calculateTotalExpenses()` - calculates the total amount spent.
* `calculateRemainingBalance()` - calculates the amount remaining after expenses.
* `calculateBudgetSummary()` - calculates the total expenses and remaining balance.
* `renderExpenses()` - displays expense records in the HTML table.
* `updateDashboard()` - updates the budget summary and dashboard information.
* `getBudgetStatus()` - uses conditional statements to determine the user's budget status.
* `handleExpenseSubmit()` - handles the Add Expense form submission.

Using functions makes the application easier to understand, test, and maintain.

### 9. DOM Manipulation

The Document Object Model (DOM) allows JavaScript to interact with HTML elements. SpendWise uses DOM manipulation to update information directly on the webpage.

```javascript
document.getElementById("total-expenses").textContent =
    `$${totalExpenses.toFixed(2)}`;
```

The `textContent` property changes the text displayed inside an HTML element. SpendWise uses DOM manipulation to update the monthly budget, total expenses, remaining balance, number of expenses, budget status, and the expense table.

### 10. Selecting HTML Elements

```javascript
document.getElementById("expense-name");
document.querySelector("form");
```

`getElementById()` selects an element using its `id`, and `querySelector()` selects an element using a CSS selector. These methods allow JavaScript to access and update the webpage.

### 11. Event Listeners

Event listeners allow JavaScript to respond to user actions. SpendWise uses `addEventListener()` to detect form submissions.

```javascript
form.addEventListener("submit", handleExpenseSubmit);
```

When the user submits the form, JavaScript runs the `handleExpenseSubmit()` function, so the application responds without reloading the page.

### 12. Preventing Default Form Submission

```javascript
event.preventDefault();
```

This prevents the browser from refreshing the webpage when the user submits the form, so JavaScript can process the form data and update the page dynamically.

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

### 13. User Input and Type Conversion

The amount entered into an HTML form is received as a string. JavaScript converts it into a number before performing calculations.

```javascript
const amount = Number(amountInput.value);
```

For example, `"50"` becomes `50`, which can then be used in calculations such as `totalExpenses += amount;`.

### 14. Dynamic Expense Table

When a user adds an expense, JavaScript creates a new table row.

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

The user does not need to manually edit the HTML to add an expense.

### 15. Dynamic Dashboard

The dashboard is updated whenever the expense data changes. It displays the monthly budget, total expenses, remaining balance, number of expenses, and budget status.

```text
Monthly Budget:      $1,000.00
Total Expenses:      $650.00
Remaining Balance:   $350.00
Number of Expenses:  3
Status:              You are within your budget.
```

When another expense is added, these values are recalculated automatically.

### 16. Connecting Everything Together

1. **User action:** the user enters the expense name, amount, category, and date.
2. **Event:** the user submits the form and an event listener detects it.
3. **JavaScript runs:** the event handler collects the input values.
4. **Data storage:** the new expense is stored in the expenses array.
5. **Loop processing:** a loop processes the expense records.
6. **Calculation:** JavaScript calculates total expenses and remaining balance.
7. **Conditional decision:** JavaScript checks whether the user is within budget, exactly at budget, or over budget.
8. **DOM update:** the dashboard and expense table are updated.
9. **Result:** the updated information appears directly on the webpage.

### 17. Example User Interaction

Suppose the user has a monthly budget of $1,000 and adds Groceries ($200, Food), Bus Fare ($100, Transport), and House Rent ($400, Rent). The loop processes all three records:

```text
$200 + $100 + $400 = $700
```

The remaining balance becomes `$1,000 - $700 = $300`, the conditional statement determines "You are within your budget.", and the dashboard is updated automatically.

---

## Testing

The application was tested using different budget and expense values.

**Test 1 - Within budget**

```text
Budget: $1,000
Expenses: Food $200, Transport $100, Rent $400
Total Expenses: $700 | Remaining Balance: $300
Expected result: You are within your budget.
```

**Test 2 - Entire budget used**

```text
Budget: $500
Expenses: Food $200, Transport $100, Rent $200
Total Expenses: $500 | Remaining Balance: $0
Expected result: You have used your entire budget.
```

**Test 3 - Budget exceeded**

```text
Budget: $500
Expenses: Food $250, Transport $150, Shopping $250
Total Expenses: $650 | Remaining Balance: -$150
Expected result: You have exceeded your budget.
```

**Test 4 - Add expense through the form**

```text
Name: Lunch | Amount: $15 | Category: Food | Date: 2026-10-08
```

Expected result: the expense is added to the array and appears in the table, total expenses increase, the remaining balance is recalculated, the number of expenses increases, and the budget status is updated.

---

## Challenges Encountered During Development and Solutions

**Challenge 1 - Connecting the HTML form to JavaScript.** Solved by adding an event listener: `form.addEventListener("submit", handleExpenseSubmit);`

**Challenge 2 - Handling user input.** Form values are strings while calculations need numbers. Solved by converting with `Number(amountInput.value);`

**Challenge 3 - Managing multiple expenses.** Separate variables for each expense would be unmanageable. Solved with an array (`let expenses = [];`) and `expenses.push(newExpense);`

**Challenge 4 - Calculating the total.** Solved with a `for` loop that goes through the array and adds up each amount.

**Challenge 5 - Updating the webpage.** Solved with DOM manipulation using `document.getElementById()` and `textContent`, so the dashboard and expense table update dynamically.

---

## Previous Development Weeks

### Week 1 - HTML Foundation

The initial SpendWise structure was created using HTML5, including the basic webpage structure and content.

### Week 2 - HTML Structure and Content

* Structured expense tables
* HTML forms
* Select and option elements
* Images
* YouTube video
* Interactive elements
* Semantic HTML
* Advanced CSS selectors

### Week 3 - CSS Styling

* CSS custom properties
* Green colour palette
* Google Fonts (Poppins and Inter)
* Table and form styling
* CSS Box Model
* Padding, margins, borders, border radius, and box shadows
* Responsive design

### Week 4 - Dashboard Layout

* CSS Grid and Flexbox
* Sidebar navigation and header
* Overview cards
* Responsive layout
* Micro-interactions
* Keyboard focus styles
* Dark theme support

### Week 6 - Make SpendWise Interactive

* Variables, data types, arrays, and objects
* User input and type conversion
* Functions, loops, and conditional statements
* Arithmetic calculations
* Event listeners and form handling
* DOM manipulation
* Dynamic table and dashboard updates

---

## What I Learned

### Week 2

* Create structured HTML tables.
* Build and improve HTML forms.
* Use `<select>` and `<option>` elements.
* Embed images and YouTube videos.
* Create collapsible content using `<details>` and `<summary>`.
* Use semantic HTML elements.
* Apply advanced CSS selectors and pseudo-classes such as `:hover`, `:focus`, and `:nth-child()`.

### Week 3

* Build a cohesive colour palette using CSS custom properties.
* Import and apply Google Fonts, and pair heading and body fonts.
* Use `font-weight` and `letter-spacing` to build visual hierarchy.
* Style tables and forms.
* Use the CSS Box Model and `box-shadow` to create depth.

### Week 4

* Structure a full-page layout using CSS Grid and `grid-template-areas`.
* Use Flexbox for smaller internal arrangements.
* Build a responsive dashboard with a mobile-friendly sidebar.
* Add hover and keyboard-focus interactions.
* Implement a dark theme using CSS variables.
* Merge a new layout into an existing project without breaking previous content.

### Week 6

* Create and link a JavaScript file.
* Declare variables and work with different data types.
* Store records using arrays and objects, and add to them with `push()`.
* Use loops and conditional statements.
* Collect user input from HTML forms and convert strings to numbers.
* Create reusable functions.
* Use `addEventListener()` and `preventDefault()`.
* Select elements with `getElementById()` and `querySelector()`.
* Use `textContent` and create HTML elements with JavaScript.
* Dynamically update the expense table and budget dashboard.

---

## What Was Hardest

The most challenging part of Week 6 was connecting all the JavaScript concepts together. The application needed to receive information from the HTML form, store it in an array, process multiple records using loops, calculate the total expenses and remaining balance, make decisions using conditional statements, and finally update the webpage using DOM manipulation.

Another challenge was preventing the normal form submission from refreshing the page. This was solved with `event.preventDefault();`. Breaking the application into reusable functions made the code easier to understand, debug, and maintain.

---

## Future Improvements

* Edit expenses.
* Filter expenses by category.
* Calculate category totals and update category cards dynamically.
* Store expense data using Local Storage.
* Create charts and spending visualizations.
* Add monthly spending reports, income tracking, and savings goals.
* Connect the application to a backend database.
* Add user accounts and authentication.
* Add a custom domain name.

---

## Author

Created by **Abdikafi Mohamud** as part of the PLP Software Development learning journey.

---

## License

This project is created for educational purposes.