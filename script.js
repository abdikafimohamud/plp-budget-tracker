// ============================================
// SpendWise - JavaScript Foundation
// Week 6 PLP Assignment
// ============================================

// --------------------------------------------
// 1. APPLICATION DATA AND VARIABLES
// --------------------------------------------

// Monthly budget entered by the user
let budget = 0;

// Store expenses in an array
let expenses = [];

// Total amount spent
let totalExpenses = 0;

// Remaining balance after expenses
let remainingBalance = 0;


// --------------------------------------------
// 2. CALCULATE TOTAL EXPENSES
// --------------------------------------------

function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i];
    }

    return total;
}


// --------------------------------------------
// 3. CALCULATE REMAINING BALANCE
// --------------------------------------------

function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}


// --------------------------------------------
// 4. GET USER INPUT
// --------------------------------------------

function getBudgetInformation() {
    let budgetInput = prompt(
        "Welcome to SpendWise!\n\n" +
        "Enter your monthly budget:"
    );

    // Convert the input from a string to a number
    budget = Number(budgetInput);

    // Validate the budget
    if (isNaN(budget) || budget < 0) {
        console.log("Invalid budget entered.");
        budget = 0;
    }

    console.log("Monthly Budget: $" + budget.toFixed(2));
}


// --------------------------------------------
// 5. GET EXPENSE INPUT
// --------------------------------------------

function getExpenseInformation() {
    let continueAdding = true;

    while (continueAdding) {
        let expenseInput = prompt(
            "Enter an expense amount.\n\n" +
            "Example: 50"
        );

        let expenseAmount = Number(expenseInput);

        // Validate expense
        if (!isNaN(expenseAmount) && expenseAmount >= 0) {
            expenses.push(expenseAmount);

            console.log(
                "Expense added: $" + expenseAmount.toFixed(2)
            );
        } else {
            console.log("Invalid expense amount entered.");
        }

        let addAnother = prompt(
            "Do you want to add another expense?\n\n" +
            "Type yes or no."
        );

        if (addAnother === null || addAnother.toLowerCase() !== "yes") {
            continueAdding = false;
        }
    }
}


// --------------------------------------------
// 6. CALCULATE BUDGET SUMMARY
// --------------------------------------------

function calculateBudgetSummary() {
    totalExpenses = calculateTotalExpenses(expenses);

    remainingBalance = calculateRemainingBalance(
        budget,
        totalExpenses
    );
}


// --------------------------------------------
// 7. DISPLAY RESULTS IN CONSOLE
// --------------------------------------------

function displayResults() {
    console.log("------------------------------------");
    console.log("        SPENDWISE BUDGET SUMMARY");
    console.log("------------------------------------");

    console.log(
        "Monthly Budget: $" + budget.toFixed(2)
    );

    console.log(
        "Total Expenses: $" + totalExpenses.toFixed(2)
    );

    console.log(
        "Remaining Balance: $" + remainingBalance.toFixed(2)
    );

    console.log(
        "Number of Expenses: " + expenses.length
    );

    if (remainingBalance > 0) {
        console.log("Status: You are within your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("------------------------------------");
}


// --------------------------------------------
// 8. DISPLAY RESULTS ON THE WEBPAGE
// --------------------------------------------

function displayResultsOnPage() {
    const resultSection = document.createElement("section");

    resultSection.className = "budget-results";

    resultSection.innerHTML = `
        <h2>Budget Summary</h2>

        <div class="budget-summary">
            <div>
                <span>Monthly Budget</span>
                <strong>$${budget.toFixed(2)}</strong>
            </div>

            <div>
                <span>Total Expenses</span>
                <strong>$${totalExpenses.toFixed(2)}</strong>
            </div>

            <div>
                <span>Remaining Balance</span>
                <strong>$${remainingBalance.toFixed(2)}</strong>
            </div>

            <div>
                <span>Number of Expenses</span>
                <strong>${expenses.length}</strong>
            </div>
        </div>

        <p>
            ${
                remainingBalance >= 0
                    ? "You are within your budget."
                    : "You have exceeded your budget."
            }
        </p>
    `;

    const main = document.querySelector("main");

    if (main) {
        main.prepend(resultSection);
    }
}


// --------------------------------------------
// 9. RUN THE APPLICATION
// --------------------------------------------

function startSpendWise() {
    getBudgetInformation();

    getExpenseInformation();

    calculateBudgetSummary();

    displayResults();

    displayResultsOnPage();
}


// Start SpendWise after the webpage loads
document.addEventListener("DOMContentLoaded", startSpendWise);