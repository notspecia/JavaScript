/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-11-07
 * @description 
 *  ● Write a function called round that returns a promise with a 50/50 
      probability of resolving or rejecting

    ● The function should take 2 optional parameters:
     ○ label, a label for the round, otherwise the default is "round"
     ○ delay, a delay in which to resolve the promise, otherwise 500ms
     
    ● Call the function 3 times and use the Promise API to create an output as in 
      the following page

    ● Remember to handle any possible errors cleanly
 */


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function round(label = "round", delay = 500) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve(label) : reject(label);
        }, delay);
    });

}

// ritorna la promise in fase di pending
let firstCall = round();
let secondCall = round();
let thirdCall = round();


Promise.all([
    firstCall,
    secondCall,
    thirdCall
])
    .then(results => {
        results.forEach((result, i) => {
            console.log(`${result} ${i + 1} won!`);
        });
    })
    .catch(error => { console.log(`${error} x: lost!`); })
    .finally(() => { console.log("Game over") });