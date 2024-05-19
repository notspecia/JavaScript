## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-11
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Write a JavaScript function called capital which has one parameter, a string, and which returns 
  that string with the first letter capitalized

● For example, the call capital("hello world") should return the string "Hello world"
  
  Bonus:
  Modify the function so that it capitalizes each word. capital2("my name is john") should return the 
  string "My Name Is John"



## Approach to Solution

To implement the `capital` function:

1. **Iterate Through the String**: We loop through each character of the input string.

2. **Check Capitalization Condition**: For each character, we check if it is the first character of the string or if the character before it is a space. If either condition is true, we transform the character to uppercase using the `toUpperCase` method and concatenate it to the `parolaCapital` variable. Otherwise, we keep the character as is and append it to the `parolaCapital`.

3. **Return Modified String**: After iterating through all characters, we return the modified string `parolaCapital`, which has the first letter of each word capitalized.

This approach efficiently capitalizes the first letter of each word in a string, meeting the requirements specified in the problem statement.



## files

* index.html
* main.js
