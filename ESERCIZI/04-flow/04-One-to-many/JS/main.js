/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-03
 * @description 
 * ● Write a function named oneToMany() that:
   ○ takes 2 arguments, a noun and a number.
   ○ returns the number and pluralized form, like "5 cats" or "1 dog".
   ● Call that function for a few different scores and log the result to make sure it 
     works.
   ● Bonus: Make it handle a few collective nouns like "sheep" and "geese". 
 */



/**
 * funione oneToMany
 * funzione che verifica con una condizione se il numero è > 1 or < -1
 * trasforma e restituisce il sostantivo singolare in PLURALE (s)
 * @param {string} sostantivo - nome del sostantivo
 * @param {number} num - numero di quantità
 * @returns {message} - sostantivo trasformato in base se la condizione risultasse vera
 */
function oneToMany(sostantivo, num) {

  let message;

  // condizione se il num > 1 or num < -1, trasforma in plurale
  if (numero > 1 || numero < - 1) {
    message = sostantivo + "s";
  } else {
    message = sostantivo;
  }

  return message;
}




// dichiarazione variabili
let numero;    // rappresenta la quantità presente
let messaggio; // prenderà il valore passato dalla funzione

// 1 richiamo funzione oneToMany passando argomento numero e un sonstativo al singolare
numero = 17;
messaggio = oneToMany("dog", numero);
console.log(messaggio, numero);

// 2 richiamo funzione oneToMany passando argomento numero e un sonstativo al singolare
numero = -4;
messaggio = oneToMany("cat", numero);
console.log(messaggio, numero);

// 3 richiamo funzione oneToMany passando argomento numero e un sonstativo al singolare
numero = 1;
messaggio = oneToMany("koala", numero);
console.log(messaggio, numero);
