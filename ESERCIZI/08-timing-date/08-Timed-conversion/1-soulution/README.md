## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-18
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● We will modify ‘Temperature conversion’ exercise from the lesson about 
  functions
● Call celsiusToFahrenheit on temperatures from 0 to 100 so that one 
  temperature is printed to the console every second
 ○ Use setInterval to achieve this goal.
 ○ Do the same thing using setTimeout.

 




## Approach to solution

### Using `setInterval`

1. **Function Definition**:
- Define a function named `celsiusToFahrenheit` that converts Celsius temperatures to Fahrenheit and prints the result to the console.

2. **Interval Setup**:
- Initialize a variable `celsius` to 0.
- Use `setInterval` to repeatedly execute an anonymous function every second.
- Inside the anonymous function:
- Call `celsiusToFahrenheit` with the current `celsius` value.
- Increment the `celsius` value by 1.
- If `celsius` exceeds 100, stop the interval using `clearInterval`.




## files

* index.html
* main.js