/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 * ● Write a JavaScript function called printReverse which has one parameter, a string, and which 
     prints that string in reverse
   ● For example, the call printReverse("foobar") should result in "raboof" being displayed
 */



/**
 * Printreverse function
 * takes a parameter (string), and prints the inverted string
 * @param {string} parola - Word passed as a parameter
 */
function printReverse(parola) {

    // Variable declaration
    let parolaInvertita = ""; // containing the word inverted

    /* for cycle, that puts in the position [0] of the new string, the last position [n] of the original string,
    decreases by composing the word inverted*/
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola.charAt(i);
    }

    // Print the inverted word
    console.log(parolaInvertita);
}



// Variable Declaration
let parola;

// 1 Initialization and recall of the Printreverse function, we pass the topic of the word
parola = "ciao";
printReverse(parola);

// 2 Initialization and recall of the Printreverse function, we pass the topic of the word
parola = "cavallo";
printReverse(parola);

// 3 Initialization and recall of the Printreverse function, we pass the topic of the word
parola = "oro";
printReverse(parola);
