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

1. **Variable Declaration**: The original string "Abracadabra" is assigned to the variable `parola`.

2. **String Modification**:
- The `.slice()` method is employed to modify the string.
- The substring from the beginning to the character before the 4th letter is extracted using `.slice(0, 3)`.
- The character "X" is inserted at the position of the 4th letter.
- The substring from the character after the 4th letter to the end of the string is extracted using `.slice(4)`.
- These substrings are concatenated together to form the modified string `parolaMod`.

3. **Output**: The modified string `parolaMod` is then logged to the console.






## files

* index.html
* main.js
