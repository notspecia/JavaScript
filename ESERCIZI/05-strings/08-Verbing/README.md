## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-14
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create a function called verbing
 
● It should take a single argument, a string. If its length is at least 3, it should add 'ing' to 
  its end, unless it already ends in 'ing', in which case it should add 'ly' instead

● If the string length is less than 3, it should leave it unchanged

  For example:
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go' 
 */




## Approach to Solution

To implement the `verbing` function:

1. **Variable Declaration**: We declare a variable `finale` to store the last character of the input string.

2. **Check Length and Endings**:
- If the length of the string is less than 3, return the original string.
- If the string already ends with 'ing', append 'ly' to it and return.
   
3. **Check for Vowel or Consonant Ending**:
- If the string doesn't end with 'ing' and its length is at least 3 characters:
- If the last character is a vowel (a, e, i, o, u, y), simply append 'ing' to the string.
- If the last character is a consonant, check if it's already doubled at the end of the string. If not, double it before 
  appending 'ing'.

This approach ensures that the function correctly modifies the input string according to the specified requirements, adding 'ing' or 'ly' based on the length and ending of the string, and doubling consonants when necessary.





## files

* index.html
* main.js
