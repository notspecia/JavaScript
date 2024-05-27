## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-18
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

● Pretend that setInterval() doesn't exist
● Re-create it using setTimeout naming your function mySetInterval
● Test your new function
● Modify your function so that it automatically stops after 15 intervals





## Approach to Solution

To recreate the functionality of `setInterval` using `setTimeout` and automatically stop after 15 intervals, the following steps are taken:

1. **Defining the mySetInterval Function**:
- Define a function named `mySetInterval` that accepts an index (`i`) as its argument.
- The function logs a message to the console, indicating the current interval number.

2. **Simulating setInterval with setTimeout**:
- Use a `for` loop to iterate 15 times, simulating 15 intervals.
- Inside the loop, use `setTimeout` to schedule the execution of `mySetInterval` with a delay that increases by 2 seconds for each interval.
- Pass the current index (`i`) to `mySetInterval` to keep track of the interval count.

3. **Ensuring Automatic Stop After 15 Intervals**:
- The `for` loop ensures that `setTimeout` is called 15 times, with each call having an increasing delay, effectively stopping the simulation after 15 intervals.






## files

* index.html
* main.js
