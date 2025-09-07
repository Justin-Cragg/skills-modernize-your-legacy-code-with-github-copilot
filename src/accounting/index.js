const readlineSync = require('readline-sync');
const { viewBalance, creditAccount, debitAccount } = require('./account');

let continueFlag = true;

while (continueFlag) {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    const choice = parseInt(readlineSync.question('Enter your choice (1-4): '));

    switch (choice) {
        case 1:
            viewBalance();
            break;
        case 2:
            const creditAmount = parseFloat(readlineSync.question('Enter credit amount: '));
            creditAccount(creditAmount);
            break;
        case 3:
            const debitAmount = parseFloat(readlineSync.question('Enter debit amount: '));
            debitAccount(debitAmount);
            break;
        case 4:
            continueFlag = false;
            break;
        default:
            console.log('Invalid choice, please select 1-4.');
    }
}

console.log('Exiting the program. Goodbye!');
