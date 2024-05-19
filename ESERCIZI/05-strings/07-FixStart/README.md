## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-11
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description
● Create a function called fixStart

● It should take a single argument, a string, and return a version where all occurrences of its 
     first character have been replaced with '*', except for the first character itself 

● You can assume that the string is at least one character long

     For example
     fixStart('babble'): 'ba**le





## Approach to Solution

To implement the `fixStart` function:

1. **Variable Declaration**: We declare variables `strMod` to hold the modified version of the input string and `first` to store the first character of the input string.

2. **Modify String**: We initialize `strMod` with the original string and `first` with its first character. Then, we iterate through the string starting from the second character. For each character, if it matches the first character of the string, we replace it with '*'.

3. **Return Result**: We return the modified string `strMod`, where all occurrences of the first character (except the first one itself) have been replaced with '*'.

This approach ensures that the function correctly modifies the input string according to the specified requirements, replacing all occurrences of its first character (except the first one) with '*'.






## files

* index.html
* main.js
