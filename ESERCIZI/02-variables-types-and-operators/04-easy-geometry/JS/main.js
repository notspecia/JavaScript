/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-20
 * @description 
 * ● Store the following into variables: number of children, partner's name, geographic location, job title.
   ● Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
 */


// dichiarazione variabili
let raggio;         // raggio del cerchio
let circonferenza;  // circonferenza del cerchio
let area;           // area del cerchio


// inizializzazione variabili e calcolo della circonferenza e dell'area
raggio = 15;
circonferenza = 2 * raggio * Math.PI;
area = Math.PI * raggio * raggio;

// stampa su console della circonferenza e dell'area
console.log("la circonferenza del cerchio è:", circonferenza, ", l'area del cerchio è:", area);
