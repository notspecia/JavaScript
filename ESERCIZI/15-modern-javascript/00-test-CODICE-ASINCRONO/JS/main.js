
//* ------------------------------------------------ CODICE SINCRONO -----------------------------------------------------------


/* 01. test di un codice sincrono:
+ sarà lungo il pezzo di codice, + tempo ci sarà da aspettare (anche se non ce ne accorgiamo dato che parliamo di millisecondi)
ma il percorso che farà il PROCESSO SINCRONO, le cose succedono nell'ordine in cui sono state definite
*/

// let pizza;

// function orderPizza() {
//     console.log("order a pizza!");
//     pizza = "🍕";
//     console.log("pizza was order!");
// }

// orderPizza();
// console.log(`eat a ${pizza}`); //"🍕"


//* ------------------------------------------------ CODICE ASINCRONO -----------------------------------------------------------


/* 02.1 test di un codice asincrono:

Il codice asincrono consente di eseguire operazioni senza bloccare il flusso principale del programma. 
Questo è particolarmente utile in attività che richiedono tempo, come:

- Lettura/scrittura di file.
- Chiamate a database.  
- Richieste HTTP.
- Operazioni basate su timer.

mettiamo come esempio che per ordinare una pizza deve passare del tempo prima di mangiarla, ma nella funzione
non setterà mai il VALUE di `pizza`, perchè nel frattempo verrà eseguito il console.log() sottostante
(e pizza non avrà mai il valore desiderato!) sarà undefind! 
QUESTO PERCHE IL SETTIMEOUT è UNA FUNZIONE ASINCRONA! -> non è sincronizzato con il resto del codice, non rimane al suo passo!
 */

// let pizza;

// function orderPizza() {
//     console.log("order a pizza!");

//     // NON VERRA MAI ESEGUITO!
//     setTimeout(() => {
//         pizza = "🍕";
//     }, 2000);

//     console.log("pizza was order!");
// }

// orderPizza();
// console.log(`eat a ${pizza}`); // undefind


//? -------------------------------------------------------------------------


/* 02.2 test di un codice asincrono:
andiamo a fixare il problema del codice asincrono, facciamo l'esempio che nel frattempo che arriva la pizza ordinata
la persona posssa fare anche altri azioni come -> chiamare un amico che è sarà codice sincrono
tutte le operazioni SINCRONE procedereanno per la loro strada staccando da essa le operazioni ASINCRONE che verrano eseguite dopo tot secondi
!OPERAZIONE ORRIBILE PERCHE ANDIAMO A FARE 2 COSE SEPARATE (ordinare + mangiare) IN UNA SINGOLA FUNZIONE
*/

// let pizza;

// function orderPizza() {
//     console.log("order a pizza!");

//     // VERRA ESEGUITO DOPO TUTTO IL CODICE SINCRONO
//     setTimeout(() => {
//         pizza = "🍕";
//         console.log(`eat a ${pizza}`); //"🍕"
//     }, 2000);

//     console.log("pizza was order!");
// }

// orderPizza();
// console.log("i call valentinxd");


//* ------------------------------------------------ CALLBACK FUNCTIONS HELL -----------------------------------------------------------


/* 03.1 test di un codice con delle callback function():
Una callback è una funzione che viene passata come argomento a un'altra funzione e viene chiamata quando un'operazione è completata.

utili per permettere di creare del codice lineare con anche codice asincrono, le callbak ricordiamo che:
vengono anche utilizzate per gli `Eventlistener` che usano funzioni di callback (asincrone), dove vengono attivate 
quando viene fatta una determinata azione nella pagina!
tutto ciò è un metodo migliore rispetto a quello visto precendentemente, + non va a bloccare l'esecuzione del programma
mentre si sta aspettando una "risposta"
!CALLBACK HELL -> il problema è che se avessimo TANTE cose rispetto a una sola (come nell'esempio) diventa difficile da leggere e gestire
*/

// function orderPizza(callback) {
//     console.log("i order a pizza!");

//     // operazione asincrona che eseguerà la callback function passata
//     setTimeout(() => {
//         const pizza = "🍕";
//         callback(pizza) // callback -> eatPizza
//     }, 2000);
// }


// // funzione di callback che verrà eseguita del setTimeOut dopo x ms, e accetta un parametro
// function eatPizza(pizza) {
//     console.log(`i eat the ${pizza}`);
// }


// orderPizza(eatPizza); // eatPizza -> callback
// console.log("im calling valentinxd");


//? -------------------------------------------------------------------------


/* 03.2 test di un codice con delle callback function() HELL: 

Quando molte operazioni asincrone vengono annidate una dentro l'altra, il codice diventa difficile da leggere e mantenere: 
questo è noto come Callback Hell.

importante:
Non serve una callback in eatPizza se è la funzione finale nella sequenza. */

function callPizzeria(callback) {
    setTimeout(() => {
        console.log("im calling pizzeria...");
        callback();
    }, 2000);
}

function orderPizza(callback) {
    setTimeout(() => {
        console.log("i order a pizza...");
        const pizza = "🍕";
        callback(pizza);
    }, 5000);
}

// è inutile passare qua la callback function di un azione asincrona SUCCESSIVA (non esiste!!)
function eatPizza(pizza) {
    setTimeout(() => {
        console.log(`i eat the ${pizza}`);
    }, 3000);
}


// THE CALLBACK HELL :(
callPizzeria(() => {
    orderPizza((pizza) => { // `pizza` viene passato a `eatPizza`
        console.log("im calling valentin now xd");
        eatPizza(pizza); // `pizza` viene utilizzato qui
    });
});