## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-11
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Write a JavaScript function called printReverse which has one parameter, a string, and which 
  prints that string in reverse

● For example, the call printReverse("foobar") should result in "raboof" being displayed




## Approach to Solution

To implement the `reverse` function:

1. **Variable Declaration**: We declare a variable `parolaInvertita` to store the reversed word.

2. **Reverse the String**:
- We use a `for` loop to iterate through the characters of the input string `parola` starting from the last character (index 
  `parola.length - 1`) and moving backwards (`i--`).

- Within the loop, we concatenate each character of `parola` to the `parolaInvertita` variable, effectively reversing the order of 
  characters.

3. **Return the Reversed Word**: After the loop, we return the `parolaInvertita` variable, which now contains the reversed word.

This approach ensures that the function correctly reverses the input string by iterating through its characters from the end to the beginning and concatenating them to build the reversed string, which is then returned.




## files

* index.html
* main.js
