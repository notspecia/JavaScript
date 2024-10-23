// importazione di una funzione usando DEFAULT
import addition from "./mathOperations.js";

let sommaOne = addition(10, 3);
console.log(sommaOne);





console.log("\n-----------------------------------\n\n");





// importazioni di molteplici variabili e funzioni
import { PI, calcCircumfrence, calcArea, calcVolume } from "./mathOperations.js";

console.log(PI);

let circumfrence = calcCircumfrence(20);
console.log(circumfrence);

let area = calcArea(20);
console.log(area);





console.log("\n-----------------------------------\n\n");





// 