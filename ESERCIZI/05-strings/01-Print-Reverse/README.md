## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-11
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description
● Create a function called mixUp

● It should take in two strings, and return the concatenation of the two 
  strings (separated by a space) slicing out and swapping the first characters of each

 ● You can assume that the strings are at least 2 characters long
 
    For example
    mixUp('mix', 'pod'): 'pox mid'
    mixUp('dog', 'dinner'): 'dig donner'





## Approach to Solution

To implement the `printReverse` function:

1. **Variable Declaration**: We declare a variable `parolaInvertita` to store the reversed word.

2. **Reverse the String**:
- We use a `for` loop to iterate through the characters of the input string `parola` starting from the last character (index 
  `parola.length - 1`) and moving backwards (`i--`).

- Within the loop, we concatenate each character of `parola` to the `parolaInvertita` variable, effectively reversing the order 
  of characters.

3. **Print the Reversed Word**: After the loop, we print the `parolaInvertita` variable, which now contains the reversed word.

This approach ensures that the function correctly reverses the input string by iterating through its characters from the end to the beginning and concatenating them to build the reversed string, which is then printed to the console.




## files

* index.html
* main.js

