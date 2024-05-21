## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-02
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Write a function called “validateCreditCard” that checks credit card 
    numbers according to the following rules:
    ○ Number must be 16 digits, all of them must be numbers
    ○ You must have at least two different digits represented (all of the digits cannot be the same)
    ○ The final digit must be even
    ○ The sum of all the digits must be greater than 16

  ● The following credit card numbers are valid:
    ○ 9999-9999-8888-0000
    ○ 6666-6666-6666-1666

  ● The following credit card numbers are invalid:
    ○ a923-3211-9c01-1112 invalid characters
    ○ 4444-4444-4444-4444 only one type of number
    ○ 1111-1111-1111-1110 sum less than 16
    ○ 6666-6666-6666-6661 odd final number

  ● Hint
    ○ Remove the dash '-' from the input string before checking if the input credit card number is 
      valid

Call the function with several credit card numbers:
validateCreditCard('9999-9999-8888-0000');
validateCreditCard('4444-4444-4444-4444');
validateCreditCard('6666-6666-6666-1666');

The function returns an object saying that the credit card is valid, or what the error is:
{ valid: true, number: '9999-9999-8888-0000' }
{ valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }

For each card check, print out the result to the log in this format:
================================
= number : a923-3211-9c01-1112 =
= valid : false =
= error : wrong length =
================================






## Approach to Solution

This solution involves the implementation of a function called `validateCreditCard`, which checks the validity of credit card numbers based on specific rules. Additionally, there's a function named `printInformationCards` to print the information about credit cards to the console in a structured format.

### `validateCreditCard` Function:
1. **Function Overview**:
- The function `validateCreditCard(card)` takes a credit card number as input.
- It removes dashes from the input string and performs several checks on the credit card number according to the specified rules.
- The function returns an object containing information about the credit card, including its validity and any errors encountered during validation.

2. **Checks Performed**:
- **Length Check**: Verifies that the length of the credit card number is exactly 16 digits.
- **Numeric Check**: Ensures that all characters in the credit card number are numbers.
- **Distinct Digits Check**: Checks if there are at least two different digits in the credit card number.
- **Even Final Digit Check**: Validates that the final digit of the credit card number is even.
- **Sum of Digits Check**: Calculates the sum of all digits in the credit card number and verifies that it's greater than 16.

3. **Printing Function**:
- The `printInformationCards` function is responsible for printing the information about the credit card to the console in a structured format.
- It prints the credit card number, its validity status, and any specific errors encountered during validation.

4. **Testing**:
- The `validateCreditCard` function is called with different credit card numbers as input, and the results are printed to the console using the `printInformationCards` function.





## files

* index.html
* main.js