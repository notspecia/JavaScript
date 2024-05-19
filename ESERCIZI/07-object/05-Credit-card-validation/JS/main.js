/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-02
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
 * function validateCreditCard
 * function that receives the credit card number as argument.
 * starting: we go to eliminate the "-" whit regex, After we go to carry out some checks on it
 * @param {string} card - credit card number
 * @returns {object} - object containing the information on the credit card processed in the function (number, validity, *errors*)
 */
function validateCreditCard(card) {


  // Variable declaration
  let creditCard = {       // object that will contain information on credit card
  };
  creditCard.valid = true; // We insert a 1 property where we initialize that the validity of the paper is true
  let almost2 = false;     // We initialize a Boolean that will be used to establish if there are at least 2 different digits!
  let sumCifre = 0;        // will contain the sum of the paper figures




  /* Let's eliminate all the sections on the credit card
  through /-/g  ,and We assign the changed string to a new variable*/
  let cardMod = card.replace(/-/g, "");

  // Properties creation --> number of the credit card
  creditCard.number = card;





  /*-------------------------------------------------
    1 check --> card length, must be === 16 */

  if (cardMod.length !== 16) {
    creditCard.valid = false;
    creditCard.error1 = "=  error: wrong length!";
  }
  /* end 1 check
  ---------------------------------------------------*/






  /*-------------------------------------------------------------------------------------------
  2 check --> All card digits, must be of the type NUMBER*/

  for (let i = 0; i < cardMod.length; i++) {

    // check if the digit is not a number --> https://www.w3schools.com/jsref/jsref_isnan.asp
    if (isNaN(+cardMod.charAt(i))) {
      creditCard.valid = false;
      creditCard.error2 = "=  error: Letters are not allowed in the credit card!";
      break;

    }

  }
  /* end 2 check
  ----------------------------------------------------------------------------------------------*/








  /*---------------------------------------------------------------------------------------------------
    3 check --> at least two different digits (ex: 0 1) */

  let firstDigit = cardMod.charAt(0); // Let's assign the first digit of the credit card to a variable

  //Let's check that at least one digit is !== from firstDigit
  for (let i = 1; i < cardMod.length; i++) {

    if (firstDigit !== cardMod.charAt(i)) {
      almost2 = true;
      break;

    }

  }

  // !almost2 --> almost2 !== true
  if (!almost2) {
    creditCard.valid = false;
    creditCard.error3 = "=  error: You don't have at least two different digits represented!";
  }
  /* end 3 check
  ----------------------------------------------------------------------------------------------------*/





  /*--------------------------------------------------------------------------------------------------------------------
    4 check --> The last figure of the credit card must be even */

  let lastNumber = +cardMod.charAt(cardMod.length - 1); // Let's assign the last digit of the credit card to a variable

  if (lastNumber % 2 !== 0) {
    creditCard.valid = false;
    creditCard.error4 = "=  error: final digit is not even!";

  }
  /* end 4 check
  ----------------------------------------------------------------------------------------------------------------------*/






  /*-----------------------------------------------------------------------------------
    5 check --> The sum of all digits must be at least = 16*/

  /* Let's go to cycle the cardMod (now it is of the STRING type), that will come
   transformed into type NUMBER through + */
  for (let i = 0; i < cardMod.length; i++) {

    sumCifre += +cardMod.charAt(i);

  }


  if (sumCifre < 16) {
    creditCard.valid = false;
    creditCard.error5 = "=  error: sum of all the digits is not greater than 16!";

  }
  /* end 5 check
  -------------------------------------------------------------------------------------*/

  return creditCard;

}






/**
 * function printInformationCards
 * function used to always print at least the number and validity of the credit card
 * if not valid, the errors specifically will also be shown
 * @param {object} objectCard - Contains the information relating to the credit card (number, validity, *errors*)
 */
function printInformationCards(objectCard) {

  // print on consoles the number (2222-2210-1111-1114) and validity of credit card (true / false) 
  console.log(`\n\n\n\n\n=============================================================================
=  number: ${objectCard.number}
=  valid: ${objectCard.valid}`)


  // printing of specific errors (!!if there are in the object!!)
  if (objectCard.error1) {
    console.log(objectCard.error1);
  }

  if (objectCard.error2) {
    console.log(objectCard.error2);
  }

  if (objectCard.error3) {
    console.log(objectCard.error3);
  }

  if (objectCard.error4) {
    console.log(objectCard.error4);
  }

  if (objectCard.error5) {
    console.log(objectCard.error5);
  }

  console.log("=============================================================================")

}


// Variable declaration
let objectInformationCard; // variable that will contain an object with information relating to the credit card


// 1 recall of the functions --> validateCreditCard / printInformationCards
objectInformationCard = validateCreditCard('3212-2210-1111-1114');
printInformationCards(objectInformationCard);



// 2 recall of the functions --> validateCreditCard / printInformationCards
objectInformationCard = validateCreditCard('453-5645-2e45-2343');
printInformationCards(objectInformationCard);



// 3 recall of the functions --> validateCreditCard / printInformationCards
objectInformationCard = validateCreditCard('0000-0000-0000-0000');
printInformationCards(objectInformationCard);