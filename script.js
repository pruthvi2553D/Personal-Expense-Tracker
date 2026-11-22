let transactions = [];

const form = document.getElementById("expense-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    transactions.push({
        title: title,
        amount: amount,
        type: type
    });

    updateDashboard();
    form.reset();
});

function updateDashboard() {
    let income = 0;
    let expense = 0;

    const list = document.getElementById("transaction-list");
    list.innerHTML = "";

    transactions.forEach(function(item) {
        if (item.type === "income") {
            income += item.amount;
        } else {
            expense += item.amount;
        }

        const li = document.createElement("li");
        li.textContent = item.title + " - " +
            (item.type === "income" ? "+" : "-") +
            "₹" + item.amount.toFixed(2);

        li.style.padding = "12px";
        list.appendChild(li);
    });

    document.getElementById("income").textContent =
        "₹" + income.toFixed(2);

    document.getElementById("expense").textContent =
        "₹" + expense.toFixed(2);

    document.getElementById("balance").textContent =
        "₹" + (income - expense).toFixed(2);
}
