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
 * funzione che ritorna i saluti presi dall'array, in base alla lingua passata in argomento alla funzione
 * (se il valore è al di fuori dei parametri dell'array, uscirà sempre la lingua inglese come di default)
 * @param {string} language - lingua passata nella funzione
 * @returns {message} - restituisce il saluto nella lingua desiderata
 */
function helloWorld(language) {

  // ritorniamo il messaggio di saluto in base alla lingua passata per argomento alla funzione
  return (message[language] || message["en"]);
}



//dichiarazione variabile lingua
let language;

// dichiarazione e inizializzazione di un array che contiene i saluti in lingue diverse
let message = {
  "it": "Ciao mondo!",
  "es": "Hola mundo!",
  "de": "Hallo Welt!",
  "ru": "Привет мир!",
  "jp": "こんにちは 世界!",
  "en": "Hello world!" // utilizzato di default se l'argomento non è inizializzato correttamente
};

// 1 richiamo funzione con lingua x
language = helloWorld("dadsadsafsaf");
console.log(language);

// 2 richiamo funzione con lingua x
language = helloWorld("de");
console.log(language);

// 3 richiamo funzione con lingua x
language = helloWorld("jp");
console.log(language);