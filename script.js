document.getElementById('add-btn').addEventListener('click', function () {
    const category = document.getElementById('category-input').value.trim();
    const amount = document.getElementById('amount-input').value.trim();
    const date = document.getElementById('date-input').value.trim();

    // Validate category input
    if (!category) {
        return alert("Please enter a category.");
    }

    // Validate amount input
    if (!amount || isNaN(amount)) {
        return alert("Please enter a valid amount.");
    }

    // Validate date input for dd-mm-yyyy format
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if (!date || !dateRegex.test(date)) {
        return alert("Please enter a valid date in dd-mm-yyyy format.");
    }

    // If everything is valid, add the expense
    const tableBody = document.getElementById('expense-table-body');
    const newRow = tableBody.insertRow();

    // Insert data into table
    newRow.innerHTML = `
        <td>${category}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Reset the input fields after adding the entry
    document.getElementById('category-input').value = '';
    document.getElementById('amount-input').value = '';
    document.getElementById('date-input').value = '';
    
    // Recalculate the total amount (optional)
    calculateTotal();
});

function calculateTotal() {
    const rows = document.getElementById('expense-table-body').rows;
    let total = 0;
    for (let row of rows) {
        const amount = parseFloat(row.cells[1].textContent);
        total += amount;
    }
    document.getElementById('total-amount').textContent = total.toFixed(2);
}
