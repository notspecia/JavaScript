## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-01
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Create an object to hold information on your favorite recipe. It should have 
properties for title (a string), servings (a number), and ingredients (an 
array of strings).
   
● On separate lines (one console.log statement for each), log the recipe information

Bonus: Create an array that holds several recipes and log them all



## Approach to Solution

To create an object to hold information on a favorite recipe and log the recipe information, the following steps are taken:

1. **Recipe Object Creation**:
- An object named `recipe` is created with properties for the title (a string), servings (a number), and ingredients (an array of strings).

2. **Logging Recipe Information**:
- The recipe information is logged to the console using separate `console.log()` statements:
- The title of the recipe is logged using bracket notation: `recipe["title"]`.
- The servings for the recipe are logged using bracket notation: `recipe["servings"]`.
- The ingredients of the recipe are logged using a loop to iterate through the array: `recipe["ingredients"][i]`.

3. **Bonus Part - Multiple Recipes**:
- An array named `recipes` is created to hold several recipe objects.
- Each recipe object contains properties for title, servings, and ingredients.
- Using a nested loop, the information for each recipe is logged to the console, including the title, servings, and ingredients.
- Dot notation (`recipes[i].title`, `recipes[i].servings`, `recipes[i].ingredients[j]`) is used to access the properties of each 
  recipe object.

This approach effectively creates and logs information for a favorite recipe object, as well as multiple recipe objects stored in an array.





## files

* index.html
* main.js

