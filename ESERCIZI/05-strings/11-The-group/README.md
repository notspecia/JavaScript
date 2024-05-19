## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-14
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Use the previous function to write another function called group that checks whether a string is
  part of another longer string that is a list of names of a group
  The function should output the results to the console

  let group = "Mary, James, and John";

  let oldGuy = "James";
  // Outputs: "James IS part of the group"

 let newGuy = "Philip";
 // Outputs: "Philip is NOT part of the group"





## Approach to Solution

To implement the `group` function:

1. **Modify Input**: We modify the input string `str2` (person's name) to ensure consistency by capitalizing the first character.

2. **Check if the Person is Part of the Group**:
- We use the `indexOf()` method to check if the modified `str2` exists within the `str` (list of group members).
- If `str2` is found in `str`, we output a message indicating that the person is part of the group.
- If `str2` is not found in `str`, we output a message indicating that the person is not part of the group.

3. **Output Results to Console**: We use `console.log()` to print the result message to the console.


This approach ensures that the function correctly determines whether a given person's name is part of a group by checking its presence within the list of group members and outputs the result to the console.




## files

* index.html
* main.js
