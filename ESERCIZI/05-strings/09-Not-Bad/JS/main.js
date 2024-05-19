/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-14
 * @description
 * ● Create a function called notBad that takes a single argument, a string
 * 
   ● It should find the first appearance of the substring 'not' and 'bad'

   ● If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
     'good' and return the result

   ● If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
     sentence

    For example:
    notBad('This dinner is not that bad!'): 'This dinner is good!'
    notBad('This movie is not so bad!'): 'This movie is good!'
    notBad('This dinner is bad!'): 'This dinner is bad!'
 */




    

/**
 * function notBad
 * function that takes a string as a topic, if the words are found inside
 * "not" and "bad" ("not" must be before "bad" to work), then comes
 * returned a new string with the whole sentence, except the "not", "bad" parts, which are replaced with "good"
 * @param {string} str - string containing a sentence
 * @returns {stringa} - new string that is modified according to the specific requests
 */
function notBad(str) {

  // Variable Declaration
  let findNot = str.indexOf("not"); // Let's search "not" inside the string (Value Number)
  let findBad = str.indexOf("bad"); // Let's search "bad" inside the string (Value number)
  let strMod;


  // If findNot, findBad they were found, (so they are True (!== -1)) and "not" is before "bad" ...
  if (findNot !== -1 && findBad !== -1 && findNot < findBad) {
    strMod = str.slice(0, findNot) + "good" + str.slice(findBad + 3);

    // If you don't respect the conditions, return the original string
  } else {
    strMod = str;

  }

  return strMod;
}








// Variable Declaration
let parola;
let parolaMod;



// 1 Recall notBad function, let's pass a string as a topic (phrase)
parola = "This dinner is not that bad!"
parolaMod = notBad(parola);
console.log(parolaMod);

// 2 Recall notBad function, let's pass a string as a topic (phrase)
parola = "This Lunch is not bad!"
parolaMod = notBad(parola);
console.log(parolaMod);

// 3 Recall notBad function, let's pass a string as a topic (phrase)
parola = "This Lunch is bad, and im not hungry!"
parolaMod = notBad(parola);
console.log(parolaMod);
