/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-14
 * @description
 * ● Create a function called verbing
 * 
   ● It should take a single argument, a string. If its length is at least 3, it should add 'ing' to 
     its end, unless it already ends in 'ing', in which case it should add 'ly' instead

   ● If the string length is less than 3, it should leave it unchanged

     For example:
     verbing('swim'): 'swimming'
     verbing('swimming'): 'swimmingly'
     verbing('go'): 'go' 
 */





/**
 * verbing function
 * function that receives a string type topic (in this case verb), and returns a modified string
 * Based on some parameters:
 * 1. If the length of the string is < 3, it returns the original string
 * 2. If the string ends with "Ing", we will add to the string + "Ly"
 * 3. If the string is >= 3, check if the string ends with a consonant (if It is, double it), and add + "ing"
 * @param {string} str - string understood as verb
 * @returns {string} - string understood as verb, modified according to the specific requests
 */
function verbing(str) {

    // Variable and initialization declaration
    let finale = str.charAt(str.length - 1); // Let's assign the final character of the string as value

    // If the length of the string is < of 3 the original string is returned
    if (str.length < 3) {

        return str;
    }

    // If the string ends with "ing", add to string Ly, use method .endsWhit("x")
    if (str.endsWith("ing")) {

        return str + "ly";
    }


    /* otherwise if the length of the string > 3, but dont ends whit "ing",
    Control if the final ends with a vowel or a consonant
    In case he ends up with a consonant we double it */
    switch (true) {

        case finale == "a" || finale == "e" || finale == "i" || finale == "o" || finale == "u" || finale == "y":
            return str + "ing";

        // Let's check if before the final consonant, there is already the same consonant
        default:
            if (finale === str.charAt(str.length - 2)) {
                return str + "ing";

            } else {
                return str + finale + "ing";

            }

    }

}





// Variable Declaration
let parola;    // Original string
let parolaMod; // modified string




/* 1 verbing function recall,Let's pass a string as the topic, will be returned
to the word of the word, the verb transformed into the correct form within the function*/
parola = "play";
parolaMod = verbing(parola);
console.log(parolaMod);

// 2 verbing function recall...
parola = "call";
parolaMod = verbing(parola);
console.log(parolaMod);

// 3 verbing function recall ...
parola = "go";
parolaMod = verbing(parola);
console.log(parolaMod);