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
 * Class CreateCreditCard
 * this class is responsible for validating a credit card number based on a series of rules
 * (length, numeric characters, different digits, even last digit, and digit sum).
 */
class CreateCreditCard {

  // constructor object which will contains the number, cleaned number (no "-"), validation, errors 
  constructor(config) {
    this.number = config.number || null;
    this.cleanNumber = config.number.replace(/-/g, "");
    this.valid = config.valid;
    this.errors = [];
  }

  // methods created into the Class, used for the validation of the credit card

  // 1 check --> card length, must be === 16 
  validateLength() {
    if (this.cleanNumber.length !== 16) {
      this.valid = false;
      this.errors.push("=  error: wrong length!");
    }
  }

  // 2 check --> all card digits, must be of the type NUMBER (trough isNaN)
  validateDigitType() {
    for (const digit of this.cleanNumber) {
      if (isNaN(+digit)) {
        this.valid = false;
        this.errors.push("=  error: Letters are not allowed in the credit card!");
        break;
      }
    }
  }

  // 3 check --> at least two different digits (ex: 0 1), `new Set` create an array without duplicates
  validateDifferentDigits() {
    if (new Set(this.cleanNumber).size < 2) {
      this.valid = false;
      this.errors.push("=  error: You don't have at least two different digits represented!");
    }
  }

  // 4 check --> the last digit of the credit card must be even
  validateLastDigitEven() {
    if (+this.cleanNumber.charAt(this.cleanNumber.length - 1) % 2 !== 0) {
      this.valid = false;
      this.errors.push("=  error: final digit is not even!");
    }
  }

  // 5 check --> the sum of all digits must be at least = 16
  validateSumDigits() {

    // create an array whit all the digits splitted and use the .reduce method (return a single value, the sum of the digits!)
    const sumDigits = this.cleanNumber.split("")
      .reduce((sumDigits, digit) => sumDigits + +digit, 0);

    if (sumDigits < 16) {
      this.valid = false;
      this.errors.push("=  error: sum of all the digits is not greater than 16!");
    }
  }


  
  // method which print on console all the proprieties into the credit card
  printInformationCard() {
    console.log(`\n\n
=======================================================================
=  number: ${this.number}
=  valid: ${this.valid}
${this.errors.join("\n")} 
=======================================================================`);
  }

  // a method which evocate all the methods of validation into the Class
  validate() {
    this.validateLength();
    this.validateDigitType();
    this.validateDifferentDigits();
    this.validateLastDigitEven();
    this.validateSumDigits();
    this.printInformationCard();
  }

}


const creditCards = [
  "3212-2210-1111-1114",
  "453-5645-2e45-2343",
  "0000-0000-0000-0000"
];


creditCards.forEach(card => {

  // create a new instance of the credit card, with the `number` and initial `validity` set to true
  let creditCard = new CreateCreditCard({
    number: card,
    valid: true
  });

  // call the validate method to perform all the validation checks on the card
  creditCard.validate();
});