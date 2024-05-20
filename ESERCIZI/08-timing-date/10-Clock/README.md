## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

● Implement a javascript clock that prints the current time to the console 
  every second
● The output should be in the format HH:mm:ss e.g. 17:03:06





## Approach to solution

1. **Defining the Interval Function**:
   - Define a function named `formatTime` that will be executed every second.
   - Inside the function, create a new `Date` object to get the current date and time.
   - Extract the hours, minutes, and seconds from the `Date` object.

2. **Formatting the Time**:
   - Ensure that hours, minutes, and seconds are always displayed in a two-digit format. This can be achieved using the `padStart` method.

3. **Printing the Time to the Console**:
   - Use `console.log` to print the formatted time in the HH:mm:ss format.

4. **Setting the Interval**:
   - Use `setInterval` to call the `formatTime` function every 1000 milliseconds (1 second), creating a clock that updates every second.



## files

* index.html
* main.js