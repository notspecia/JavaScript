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
- Variables `parolaMod` and `parolaArray` are declared for further processing.

2. **Array Transformation**:
- The original string `parola` is split into an array of characters using the `.split("")` method, resulting in `parolaArray`.

3. **Letter Replacement**:
- The 4th element (index 3) of the `parolaArray` is changed to "X" to replace the 4th letter in the word.

4. **Array to String Conversion**:
- The modified array `parolaArray` is joined back into a string using the `.join("")` method, resulting in `parolaNew`.

5. **Output**: 
- The original word and the modified word (both as arrays and strings) are printed to the console for comparison.






## files

* index.html
* main.js
