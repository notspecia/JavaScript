## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-20
* Concat: gabriele.speciale@edu.itspiemonte.it





## Description

● Code 3 different solutions to change the 4th letter in the following string
  "Abracadabra" into an "X"

● Each solution should be in a separate folder.
  ○ Name them solution-1, solution-2, etc.

● Also include a doc file in which you explain what 3 ways you used
   
● Bonus: There are many ways to replace a character in a string. Code other
  solutions than the above 3






## Approach to Solution

To change the 4th letter in the string "Abracadabra" into an "X", the following approach is used:

1. **Variable Declaration**: 
- The original string "Abracadabra" is assigned to the variable `parola`.
- Variables `parolaArray` and `parolaNew` are declared for further processing.

2. **Original Word Printing**: 
- The original word `parola` is printed to the console for comparison.

3. **Array Transformation**: 
- The original string `parola` is split into an array of characters using the `.split("")` method, resulting in `parolaArray`.
- The array `parolaArray` is printed to the console.

4. **Letter Replacement**: 
- The 4th element of the `parolaArray` (index 3) is replaced with "X" using the `.splice()` method.
- The modified array `parolaArray` is printed to the console.

5. **Array to String Conversion**: 
- The modified array `parolaArray` is joined back into a string using the `.join("")` method, resulting in `parolaNew`.
- The modified word `parolaNew` is printed to the console.





## files

* index.html
* main.js
