/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-02
 * @description 
 * 
 * ● Write a function named assignGrade that:
   ○ takes 1 argument, a number score.
   ○ returns a grade for the score, either "A", "B", "C", "D", or "F".
   ● Call that function for a few different scores and log the result to make sure it 
     works.
 */



/**
 * funzione assignGrade
 * funzione contenente uno switch-case con vari casi, si continua ad effettuare l'analisi del voto numerico
 * fino a quando l'espressione è vera, una volta trovata, ritorneremo il voto in lettera
 * @param {number} voto - voto numerico dello studente passato x argomento
 * @returns {grade} - restituzione del voto in lettera in base al voto numerico
 */
function assignGrade(voto) {

    // dichiarazione variaible locale
    let grade;

    // switch-case che ritorna e trasforma il voto numerico passato x argomento, in voto lettera
    // !!NOTA IMPORTANTE!! --> Se l'espressione è vera, il codice all'interno del caso viene eseguito
    // se l'espressione è falsa, passa al caso successivo fino a quando non trova una corrispondenza o raggiunge il caso predefinito
    switch (true) {

        case voto == 100:
            grade = "A";
            break;

        case voto >= 75:
            grade = "B";
            break;

        case voto >= 65:
            grade = "C";
            break;

        case voto >= 50:
            grade = "D";
            break;

        case voto >= 0:
            grade = "F";
            break;

        // se il voto inserito non è coerente
        default:
            grade = "impossibile"
    }

    return grade; // ritorniamo la lettera in base a che caso l'espressione risulta vera
}



// dichiarazione variabile
let votazione;

// 1 richiamo funzione assignGrade
votazione = assignGrade(73);
console.log("il voto del primo studente è:", votazione);

// 2 richiamo funzione assignGrade
votazione = assignGrade(12);
console.log("il voto del secondo studente è:", votazione);

// 3 richiamo funzione assignGrade
votazione = assignGrade(99);
console.log("il voto del terzo studente è:", votazione);