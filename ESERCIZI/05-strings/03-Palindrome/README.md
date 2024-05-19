## Author Details

* Name: Gabriele Speciale
* Date: 
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Using your reverse() function from the previous exercise, write a simple function to check if a 
  string is a palindrome

● A palindrome is a word that reads the same backwards as forwards. For example, the word "madam" 
  is a palindrome

● Write a JavaScript function called isPalindrome which has one parameter, a string, and which 
  returns true if that string is a palindrome, else false

● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame") 
  should return false


## Approach to Solution

To implement the `isPalindrome` function:

1. **Reverse the String**: First, we reverse the original string using the `reverse` function, which takes a string as input and returns its inverted version.

2. **Check for Palindrome**: After obtaining the reversed string, we compare it with the original string. If they are identical, it indicates that the original string reads the same backward as forward, making it a palindrome. In such cases, we return `true`. If the strings are different, the original string is not a palindrome, and we return `false`.

This approach offers a straightforward method to determine whether a given string is a palindrome by reversing it and comparing it with the original string.




## files

* index.html
* main.js
