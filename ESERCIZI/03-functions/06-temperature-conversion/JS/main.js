/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 *  Create a function called celsiusToFahrenheit:
    ● Store a celsius temperature into a variable.
    ● Convert it to fahrenheit and output "NN°C is NN°F".
    Create a function called fahrenheitToCelsius:
    ● Now store a fahrenheit temperature into a variable.
    ● Convert it to celsius and output "NN°F is NN°C."
 */


/**
 * funzione celsiusToFahrenheit
 * converte e stampa i gradi celsius in gradi fahrenheit
 * @param {number} celsiusTemperature - temperatura in gradi celsius
 */
function celsiusToFahrenheit(celsiusTemperature) {
    let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
    console.log("CIAO!,", celsiusTemperature, "gradi celsius, sono", fahrenheitTemperature, "gradi fahrenheit")
}

/**
 * funzione celsiusToFahrenheit
 * converte e stampa i gradi fahrenheit in gradi celsius 
 * @param {number} fahrenheitTemperature - temperatura in gradi fahrenheit
 */
function fahrenheitToCelsius(fahrenheitTemperature) {
    let celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
    console.log("CIAO!,", fahrenheitTemperature, "gradi fahrenheit, sono", celsiusTemperature, "gradi celsius")
}


// richiamo della 1 funzione, passando argomento gradi celsius
celsiusToFahrenheit(15);

// richiamo della 2 funzione, passando argomento gradi fahrenheit
fahrenheitToCelsius(95);