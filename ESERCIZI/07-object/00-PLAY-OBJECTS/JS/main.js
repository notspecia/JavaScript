let prices = {
    "first": 4,
    "second": 56,
    "terzo": 9,
    "quarto": 0,
    "quinto": 12,
    "sesto": 12,
    "settimo": 66,
    "ottavo": 7
}

//! NON FUNZIONERA PERCHE PRICES è UN OGGGETTO E NON VA IL FOR EACH!! (O QUALSISI MODO DI ITERAZIONE!)
// prices.forEach(price => {
//     console.log(price);
// });




// ? FUNZIONERA, ANDIAMO A CREARE UNA VARIABILE CHE CONTIENE UN ARRAY DI STRINGHE CON I NOMI DELLE CHIAVI DELL'OGGETTO
// ? TRAMITE BRACKET NOTATION, POSSIAMO CONSOLE LOGGARE TUTTI I PREZZI SENZA SAPERE COME SI CHIAMINO LE CHIAVI DELL'OGGETTO!!

// 1 modo per iterare le chiavi dell'oggetto FOR
let pricesTransformed = Object.keys(prices);
console.log(pricesTransformed);

for (let i = 0; i < pricesTransformed.length; i++) {
   console.log(prices[pricesTransformed[i]]); // prices --> OGGETTO   pricesTransformed --> ARRAY CON CHIAVI     i --> INDICE DELL'ARRAY CON LE CHIAVI (pricesTransformed)
}

console.log("\n\n");

// 2 modo per iterare le chiavi degli oggetto FOREACH()
Object.keys(prices).forEach(price => {
    console.log(prices[price]);
})