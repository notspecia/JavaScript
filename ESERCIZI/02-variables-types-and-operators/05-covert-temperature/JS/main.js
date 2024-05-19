/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-20
 * @description 
 * ● Store a celsius temperature into a variable.
   ● Convert it to fahrenheit and output "NN°C is NN°F".
   ● Now store a fahrenheit temperature into a variable.
   ● Convert it to celsius and output "NN°F is NN°C."
 */

// dichiarazione e inizializzazione variabili
let celsiusTemperature = 20;
let fahrenheitTemperature = 85;
let celsiusToFahrenheit;
let fahrenheitToCelsius;

// conversione dei gradi celsius in gradi fahrenheit e la loro stampa
celsiusToFahrenheit = (celsiusTemperature * 9 / 5) + 32;
console.log("CIAO!,", celsiusTemperature, "gradi celsius, sono", celsiusToFahrenheit, "gradi fahrenheit")

// conversione dei gradi fahrenheit in gradi celsius e la loro stampa
fahrenheitToCelsius = (fahrenheitTemperature - 32) * 5 / 9;
console.log("CIAO!,", fahrenheitTemperature, "gradi fahrenheit, sono", fahrenheitToCelsius.toFixed(2), "gradi celsius")