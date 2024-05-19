## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-11
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

● Create a function called mixUp

● It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the 
  first 2 characters of each

● You can assume that the strings are at least 2 characters long

    For example
    mixUp('mix', 'pod'): 'pox mid'
    mixUp('dog', 'dinner'): 'dig donner'





## Approach to Solution

To implement the `mixUp` function:

1. **Variable Declaration**: We declare variables `strMod` and `str2Mod` to hold the modified versions of the input strings.

2. **Modify Strings**: If both input strings are at least 2 characters long, we modify them as follows:
- For `strMod`, we take the first character of `str` and concatenate it with the second character of `str2`, followed by the rest of 
  `str`.

- For `str2Mod`, we take the first character of `str2` and concatenate it with the second character of `str`, followed by the rest 
  of `str2`.
   
3. **Concatenate Strings**: We concatenate `strMod` and `str2Mod` with a space in between to form the final concatenated string.

4. **Return Result**: We return the concatenated string, which represents the mix-up of the input strings.

This approach ensures that the function correctly mixes up the two input strings by swapping their first two characters and concatenating them with a space in between. If either input string has less than 2 characters, the function simply concatenates them without modification.




## files

* index.html
* main.js
