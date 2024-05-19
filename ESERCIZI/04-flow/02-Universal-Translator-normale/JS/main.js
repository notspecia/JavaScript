/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-02
 * @description 
 * ● Write a function named helloWorld that:
   ○ takes 1 argument, a language code (e.g. "es", "de", "en")
   ○ returns "Hello, World" for the given language, for atleast 3 languages. It should default to 
     returning English.
   ● Call that function for each of the supported languages and log the result to 
     make sure it works.
 */



/**
 * funzione helloWorld
 * funzione che ritorna i saluti in base alla lingua passata in argomento alla funzione
 * (se l'argomento passato è al di fuori dei parametri delle condizioni, uscirà sempre la lingua inglese come di default)
 * @param {string} language - lingua passata nella funzione
 * @returns {message} - restituisce il saluto nella lingua desiderata
 */
function helloWorld(language) {

    let message;

    // se l'espressione è falsa, passa al caso successivo fino a quando non trova una corrispondenza o raggiunge il caso predefinito
    switch (true) {

        case language == "it":
            message = "ciao mondo!";
            break;

        case language == "en":
            message = "hello world!";
            break;

        case language == "es":
            message = "hola mundo!";
            break;

        case language == "de":
            message = "hallo welt!";
            break;

        case language == "ru":
            message = "Привет мир!";
            break;

        case language == "jp":
            message = "こんにちは 世界!";
            break;

        // se la lingua inserita non è presente, passeremo il messaggio di saluti in inglese
        default:
            message = "hello world!"
    }

    return message;

}



//dichiarazione variabile lingua
let language;


// 1 richiamo funzione con lingua x
language = helloWorld("jp");
console.log(language);

// 2 richiamo funzione con lingua x
language = helloWorld("en");
console.log(language);

// 3 richiamo funzione con lingua x
language = helloWorld("ru");
console.log(language);