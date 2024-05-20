## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● We will modify ‘Temperature conversion’ exercise from the lesson about 
  functions
● Call celsiusToFahrenheit on temperatures from 0 to 100 so that one 
  temperature is printed to the console every second
 ○ Use setInterval to achieve this goal.
 ○ Do the same thing using setTimeout.




## Approach to Solution

To modify the 'Temperature conversion' exercise to call the `celsiusToFahrenheit` function on temperatures from 0 to 100 so that one temperature is printed to the console every second, both `setInterval` and `setTimeout` approaches are utilized.

1. **Using setInterval**:
   - Define a function named `celsiusToFahrenheit` that converts Celsius temperatures to Fahrenheit and prints the result to the console.
   - Call `celsiusToFahrenheit` on temperatures ranging from 0 to 100 using a loop.
   - Inside the loop, use `setInterval` to repeatedly execute the `celsiusToFahrenheit` function every second, passing the current Celsius temperature as an argument.
   - Each temperature is printed to the console every second until the loop completes.
   - The interval is stopped when the Celsius temperature reaches 100 using `clearInterval`.

2. **Using setTimeout**:
   - Define a function named `celsiusToFahrenheit` similarly to the `setInterval` approach.
   - Use a variable `celsius` to track the current Celsius temperature.
   - Use `setInterval` to repeatedly execute an anonymous function every 100 milliseconds.
   - Inside the anonymous function, call `celsiusToFahrenheit` with the current `celsius` temperature and increment `celsius`.
   - When `celsius` reaches 100, the interval is stopped using `clearInterval`.





## files

* index.html
* main.js

