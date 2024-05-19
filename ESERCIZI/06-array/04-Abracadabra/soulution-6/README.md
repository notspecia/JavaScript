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


### Solution Summary:
1. **Regular Expression Replacement**:
- The solution involves using the `replace()` method along with a regular expression to replace the first occurrence of the letter 'a' with 'X'.
- Regular expressions are powerful tools for pattern matching and manipulation in strings. In this case, the regular expression `/a/` matches the first occurrence of the letter 'a' in the string.

### Implementation Steps:
1. **Variable Declaration**:
- Declare a variable `parola` and assign the string "Abracadabra" to it.
- Declare an empty variable `parolaMod` to store the modified string.

2. **Regular Expression Replacement**:
- Use the `replace()` method on the `parola` string with the regular expression `/a/` and the replacement string 'X'.
- This replaces the first occurrence of the letter 'a' in the string with 'X' and assigns the modified string to the `parolaMod` variable.

3. **Output**:
- Print the modified string `parolaMod` to the console.






## files

* index.html
* main.js
