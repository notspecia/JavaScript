/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-10-20
 * @description 
 *
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
 */






/**
 * arrow function validateCreditCard
 * function that receives the credit card number as argument.
 * starting: we go to eliminate the "-" whit regex, After we go to carry out some checks on it
 * @param {string} card - credit card number
 * @returns {object} - object containing the information on the credit card processed in the function (number, validity, *errors*)
 */
const validateCreditCard = (card) => {

  // object that will contain information on credit card
  let creditCard = {
    number: card,
    valid: true,
    errors: []
  };

  // delete all the sections on the credit card through /-/g regex
  let cardModified = card.replace(/-/g, "");



  // 1 check --> card length, must be === 16 
  if (cardModified.length !== 16) {
    creditCard.valid = false;
    creditCard.errors.push("=  error: wrong length!");
  }


  // 2 check --> all card digits, must be of the type NUMBER
  for (const digit of cardModified) {

    // check if the digit is not a number
    if (isNaN(+digit)) {
      creditCard.valid = false;
      creditCard.errors.push("=  error: Letters are not allowed in the credit card!");
      break;
    }

  }


  // 3 check --> at least two different digits (ex: 0 1), `new Set` create an array without duplicates
  if (new Set(cardModified).size < 2) {
    creditCard.valid = false;
    creditCard.errors.push("=  error: You don't have at least two different digits represented!");
  }


  // 4 check --> the last digit of the credit card must be even
  if (+cardModified.charAt(cardModified.length - 1) % 2 !== 0) {
    creditCard.valid = false;
    creditCard.errors.push("=  error: final digit is not even!");
  }


  // 5 check --> the sum of all digits must be at least = 16
  const sumDigits = cardModified.split("")
    .reduce((sumDigits, digit) => sumDigits + +digit, 0);

  if (sumDigits < 16) {
    creditCard.valid = false;
    creditCard.errors.push("=  error: sum of all the digits is not greater than 16!");
  }


  printInformationCards(creditCard);

}




/**
 * function printInformationCards
 * function used to always print at least the number and validity of the credit card
 * if not valid, the errors specifically will also be shown
 * @param {object} creditCard - Contains the information relating to the credit card (number, validity, *errors*)
 */
const printInformationCards = (creditCard) => {

  console.log(
    `\n\n
=======================================================================
=  number: ${creditCard.number}
=  valid: ${creditCard.valid}
${creditCard.errors.join("\n")
    } 
=======================================================================`);

}




const creditCards = [
  "3212-2210-1111-1114",
  "453-5645-2e45-2343",
  "0000-0000-0000-0000"
];

creditCards.forEach(card => {
  validateCreditCard(card);
});