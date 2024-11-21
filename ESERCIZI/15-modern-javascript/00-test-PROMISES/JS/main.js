//* ----------------------------------------- CODICE ASINCRONO + CALLBACKS (RIPASSO) ----------------------------------------------------


//! ripasso delle callback functions, inseriamo:  CALLBACK FUNCTIONS + CALLBACK HELL  +  RITARDO IN ms
/* la sequenza di attività da svolgere in un ordine specifico: prima giocare ai videogiochi, poi scrivere codice,
poi portare fuori la spazzatura, e infine terminare la giornata con un messaggio finale.
Ogni attività viene eseguita con un ritardo (delay) simulato grazie a setTimeout.

01. rendiamo asincorne le funzioni mettendo un setTimeOut al loro interno.

02. se volessimo fare questi lavoretti (funzioni) in ORDINE di come gli abbiamo scritti, allora dobbiamo modificare
le funzioni aggiungendo a loro come parametro una callback function per far si che vengano eseguite in ORDINE,
altrimenti verrano seguite in base agli `ms` stabiliti in maniera asincrona!

03. L'annidamento dei callback (o "callback hell") si crea quando abbiamo più operazioni asincrone
che dipendono l'una dall'altra e vogliamo che vengano eseguite in un ordine specifico.*/

// function playVideogames(callback) {
//     setTimeout(() => {
//         console.log("im playing videogames :D");
//         callback(); // writeCode
//     }, 2000)
// }

// function writeCode(callback) {

//     setTimeout(() => {
//         console.log("im typing code :(");
//         callback(); // takeOutTrash
//     }, 1000);
// }

// function takeOutTrash(num, callback) {

//     setTimeout(() => {
//         console.log(`im taking out the ${num} bag of trash bleahhh!`);
//         callback(); // console.log("fine giornata!")
//     }, 500);
// }


// // ORDINE RISPETTATO!!   CALLBACK HELL (annidamento di funzioni), rende il codice più difficile da leggere e gestire.
// /* - a `playVideogames`, passiamo come parametro una callback function, funzione anonima che contiene la funzione `writeCode`
//    - a `writeCode`, passiamo come parametro una callback function, funzione anonima che contiene la funzione `takeOutTrash`
//    - a `takeOutTrash`, è la funzione di chiusura a cui stiamo passando 2 PARAMETRI -> un numero e una callback function di chiusura */
// playVideogames(() => {
//     writeCode(() => {
//         takeOutTrash(2, () => {
//             console.log("fine giornata!");
//         });
//     });
// });




//* ------------------------------------------------------- PROMISES INTRO --------------------------------------------------------------------


//! SPIEGAZIONE PROMISE VIDEO -> https://www.youtube.com/watch?v=NOzi4wBHn0o
/* Per affrontare i problemi del Callback Hell, JavaScript ha introdotto le Promise (ECMAScript 6).
Una Promise rappresenta un'operazione che non è ancora completata, ma che lo sarà in futuro.

le promise sono OGGETTI, che gestiscono il codice e le operazioni asincrone che promettono un valore prima o poi
inizialmente verrà mostrato come usare le callback functions, per poi capire l'utilità delle PROMISE

Stati di una Promise:
01. Pending: in attesa di completamento.
02. Fulfilled: completata con successo.
03. Rejected: fallita con un errore.

*FASI:        PENDING --> RESOLVED || REJECTED   sono delle funzioni !!!!!!
?SINTASSI:    new Promise((resolve, reject)) => {CODICE ASINCRONO}
*/

// ! 01 ESEMPIO
//! utilizzo delle PROMISE + METHOD CHAINING, nell'esempio precedente per renderlo + ottimale! (NO BISOGNO DELLE CALLBACK FUNCTIONS)
/* utilizzando le `promise`, possiamo EVITARE tutto il mappazzone confusionario di prima con l'utilizzo delle callback functions!
IMPORTANTE -> funzione().then(risultato => {})   CI ANDRA A DARE IL VALORE SOLAMENTE DOPO CHE LA PROMESSA E STATA RISOLTA O RESPINTA!!

utilizzeremo il `method chaining delle nostre promises` (concatenare tanti metodi) vediamo come fare:

01. all'interno di ogni funzione andiamo a fare un `return new Promise()`

02. andiamo ad inserire il codice scritto prima (il setTimeout) all'interno della promise in un arrow function,
la nostra promise ora completa ci promette che ci restituirà un VALORE (RISOLTA  ||  RESPINTA)

03. per mostrare un messaggio quando la promise si RISOLVE (resolve), andiamo a sostiture il console.log() di prima!!
e utilizziamo resolve() | reject()

04. andiamo ad applicare il method chaining, e andiamo ad eseguire le funzioni nell'ORDINE in cui sono state definite
*/

function playVideogames() {

    return new Promise((resolve, reject) => {
        // simuliamo una richiesta asincrona con setTimeout
        setTimeout(() => {
            reject("now im playing videogames O.O"); // risolve la promise con successo, il messaggio dentro è il `value` della funzione `resolve()`
        }, 3000);
    });
}


function writeCode() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("im typing code :(");
        }, 2000);
    });
}


function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("im taking out the trash bleahhh!");
        }, 500);
    });
}



// 01. in ogni funzione, resolve() viene chiamato al termine del setTimeout, risolvendo la Promise con il messaggio specifico come valore (value).
// 02. si va a restituire (`return`) la Promise successiva a quella che è stata appena eseguita
playVideogames()
    .then(value => { console.log(value); return writeCode(); })
    .then(value => { console.log(value); return takeOutTrash(); })
    .then(value => { console.log(value); console.log("DAY ENDED, GOODNIGHT!"); })
    .catch(error => { console.log(error); console.log(`errore`); return "ciao"; }) // passerà il "ciao" anche se è in stato di catch(), sempre metterlo alla fine
    .then(value => { console.log(value); });


//? -----------------------------------------------------------------------------------


/*ESEMPIO DEL GIOCO DEL LANCIO DELLA MONETA DELLA SLIDE 
notazioni importanti:
01. Il valore passato a resolve (in questo caso "u win!") diventa il parametro di result nel .then().
02. Il valore passato a reject (in questo caso "u lose...") diventa il parametro di error nel .catch().
03. .finally() viene sempre eseguita, indipendentemente che la Promise sia risolta o respinta.
*/

// new Promise((resolve, reject) => {

//     // eseguito un setTimeOut che genera un numero random, in base al valore andrà ad eseguire resolve() / reject()
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve("u win!");
//         } else {
//             reject("u lose...");
//         }
//     }, 3000);
// })
//     .then(result => { console.log(result); })            // in caso di vittoria -> resolve(result)
//     .catch(error => { console.log(error); })             // in caso di sconfitta -> reject(error)
//     .finally(() => { console.log("end of the game"); }); // eseguita in ogni caso per dare un messaggio all'utente di aver concluso il gioco

// console.log("io vado avanti intato che aspetto il gioco...");




//* ---------------------------------------------------- PROMISES.ALL -------------------------------------------------------


/* Permette di eseguire più Promises in parallelo e di attendere che tutte siano risolte.

- Se tutte le Promises vengono risolte, restituisce un array con i risultati.
- Se una Promise fallisce, l'intera operazione fallisce. 

dentro il `Promise.all`, andremo ad inserire tutte le SINGOLE promises, come abbiamo sempre fatto */

Promise.all([
    // prima promise nell'array .all
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = 9;
            number > 10 ? resolve("u win first promise") : reject("u lose the first promise");
        }, 2000);
    }),

    // seconda promise nell'array .all
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let isMale = true;
            isMale ? resolve("u are male, and u win the second promise") : reject("u are female, and u lose the second promise");
        }, 4000);
    }),

    // terza promise nell'array .all
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let name = "Gabriele";
            name === "Gabriele" ? resolve("u win the last promise") : reject("u lost the last promise");
        }, 1000);
    })
])
    .then(results => { console.log(results); })  // "results" contiene un array con i risultati di tutte le Promises risolte
    .catch(error => { console.log(error); })   // "error" contiene il messaggio di errore della Promise fallita
    .finally(() => { console.log("u get a response from all the promises!"); });  // Questo viene sempre eseguito, per fare pulizia




//* ----------------------------------------- PROMISES GESTIONE DEGLI ERRORI -----------------------------------------------------