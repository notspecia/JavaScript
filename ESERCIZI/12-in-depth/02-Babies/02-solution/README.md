## Author Details

* Name: Gabriele Speciale
* Date: 2024-08-05
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create an empty array of babies
 
● Each baby should have the following properties:
 ○ "name" (a string) 
 ○ "months" (age in months as number) 
 ○ "noises" (an array of strings) 
 ○ "favoriteFoods" (an array of strings) 

● Add 4 different babies to the array using as many different ways as possible

● Iterate through the array printing key and value pairs, e.g., [name: "Lyla"]

● Now add an "outfit" property to each baby in the array
 ○ Outfit should describe at least 3 parts of their clothing using different properties, for
   example, "shirt": "blue"
 ○ Print each baby again with their outfit in a nicely formatted object




## Approach to solution

to implement the baby creation and management:

### 1. **array initialization**:
- an empty array `babies` is initialized to store baby objects
- different methods are used to add babies to the array:
- `.push()` is used to add two babies
- direct index notation `babies[index]` is used to add two more babies

### 2. **baby object structure**:
- each baby has the following properties:
- `name`: a string representing the baby's name
- `months`: the age of the baby in months (a number)
- `noises`: an array of strings representing the baby's sounds
- `favoriteFoods`: an array of strings containing the baby's favorite foods

### 3. **printing baby information**:
- a `for...of` loop is used to iterate over the array `babies`
- for each baby object, the `Object.entries()` method is used to convert the object into an array of key-value pairs
- each key-value pair is printed in the format `key: value` using a `for...of` loop

### 4. **adding the "outfit" property**:
- after printing the basic information of each baby, an "outfit" property is added to each baby object
- the outfit is an object containing 3 random clothing items and their colors
- arrays `outfits` (containing clothing items) and `colors` (containing colors) are used to randomly assign values to the "outfit" property using `Math.random()`

### 5. **re-printing baby information with outfits**:
- after adding outfits to each baby, the `Object.entries()` method is used again to print the babyinformation
- if the key is "outfits", the code enters a nested loop to print each part of the outfit (e.g.,`shirt: red`)
- the other baby properties are printed as usual in the format `key: value`







## files

* index.html
* main.js