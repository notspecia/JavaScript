/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * ● Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
 * It should also log a string like "The result of squaring the number 3 is 9."
   ● Write a function called halfNumber that will take one argument (a number), 
   divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5."
 */



/**
 * funzione squareNumber
 * calcola e restituisce il numero passato come argomento al quadrato (^2)
 * @param {number} num - numero
 * @returns {number} - numero calcolato al quadrato
 */
function squareNumber(num) {
    let numQuadrato = num * num;
    return numQuadrato;
}

/**
 * funzione halfNumber
 * calcola e restituisce il numero passato come argomento diviso a metà (/2)
 * @param {number} num - numero
 * @returns {number} - numero diviso a metà
 */
function halfNumber(num) {
    let numDiviso = num / 2;
    return numDiviso;
}

/**
 * funzione percentOf
 * calcola e restituisce la percentuale di quanto num1 è contenuto in num2
 * @param {number} num - primo numero
 * @param {number} num2 - primo numero
 * @returns {number} - percentuale di quanto n1 è contenuto in n2
 */
function percentOf(num, num2) {
    let percentNumeri = (num / num2) * 100;
    return percentNumeri;
}

/**
 * funzione areaOfCircle
 * calcola e restituisce l'area del cerchio calcolata con il raggio
 * @param {number} raggio - raggio del cerchio
 * @returns {number} - l'area del cerchio calcolata con il raggio
 */
function areaOfCircle(raggio) {
    let areaCerch = Math.PI * raggio * raggio;
    return areaCerch;
}



// variabili usate per le funzioni
let numero = 5;
let numero2 = 8;
let raggio = 15;

// richiamo funzione squareNumber, stampa del numero alla ^2
let numeroQuadrato = squareNumber(numero);
console.log("il numero", numero, ", al quadrato fa:", numeroQuadrato);

// richiamo funzione halfNumber, stampa del numero /2
let numeroDiviso = halfNumber(numero);
console.log("il numero", numero, ", dividendolo per 2 fa:", numeroDiviso)

// richiamo funzione percentOf, stampa della % di quanto numero è contenuto in numero2
let percentualiNumeri = percentOf(numero, numero2);
console.log("il", numero, "è il", percentualiNumeri.toFixed(2) + "%", "di", numero2);

// richiamo funzione areaOfCircle, stampa dell'area del cerchio calcolata con il raggio
let areaCerchio = areaOfCircle(raggio);
console.log("l'area del cerchio con raggio", raggio, "è", areaCerchio.toFixed(2));

//
//BONUS: .tofixed --> per mettere tot cifre dopo la virgola di un numero (2 cifre)
//