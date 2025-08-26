/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * Write a function that will take one argument (a number) and perform the 
   following operations, using the functions you wrote earlier:
   ● Take half of the number and store the result
   ● Square the result of #1 and store that result
   ● Calculate the area of a circle with the result of #2 as the radius
   ● Calculate what percentage that area is of the squared result (#3)
 */



/**
 * funzione halfNumber
 * calcola, stampa e restituisce il numero passato come argomento diviso a metà (/2)
 * @param {number} num - numero
 * @returns {number} - numero diviso a metà
 */
function halfNumber(num) {
    let numDiviso = num / 2;
    console.log("il numero", num + ",", "dividendolo per 2 fa:", numDiviso)
    return numDiviso;
}


/**
 * funzione squareNumber
 * calcola, stampa e restituisce il numero che è stato diviso precedentemente alla ^2
 * @param {number} half - numero diviso 2 nella funzione precedente
 * @returns {number} - numero al quadrato (^2)
 */
function squareNumber(half) {
    let numQuadrato = half * half;
    console.log("il numero diviso prima:", half + ",", "al quadrato fa:", numQuadrato);
    return numQuadrato;
}


/**
 * funzione areaRadius
 * calcolo, stampa e restituzione dell'area di un cerchio predendendo come raggio il numero precedente alla ^2
 * @param {number} square - numero alla ^2 usato come raggio
 * @returns {number} - area del cerchio
 */
function areaRadius(square) {
    let areaCerch = Math.PI * square * square;
    console.log("l'area del cerchio con raggio", square, "è", areaCerch.toFixed(2));
    return areaCerch;
}


/**
 * funzione percentNumeri
 * calcoliamo, stampiamo e ritorniamo la percentuale di quanto è contenuta area nel numero alla ^2 
 * @param {number} area - area del cerchio
 * @param {number} square - numero alla ^2 
 * @returns {number} - % di contenimento
 */
function percentRatio(area, square) {
    let percentNumeri = (area / square) * 100;
    console.log("l'area di", area.toFixed(2), "è circa il", percentNumeri.toFixed(0) + "%", "del numero al ^2:", square);
    return percentNumeri;
}


/**
 * funzione operations
 * funzione "main" che contiene tutte le funzioni viste precedentemente 
 * @param {function} halfNumber - funzione che calcola il numero passato per argomento /2 e lo restituisce
 * @param {function} squareNumber - funzione che calcola il numero passato /2 al quadrato e lo restituisce
 * @param {function} areaRadius - funzione che calcola l'area di un cerchio utilizzando come raggio il numero alla ^2 e viene restituita
 * @param {function} percentRatio - funzione che calcola la percentuale di quanto è contenuta area nel numero alla ^2 e che viene restituita
 * @returns {TipoOutput} - DescrizioneOutput
 */
function operations(num) {
    const half = halfNumber(num);
    const square = squareNumber(half);
    const area = areaRadius(square);
    const percentage = percentRatio(area, square);
}


// richiamo della funzione operations, contenente + funzioni
operations(10);