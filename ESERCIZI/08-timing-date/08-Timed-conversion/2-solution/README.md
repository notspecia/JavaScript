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


2. **Using setTimeout**:
- Define a function named `celsiusToFahrenheit` similarly to the `setInterval` approach.
- Use a variable `celsius` to track the current Celsius temperature.
- Use `setInterval` to repeatedly execute an anonymous function every 100 milliseconds.
- Inside the anonymous function, call `celsiusToFahrenheit` with the current `celsius` temperature and increment `celsius`.
- When `celsius` reaches 100, the interval is stopped using `clearInterval`.





## files

* index.html
* main.js

