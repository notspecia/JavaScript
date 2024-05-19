## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-14
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create a function called aContainsb

● It should take in two strings, and return true if the first string contains the second, 
  otherwise it should return false

  For example:
  aContainsB ("Another hello world", "hello"); 





## Approach to Solution

To implement the `aContainsb` function:

1. **Variable Declaration**: We declare a variable `isContenuta` to store the boolean result of whether the first string contains the second.

2. **Check for Substring**:
- We use the `indexOf` method to check if the second string is contained within the first string.

- If the `indexOf` method returns a value other than -1, it means that the second string is found within the first string. In this 
  case, we set `isContenuta` to `true`, indicating that the first string contains the second.

- If the `indexOf` method returns -1, it means that the second string is not found within the first string. In this case, we set `isContenuta` to `false`.

3. **Return Result**: We return the value of `isContenuta`, which indicates whether the first string contains the second.

This approach ensures that the function correctly determines whether the first string contains the second string by checking for the presence of the second string within the first using the `indexOf` method, and returning `true` or `false` accordingly.




## files

* index.html
* main.js
