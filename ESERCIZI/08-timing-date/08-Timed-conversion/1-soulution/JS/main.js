/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-19
 * @description 
 * ● We will modify ‘Temperature conversion’ exercise from the lesson about 
     functions
   ● Call celsiusToFahrenheit on temperatures from 0 to 100 so that one 
     temperature is printed to the console every second

    ○ Use setInterval to achieve this goal.
    ○ Do the same thing using setTimeout.
 */



    
/**
* function celsiusToFahrenheit
* converts and prints the Celsius degrees converted in degrees Fahrenheit
* It will be performed 100 times with a 100 millisecond of delay 
* After the 100 execution, the interval will be arrested and blocked
* @param {number} celsiusTemperature - Temperature in Celsius degrees
*/
function celsiusToFahrenheit(celsiusTemperature) {
    let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
    console.log(`${celsiusTemperature} degrees celsius, are ${fahrenheitTemperature} degrees in fahrenheit`);

    // The interval is arrested when the degrees reach 100
    if (celsius === 100) {
        clearTimeout(timerId);
    }
}





let celsius = 0;

/* interval where inside there is an anonymous function that performs
the function "celsiusToFahrenheit", and increases the past value by +1 as a topic "celsius" */
let timerId = setInterval(() => {
    celsiusToFahrenheit(celsius);
    celsius++;
}, 100, celsius);