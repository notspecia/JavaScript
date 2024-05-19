/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 *● Write a JavaScript function called capital which has one parameter, a string, and which returns 
     that string with the first letter capitalized
  ● For example, the call capital("hello world") should return the string "Hello world"
  
  Bonus:
  Modify the function so that it capitalizes each word. capital2("my name is john") should return the 
  string "My Name Is John"
*/




/**
 * function capital
 * We pass a string type topic, and return a custom string following these specifications:
    if it is 1 character (position 0), or the character we are analyzing
    has a space (" ") as a previous character, we transform them into a capital char
 * @param {string} parola - string passed as a topic
 * @returns {string} - We return the word (string) modified with the following the specifications
 */
function capital(parola) {

  // Variable declaration
  let parolaCapital = "";
  let i;

  /* cycle that builds character for character the new string*/
  for (let i = 0; i < parola.length; i++) {

    if (i === 0 || parola.charAt(i - 1) === " ") {
      parolaCapital += parola.charAt(i).toUpperCase();
    } else {
      parolaCapital += parola.charAt(i);
    }

  }

  return parolaCapital;

}




// Variable Declaration
let parola;
let parolaModificata; //string modified with the initials after " ", in capital letters

// Word variable initialization
parola = "gabriele come va spero tutto bene";

/* call of capital function, passed as a topic a string, and the string will be returned
/ modified according to the specific requests*/
parolaModificata = capital(parola);
console.log(parolaModificata);
