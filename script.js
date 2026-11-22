
let transactions = JSON.parse(
    localStorage.getItem("transactions")
) || [];

const form = document.getElementById("expenseForm");

function saveData() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

function updateDashboard() {
    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {
        if (transaction.type === "Income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });

    document.getElementById("totalIncome").textContent =
        "₹" + income.toFixed(2);

    document.getElementById("totalExpense").textContent =
        "₹" + expense.toFixed(2);

    document.getElementById("totalBalance").textContent =
        "₹" + (income - expense).toFixed(2);

    displayTransactions();
}

function displayTransactions() {
    const table = document.getElementById("transactionList");

    table.innerHTML = "";

    if (transactions.length === 0) {
        table.innerHTML =
            '<tr><td colspan="5">No transactions yet.</td></tr>';
        return;
    }

    transactions.forEach((transaction, index) => {
        const row = document.createElement("tr");

        const amountClass =
            transaction.type === "Income"
                ? "income-text"
                : "expense-text";

        row.innerHTML = `
            <td>${transaction.title}</td>
            <td>${transaction.category}</td>
            <td>${transaction.date}</td>
            <td class="${amountClass}">
                ${transaction.type === "Income" ? "+" : "-"}₹${transaction.amount.toFixed(2)}
            </td>
            <td>
                <button class="delete-btn"
                    onclick="deleteTransaction(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!title || !Number.isFinite(amount) || amount <= 0 || !date) {
        alert("Please enter valid transaction details.");
        return;
    }

    transactions.push({
        title,
        amount,
        type,
        category,
        date
    });

    saveData();
    updateDashboard();

    form.reset();
});

function deleteTransaction(index) {
    if (confirm("Are you sure you want to delete this transaction?")) {
        transactions.splice(index, 1);
        saveData();
        updateDashboard();
    }
}

updateDashboard();
