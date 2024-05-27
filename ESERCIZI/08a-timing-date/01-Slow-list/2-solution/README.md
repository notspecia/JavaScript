## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it






## Description

● Create an array that holds a list of 30 items (food, books, etc.)
● Print one item of the list every second until the list is completely printed
 ○ Use setInterval to achieve this goal
 ○ Do the same thing using setTimeout






## Approach to solution

To print one item of an array every second until the entire array is printed, two approaches are used: one utilizing `setInterval` and the other using `setTimeout`.

1. **Using setInterval**:
- Define a function named `printItems` that takes the array `items` as its argument.
- Inside the function, print the value of the array at index `i` to the console.
- Increment the index `i` by 1 after each iteration.
- If the index `i` is equal to the length of the array `items`, clear the interval using `clearInterval`.
- Call `setInterval` to repeatedly execute the `printItems` function every second, passing the array `items` as an argument.

2. **Using setTimeout**:
- Define a function named `printItems` similarly to the `setInterval` approach.
- Inside the function, print the value of the array at index `i` to the console.
- Increment the index `i` by 1 after each iteration.
- If the index `i` is less than the length of the array `items`, call `setTimeout` to schedule the next execution of `printItems` after 1 second.
- This creates a chain of `setTimeout` calls, each scheduled after 1 second, until all items in the array are printed.






## files

* index.html
* main.js