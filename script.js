// ============================================
// SpendWise - Interactive JavaScript
// Week 6 PLP Assignment
// ============================================


// ============================================
// 1. APPLICATION DATA
// ============================================

// Monthly budget
let budget = 0;


// Store multiple expense records in an array
let expenses = [

    {
        name: "Groceries",
        amount: 50,
        category: "food",
        date: "2026-09-01"
    },

    {
        name: "Bus Fare",
        amount: 10,
        category: "transport",
        date: "2026-09-02"
    },

    {
        name: "House Rent",
        amount: 300,
        category: "rent",
        date: "2026-09-03"
    },

    {
        name: "Movie Ticket",
        amount: 15,
        category: "entertainment",
        date: "2026-09-04"
    },

    {
        name: "Notebook",
        amount: 8,
        category: "other",
        date: "2026-09-05"
    }

];


// ============================================
// 2. GET HTML ELEMENTS
// ============================================

const expenseForm = document.getElementById("expense-form");

const monthlyBudgetInput =
    document.getElementById("monthly-budget");

const expenseNameInput =
    document.getElementById("expense-name");

const expenseAmountInput =
    document.getElementById("expense-amount");

const expenseCategoryInput =
    document.getElementById("expense-category");

const expenseDateInput =
    document.getElementById("expense-date");

const tableBody =
    document.getElementById("expense-table-body");

const emptyExpenses =
    document.getElementById("empty-expenses");

const formMessage =
    document.getElementById("form-message");

const budgetDisplay =
    document.getElementById("budget-display");

const totalExpensesDisplay =
    document.getElementById("total-expenses");

const remainingBalanceDisplay =
    document.getElementById("remaining-balance");

const expenseCountDisplay =
    document.getElementById("expense-count");

const budgetStatus =
    document.getElementById("budget-status");


// Category displays
const rentTotal =
    document.getElementById("rent-total");

const foodTotal =
    document.getElementById("food-total");

const transportTotal =
    document.getElementById("transport-total");

const entertainmentTotal =
    document.getElementById("entertainment-total");

const otherTotal =
    document.getElementById("other-total");

const savingsTotal =
    document.getElementById("savings-total");


// ============================================
// 3. CALCULATE TOTAL EXPENSES
// ============================================

function calculateTotalExpenses(expenseList) {

    let total = 0;

    // Loop through every expense
    for (let i = 0; i < expenseList.length; i++) {

        total += expenseList[i].amount;

    }

    return total;
}


// ============================================
// 4. CALCULATE REMAINING BALANCE
// ============================================

function calculateRemainingBalance(
    budgetAmount,
    expenseAmount
) {

    return budgetAmount - expenseAmount;

}


// ============================================
// 5. CALCULATE CATEGORY TOTAL
// ============================================

function calculateCategoryTotal(
    expenseList,
    category
) {

    let total = 0;

    // Loop through all expenses
    for (let i = 0; i < expenseList.length; i++) {

        // Conditional statement
        if (expenseList[i].category === category) {

            total += expenseList[i].amount;

        }

    }

    return total;
}


// ============================================
// 6. UPDATE BUDGET STATUS
// ============================================

function updateBudgetStatus() {

    const totalExpenses =
        calculateTotalExpenses(expenses);

    const remainingBalance =
        calculateRemainingBalance(
            budget,
            totalExpenses
        );


    // Decision making using conditionals
    if (budget === 0) {

        budgetStatus.textContent =
            "Enter your monthly budget to start tracking.";

        budgetStatus.className =
            "budget-status";

    }

    else if (remainingBalance > 0) {

        budgetStatus.textContent =
            "Good job! You are within your budget.";

        budgetStatus.className =
            "budget-status status-good";

    }

    else if (remainingBalance === 0) {

        budgetStatus.textContent =
            "You have used your entire budget.";

        budgetStatus.className =
            "budget-status status-warning";

    }

    else {

        budgetStatus.textContent =
            "Warning: You have exceeded your budget.";

        budgetStatus.className =
            "budget-status status-danger";

    }

}


// ============================================
// 7. UPDATE DASHBOARD
// ============================================

function updateDashboard() {

    const totalExpenses =
        calculateTotalExpenses(expenses);

    const remainingBalance =
        calculateRemainingBalance(
            budget,
            totalExpenses
        );


    // Update main summary
    budgetDisplay.textContent =
        "$" + budget.toFixed(2);

    totalExpensesDisplay.textContent =
        "$" + totalExpenses.toFixed(2);

    remainingBalanceDisplay.textContent =
        "$" + remainingBalance.toFixed(2);

    expenseCountDisplay.textContent =
        expenses.length;


    // Update category cards
    rentTotal.textContent =
        "$" + calculateCategoryTotal(
            expenses,
            "rent"
        ).toFixed(2);

    foodTotal.textContent =
        "$" + calculateCategoryTotal(
            expenses,
            "food"
        ).toFixed(2);

    transportTotal.textContent =
        "$" + calculateCategoryTotal(
            expenses,
            "transport"
        ).toFixed(2);

    entertainmentTotal.textContent =
        "$" + calculateCategoryTotal(
            expenses,
            "entertainment"
        ).toFixed(2);

    otherTotal.textContent =
        "$" + calculateCategoryTotal(
            expenses,
            "other"
        ).toFixed(2);


    // Savings represents money remaining
    const savingsAmount =
        remainingBalance > 0
            ? remainingBalance
            : 0;

    savingsTotal.textContent =
        "$" + savingsAmount.toFixed(2);


    // Update budget status
    updateBudgetStatus();

}


// ============================================
// 8. DISPLAY EXPENSES
// ============================================

function displayExpenses() {

    // Clear the table before rebuilding it
    tableBody.innerHTML = "";


    // Check if there are no expenses
    if (expenses.length === 0) {

        emptyExpenses.style.display = "block";

        return;

    }


    emptyExpenses.style.display = "none";


    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${expense.name}</td>

            <td>
                $${expense.amount.toFixed(2)}
            </td>

            <td>
                ${formatCategory(expense.category)}
            </td>

            <td>
                ${expense.date}
            </td>

            <td>
                <button
                    type="button"
                    class="delete-button"
                    data-index="${i}"
                >
                    Delete
                </button>
            </td>

        `;


        tableBody.appendChild(row);

    }

}


// ============================================
// 9. FORMAT CATEGORY NAME
// ============================================

function formatCategory(category) {

    if (category === "food") {

        return "Food";

    }

    else if (category === "transport") {

        return "Transport";

    }

    else if (category === "rent") {

        return "Rent";

    }

    else if (category === "entertainment") {

        return "Entertainment";

    }

    else {

        return "Other";

    }

}


// ============================================
// 10. SHOW FORM MESSAGE
// ============================================

function showFormMessage(message, type) {

    formMessage.textContent = message;

    formMessage.className =
        "form-message " + type;

}


// ============================================
// 11. HANDLE FORM SUBMISSION
// ============================================

expenseForm.addEventListener(
    "submit",
    function (event) {

        // Prevent the page from refreshing
        event.preventDefault();


        // Get user input
        const newBudget =
            Number(monthlyBudgetInput.value);

        const name =
            expenseNameInput.value.trim();

        const amount =
            Number(expenseAmountInput.value);

        const category =
            expenseCategoryInput.value;

        const date =
            expenseDateInput.value;


        // ====================================
        // VALIDATION USING CONDITIONALS
        // ====================================

        if (isNaN(newBudget) || newBudget < 0) {

            showFormMessage(
                "Please enter a valid monthly budget.",
                "message-error"
            );

            return;

        }


        if (name === "") {

            showFormMessage(
                "Please enter an expense name.",
                "message-error"
            );

            return;

        }


        if (isNaN(amount) || amount <= 0) {

            showFormMessage(
                "Please enter a valid expense amount.",
                "message-error"
            );

            return;

        }


        if (category === "") {

            showFormMessage(
                "Please select an expense category.",
                "message-error"
            );

            return;

        }


        if (date === "") {

            showFormMessage(
                "Please select an expense date.",
                "message-error"
            );

            return;

        }


        // ====================================
        // STORE BUDGET
        // ====================================

        budget = newBudget;


        // ====================================
        // CREATE NEW EXPENSE OBJECT
        // ====================================

        const newExpense = {

            name: name,

            amount: amount,

            category: category,

            date: date

        };


        // Add expense to array
        expenses.push(newExpense);


        // ====================================
        // UPDATE PAGE
        // ====================================

        displayExpenses();

        updateDashboard();


        // ====================================
        // SHOW SUCCESS MESSAGE
        // ====================================

        showFormMessage(
            "Expense added successfully!",
            "message-success"
        );


        // Clear expense fields
        expenseNameInput.value = "";

        expenseAmountInput.value = "";

        expenseCategoryInput.value = "";

        expenseDateInput.value = "";

    }
);


// ============================================
// 12. DELETE EXPENSE
// ============================================

tableBody.addEventListener(
    "click",
    function (event) {

        // Check if Delete button was clicked
        if (
            event.target.classList.contains(
                "delete-button"
            )
        ) {

            const index =
                Number(
                    event.target.dataset.index
                );


            // Remove expense from array
            expenses.splice(index, 1);


            // Update page
            displayExpenses();

            updateDashboard();


            showFormMessage(
                "Expense removed successfully.",
                "message-success"
            );

        }

    }
);


// ============================================
// 13. INITIALIZE APPLICATION
// ============================================

function startSpendWise() {

    // Display existing expenses
    displayExpenses();

    // Calculate and display dashboard
    updateDashboard();

}


// ============================================
// 14. START WHEN PAGE LOADS
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    startSpendWise
);