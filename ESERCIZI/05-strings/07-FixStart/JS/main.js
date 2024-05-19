/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 * ● Create a function called fixStart
 * 
   ● It should take a single argument, a string, and return a version where all occurrences of its 
     first character have been replaced with '*', except for the first character itself 

   ● You can assume that the string is at least one character long
     For example
     fixStart('babble'): 'ba**le
 */




/**
 * function fixStart
 * It takes a string as a topic through processing, returns a modified string
 * from the original, changing all the occurrences with the first letter with "*"
 * @param {string} str - string passed as a topic
 * @returns {string} - string modified according to requests
 */
function fixStart(str) {

  // Variable declaration
  let strMod;   // string modified by the original
  let first;    // first character of the string

  // Variable initialization
  strMod = str;
  first = str.charAt(0);

  /* cycle where we start from the 2nd character and go to compose the new string replacing
  all the occurrences of the 1st character of the string with a "*" */
  for (let i = 1; i < str.length; i++) {

    if (strMod.charAt(i) === first) {

      // we will continue to change the string, until we leave the for cycle
      strMod = strMod.slice(0, i) + "*" + strMod.slice(i + 1);
    }

  }

  return strMod;

}


// Variable Declaration
let parola;
let parolaMod;



/* 1 fixStart function recall, we pass a string as the topic, and will be returned to us
a new string modified according to the specific requests*/
parola = "babba";
parolaMod = fixStart(parola);
console.log(parolaMod);

// 2 fixStart function call ...
parola = "zaino";
parolaMod = fixStart(parola);
console.log(parolaMod);

// 3 fixStart function call ...
parola = "lavello";
parolaMod = fixStart(parola);
console.log(parolaMod);
