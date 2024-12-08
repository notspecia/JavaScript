//! importazione di una funzione usando DEFAULT
import addition from "./mathOperations.js";


let sommaOne = addition(10, 3);
console.log(sommaOne);

console.log(sommaOne + sommaOne);



console.log("\n-----------------------------------\n\n");



//! importazioni di molteplici variabili e funzioni, proviamo ad invocare le funzioni da qui facendoci restuituire 
import { PI as PiGreco, calcCircumfrence, calcArea, calcVolume } from "./mathOperations.js";


console.log(PiGreco);

let circumfrence = calcCircumfrence(20);
console.log(circumfrence.toFixed(2));

let area = calcArea(2);
console.log(area);

let volume = calcVolume(2);
console.log(volume.toFixed(2));
