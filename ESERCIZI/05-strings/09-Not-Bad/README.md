## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-14
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create a function called notBad that takes a single argument, a string

● It should find the first appearance of the substring 'not' and 'bad'

● If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
  'good' and return the result

● If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
  sentence

 For example:
 notBad('This dinner is not that bad!'): 'This dinner is good!'
 notBad('This movie is not so bad!'): 'This movie is good!'
 notBad('This dinner is bad!'): 'This dinner is bad!'



## Approach to Solution

To implement the `notBad` function:

1. **Variable Declaration**: We declare variables `findNot` and `findBad` to store the positions of the substrings 'not' and 'bad' in the input string, respectively.

2. **Find 'not' and 'bad'**:
- We use the `indexOf` method to find the positions of 'not' and 'bad' in the string.
   
3. **Check for Valid Sequence**:
- If both 'not' and 'bad' are found, and 'not' comes before 'bad' in the string, we replace the substring from 'not' to 'bad' (inclusive) with 'good'.
   
4. **Return Modified or Original String**:
- If the valid sequence is found, we return the modified string with 'not'...'bad' replaced with 'good'.
- If the valid sequence is not found, or if 'not' comes after 'bad', we return the original string unchanged.

This approach ensures that the function correctly modifies the input string according to the specified requirements, replacing 'not'...'bad' with 'good' if they appear in the correct sequence, and returning the original string otherwise.






## files

* index.html
* main.js
