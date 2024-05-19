/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 * ● Write a JavaScript function called reverse which has one parameter, a string, and which returns 
     that string in reverse

   ● For example, the call reverse("foobar") should return the string "raboof"
 */




/**
 * Reverse function
 * takes a parameter (string), and returns as a value
 * The inverted string
 * @param {string} parola - Past word as a parameter
 * @returns {string} - return of the word inverted
 * 
 */
function reverse(parola) {

    // Variable Declaration
    let parolaInvertita = "";  // will count the inverted string

    /*cycle that puts in the position [0] of the new string, the last position [n] of the past string
     decreases by composing the inverted string*/
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola.charAt(i);
    }

    return parolaInvertita;
}


// Variable Declaration
let parola;          // original word
let parolaContrario; // word inverted

// 1 Initialization and recall of the printReverse function, we pass the topic of the word and receive an inverted string
parola = "rosso";
parolaContrario = reverse(parola);
console.log(parolaContrario);

// 2 Initialization and call of the printReverse function, we pass the topic of the word and receive an inverted string
parola = "cavallo";
parolaContrario = reverse(parola);
console.log(parolaContrario);

// 3 Initialization and call of the printReverse function, we pass the topic of the word and receive an inverted string
parola = "oro";
parolaContrario = reverse(parola);
console.log(parolaContrario);


