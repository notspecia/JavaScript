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
* It will be performed 100 times with a 100 millisecond of timeout,
* @param {number} celsiusTemperature - Temperature in Celsius degrees
*/
function celsiusToFahrenheit(celsius) {
    let fahrenheitTemperature = (celsius * 9 / 5) + 32;
    console.log(`${celsius} degrees celsius, are ${fahrenheitTemperature} degrees in fahrenheit`);
}


/* Let's go to cycle 100 times the setTimeOut 
where we pass as the topic the Celsius degrees to the function that converts them and in fahrenheit*/
for (let celsius = 0; celsius <= 100; celsius++) {
    setTimeout(celsiusToFahrenheit, celsius * 100, celsius);
}
