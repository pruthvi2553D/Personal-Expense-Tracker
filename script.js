* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f1f5f9;
    color: #1e293b;
    padding: 30px;
}

.container {
    max-width: 1100px;
    margin: auto;
}

header {
    margin-bottom: 30px;
}

header h1 {
    font-size: 30px;
    margin-bottom: 8px;
}

header p {
    color: #64748b;
}

.summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 3px 12px #00000010;
}

.card h3 {
    color: #64748b;
    font-size: 15px;
    margin-bottom: 15px;
}

.card h2 {
    font-size: 28px;
}

.income {
    color: #16a34a;
}

.expense {
    color: #dc2626;
}

.form-section, .transactions {
    background: white;
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 25px;
}

input, select {
    padding: 12px;
    margin: 10px 5px 10px 0;
    border: 1px solid #cbd5e1;
    border-radius: 7px;
}

button {
    background: #2563eb;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}

button:hover {
    background: #1d4ed8;
}

@media(max-width: 700px) {
    .summary {
        grid-template-columns: 1fr;
    }

    body {
        padding: 15px;
    }
}

