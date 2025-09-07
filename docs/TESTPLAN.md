# COBOL Student Account Management System Test Plan

This test plan covers the business logic and functionality of the COBOL-based student account management system. It is designed to validate the system's behavior against business requirements and will serve as a foundation for creating unit and integration tests in the Node.js transformation.

## Test Cases

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|------------------------|----------------|------------|-----------------|---------------|--------|----------|
| TC001 | View Initial Account Balance | Application is compiled and executable exists | 1. Start the application 2. Select option 1 (View Balance) | Display shows "Current balance: 001000.00" |  |  | Initial balance is $1000.00 |
| TC002 | Credit Account with Valid Amount | Application is running, initial balance is $1000.00 | 1. Select option 2 (Credit Account) 2. Enter amount "500.00" 3. Select option 1 to view balance | Balance displays as "001500.00" |  |  | Credits should add to balance |
| TC003 | Debit Account with Valid Amount | Application is running, balance is $1500.00 (after TC002) | 1. Select option 3 (Debit Account) 2. Enter amount "300.00" 3. Select option 1 to view balance | Balance displays as "001200.00" |  |  | Debits should subtract from balance |
| TC004 | Debit Account with Insufficient Funds | Application is running, balance is $1200.00 (after TC003) | 1. Select option 3 (Debit Account) 2. Enter amount "1500.00" | Display shows "Insufficient funds for this debit." |  |  | System prevents overdrafts |
| TC005 | Multiple Credit Operations | Application is running, balance is $1200.00 | 1. Select option 2, enter "100.00" 2. Select option 2, enter "200.00" 3. Select option 1 to view balance | Balance displays as "001500.00" |  |  | Multiple credits accumulate correctly |
| TC006 | Multiple Debit Operations | Application is running, balance is $1500.00 | 1. Select option 3, enter "100.00" 2. Select option 3, enter "200.00" 3. Select option 1 to view balance | Balance displays as "001200.00" |  |  | Multiple debits accumulate correctly |
| TC007 | Invalid Menu Choice | Application is running | 1. Enter invalid choice "5" 2. Enter invalid choice "abc" | Display shows "Invalid choice, please select 1-4." for each invalid input |  |  | Input validation for menu choices |
| TC008 | Zero Amount Credit | Application is running, balance is $1200.00 | 1. Select option 2 2. Enter amount "0.00" 3. Select option 1 to view balance | Balance remains "001200.00" |  |  | Zero credits should not change balance |
| TC009 | Zero Amount Debit | Application is running, balance is $1200.00 | 1. Select option 3 2. Enter amount "0.00" 3. Select option 1 to view balance | Balance remains "001200.00" |  |  | Zero debits should not change balance |
| TC010 | Negative Amount Credit | Application is running, balance is $1200.00 | 1. Select option 2 2. Enter amount "-100.00" | Balance becomes "001100.00" (subtracts negative) |  |  | COBOL handles negative as subtraction |
| TC011 | Negative Amount Debit | Application is running, balance is $1100.00 | 1. Select option 3 2. Enter amount "-50.00" | Balance becomes "001150.00" (adds negative debit) |  |  | Negative debit adds to balance |
| TC012 | Large Amount Credit | Application is running, balance is $1150.00 | 1. Select option 2 2. Enter amount "999999.99" 3. Select option 1 to view balance | Balance displays as "1001150.00" (within PIC 9(6)V99 limit) |  |  | Test maximum amount handling |
| TC013 | Large Amount Debit (Insufficient) | Application is running, balance is $1001150.00 | 1. Select option 3 2. Enter amount "2000000.00" | Display shows "Insufficient funds for this debit." |  |  | Large debits still check balance |
| TC014 | Program Exit | Application is running | 1. Select option 4 (Exit) | Display shows "Exiting the program. Goodbye!" and program terminates |  |  | Clean program termination |
| TC015 | Balance Persistence During Session | Application is running, perform TC002 and TC003 | 1. Perform credit and debit operations 2. View balance multiple times throughout session | Balance reflects cumulative changes from all operations |  |  | Balance persists in memory during program execution |
| TC016 | Menu Loop Continuation | Application is running | 1. Perform any valid operation 2. Observe menu reappears after operation completes | Menu displays again after each operation until exit is chosen |  |  | Program continues until explicit exit |

## Test Execution Notes

- **Environment**: Ubuntu Linux with GnuCOBOL compiler
- **Data Setup**: Initial balance starts at $1000.00
- **Input Format**: Amounts should be entered as decimal numbers (e.g., 500.00)
- **Display Format**: Balances display with leading zeros to fill PIC 9(6)V99 format
- **Error Handling**: Invalid inputs should be handled gracefully with appropriate messages

## Business Rules Validation

This test plan validates the following business rules:
1. Student accounts maintain a single balance value
2. Credits can be applied without restrictions
3. Debits require sufficient balance to prevent overdrafts
4. All transactions are processed immediately with real-time balance updates
5. Initial balance is set to $1000.00 for demonstration purposes
6. Input validation for menu choices and amounts
7. Clean program termination on user exit

## Future Use

This test plan will be used to:
- Validate business requirements with stakeholders
- Create unit tests for individual functions in Node.js
- Create integration tests for end-to-end workflows
- Ensure the Node.js transformation maintains equivalent functionality
