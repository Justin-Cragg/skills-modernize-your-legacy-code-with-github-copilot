let balance = 1000.00;

function viewBalance() {
    console.log(`Current balance: ${balance.toFixed(2).padStart(9, '0')}`);
}

function creditAccount(amount) {
    if (isNaN(amount)) {
        console.log('Invalid amount.');
        return;
    }
    balance += amount;
    console.log(`Amount credited. New balance: ${balance.toFixed(2).padStart(9, '0')}`);
}

function debitAccount(amount) {
    if (isNaN(amount)) {
        console.log('Invalid amount.');
        return;
    }
    if (balance >= amount) {
        balance -= amount;
        console.log(`Amount debited. New balance: ${balance.toFixed(2).padStart(9, '0')}`);
    } else {
        console.log('Insufficient funds for this debit.');
    }
}

function getBalance() {
    return balance;
}

function resetBalance() {
    balance = 1000.00;
}

module.exports = {
    viewBalance,
    creditAccount,
    debitAccount,
    getBalance,
    resetBalance
};
