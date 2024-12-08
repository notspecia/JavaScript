//* -------------------------------------------------------------------------------------------------------------------------------
//* ----------------------------------------------------- STRATEGIES --------------------------------------------------------------
//* -------------------------------------------------------------------------------------------------------------------------------


//!01. RETRY --------------------------------------------------------------------------

// // counter dei tentavi sono stati fatti (aumenta nel catch)
// let retries = 0;

// function doSomething() {

//     try {
//         let age = 7;
//         let name = "Gabriele"
//         console.log(age, name);
//         throw new Error('oops'); // genera un errore INTENZIONALMENTE con throw new Error('oops') e lo ritorna nel catch;.
//     }
//     catch (error) {
//         if (retries < 3) {
//             retries++;
//             doSomething();
//         }
//         else {
//             console.log('Operation failed after 3 retries');
//         }
//     }

// }

// doSomething();



//!02. FALLBACK VALUE --------------------------------------------------------------------------

// let password = "pausa123";

// // in tal caso non venisse ritornato il valore nella funzione desiderato, viene restituito un valore di default tramite l'errore!
// function getUsername() {

//     try {
//         if (password === "pausa123") {
//             return "notspecia";
//         } else {
//             // Code that retrieves data from a server (NOT FOUNDED!)
//             throw new Error('oops');
//         }
//     }
//     catch (error) {
//         return 'Default User';
//     }

// }

// console.log(`Username: ${getUsername()}`);



//!03. ERROR VALUE --------------------------------------------------------------------------

// // function must document error values that are returned
// function calculateAverage(numbers) {

//     // in caso passiamo un array vuoto di numeri ritorniamo un valore che permette di mandare su console un messaggio di errore
//     if (numbers.length === 0) {
//         return null;
//     }

//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }


// // code that uses the function must handle error values
// const average = calculateAverage([]);
// if (average === null) {
//     console.error('Cannot calculate average of empty array'); // CONSOLE.ERROR -> usato per mandare un messaggio in forma di errore alla console
// }



//!04. PROPAGATE --------------------------------------------------------------------------

/* Questo concetto implica che, quando un errore viene catturato,
può essere generato un nuovo errore o lo stesso errore può essere rilanciato per essere gestito altrove nel codice.
PASSIAMO LA RESPONSABILITA A CHI HA INVOCATO QUELLA FUNZIONE */

// esegue un'operazione che potrebbe fallire e si genera un errore manualmente
function doSomething() {

    try {
        // code that might fail
        throw new Error('oops');
    }
    catch (error) {
        throw new Error('Something went wrong');
    }

}

// quando doSomething genera il nuovo errore, il blocco try-catch esterno lo cattura.
try {
    doSomething();
} catch (error) {
    console.log(error.message);
}



//!05. LOG --------------------------------------------------------------------------

// function doSomething() {

//     try {
//         // Code that might fail - non critical error (ma lo passeremo come warning che non è critico da bloccare tutto)
//         throw new Error('oops');
//     }
//     catch (error) {
//         console.warn('Something went wrong:', error.message);
//     }

// }

// doSomething();




//!06. TERMINATE --------------------------------------------------------------------------
/* importante NON ci sono casi in cui usare questa gestione degli errori nel FRONTEND!
Termina l'applicazione in caso di errore critico (più comune in back-end).
non ha senso usarlo nel frontend (NON SI mostra una pagina bianca come errore critico!) */

// function doSomething() {

//     try {
//         // errore nel codice
//         throw new Error('oops');
//     }
//     catch (error) {
//         console.error('Critical error:', error.message);
//         // never a good reason to do this things in a browser
//         window.stop(); // stop the loading of the page
//         window.close(); // close the page
//     }

// }

// doSomething();





//!07. IGNORE --------------------------------------------------------------------------
// ignora letteralmente il problema dell'errore (SCONSIGLIATO)
// function divide(a, b) {
//     return a / b;
// }

// const result = divide(10, 0);
// console.log(result); // Output: Infinity, ed è un problema
// console.log([1, 3, 4].forEach(num => num));
