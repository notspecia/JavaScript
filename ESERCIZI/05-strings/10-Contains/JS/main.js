/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-14
 * @description
 *  ● Create a function called aContainsb
 * 
    ● It should take in two strings, and return true if the first string contains the second, 
      otherwise it should return false

      For example:
      aContainsB ("Another hello world", "hello"); 
 */



      
/**
 * function aContainsb
 * Function that takes 2 strings on topic, if the string2 is contained in string1 --> .indexof ()
 * True's value will return, otherwise the false value returned
 * @param {string} str - 1 string
 * @param {string} str2 - 2 string
 * @returns {boolean} - returns variable containing a Boolean value according to the specifications
 */
function aContainsb(str, str2) {

    // Variable Declaration
    let isContenuta;

    // -1 when nothing is found (if it is different from -1 it is true)
    if (str.indexOf(str2) !== -1) {
        isContenuta = true;

    } else {
        isContenuta = false;

    }

    return isContenuta;

}





// Variable Declaration
let parola;
let parola2;
let isContenuta;



/* 1 recall function aContainsb, We pass 2 strings to the function as the topic, if the string 2
is contained in string1, the Historical will receive the value of True or False If it is not found*/
parola = "banana";
parola2 = "nana";
isContenuta = aContainsb(parola, parola2);
console.log(parola2, "it is contained in", parola + "?", isContenuta);

// 2 recall function aContainsb ...
parola = "rosso";
parola2 = "oro";
isContenuta = aContainsb(parola, parola2);
console.log(parola2, "it is contained in", parola + "?", isContenuta);
