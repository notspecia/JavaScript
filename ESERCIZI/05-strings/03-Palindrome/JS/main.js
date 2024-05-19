/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 * ● Using your reverse() function from the previous exercise, write a simple function to check if a 
    string is a palindrome
   ● A palindrome is a word that reads the same backwards as forwards. For example, the word "madam" 
     is a palindrome
   ● Write a JavaScript function called isPalindrome which has one parameter, a string, and which 
     returns true if that string is a palindrome, else false
   ● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame") 
     should return false
 */


/**
 * Reverse function
 * takes a parameter (string), and returns as a value
 * The inverted string
 * @param {string} parola - Past word as a parameter
 * @returns {string} - return of the word inverted
 */
function reverse(parola) {

    // Variable Declaration
    let parolaInvertita = "";  // will containe the inverted string

    // cycle that puts in the position [0] of the new string, the last position [n] of the past string
    // decreases by composing the inverted string
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola.charAt(i);
    }

    return parolaInvertita;
}



/**
 * Ispalindrome function
 * takes the original string, and the string inverted in the Reverse () function previously
 * establishes whether the original string is Palindroma (True) or not (False)
 * @param {string} parola - normal word
 * @param {string} parolaContrario - word inverted
 * @returns {boolean} - returns a Boolean value according to whether the word is palindroma or not
 */
function isPalindrome(parola, parolaContrario) {

    // Variable declaration
    let isPalindromaParola; // it will have Boolean value according to whether the original string is palindrome or not

    // condition to establish whether the original string is palindrome or not
    if (parola == parolaContrario) {
        isPalindromaParola = true;
    } else {
        isPalindromaParola = false;
    }

    return isPalindromaParola;
}




// Variable Declaration
let parola;
let parolaContrario;
let isPalindromaParola;

// Initialization and recall of the Printreverse function, we pass the topic of the word and receive an inverted string
// recall of the isPalindrome function, we pass the orginal string and the string previously reversed as topics
parola = "ape";
parolaContrario = reverse(parola);
isPalindromaParola = isPalindrome(parola, parolaContrario);

// Print whether the original string is palindrome or not
console.log("la parola", parola, "è palindroma?", isPalindromaParola);







