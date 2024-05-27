## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create an array that holds a list of 30 items (food, books, etc.)
● Print one item of the list every second until the list is completely printed
 ○ Use setInterval to achieve this goal
 ○ Do the same thing using setTimeout


## Approach to Solution

To print items from an array at one-second intervals using JavaScript, the following steps are taken:

1. **Array Initialization**:
- An array named `items` is created and populated with 30 elements, consisting of various food items and book titles.

2. **Iteration with `setTimeout`**:
- A `for` loop is used to iterate over each item in the `items` array.
- Within the loop, the `setTimeout` function is called to schedule the printing of each item.

3. **Delayed Printing**:
- The `setTimeout` function is provided with a delay that increases incrementally based on the current index of the loop (`i`).
- Each item is scheduled to be printed after a delay of `(i + 1) * 1000` milliseconds, ensuring that items are printed one second apart.



## files

* index.html
* main.js

