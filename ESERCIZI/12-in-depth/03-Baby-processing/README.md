## Author Details

* Name: Gabriele Speciale
* Date: 2024-08-07
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Using the babies array from the previous exercise:
 
● Write a getBabyOutfit() function that returns a description of a baby's outfit
    ○ e.g "Lyla is wearing a blue shirt and red pants and a green hat"

● Write a feedBaby() function that prints what a baby is eating.
    ○ e.g. "Lyla is eating food3, food1, food4, and food2"
    ○ All foods in favoriteFoods should appear but randomly each time the function is called

● Run both functions on all the babies




## Approach to solution

to implement the `getBabyOutfit()` and `feedBaby()` functions:

### 1. **baby array initialization**:
- an array `babies` is initialized with 4 baby objects, each containing:
- `name`: baby's name
- `months`: baby's age in months
- `noises`: array of sounds the baby makes
- `favoriteFoods`: array of favorite foods
- `outfits`: an object containing 3 pieces of clothing and their colors

### 2. **getBabyOutfit function**:
- this function receives a baby object as a parameter
- it builds a string describing the baby's outfit by iterating through the `outfits` object using`Object.entries()`
- the string concatenates each piece of clothing with its color, separated by "and"
- the final "and" is replaced by a period using a regex pattern

### 3. **feedBaby function**:
- this function receives a baby object as a parameter
- it randomly shuffles the baby’s `favoriteFoods` array:
- a `do...while` loop ensures that all foods from `favoriteFoods` are included once in a random order
- a random index is used to pick a food, which is added to the `favoriteFoodsRandom` array if it isn’t already present
- the foods are then concatenated into a string using the `join()` method

### 4. **calling both functions**:
- a `for...of` loop iterates over the `babies` array
- for each baby, both `getBabyOutfit(baby)` and `feedBaby(baby)` are called, printing the baby's outfit and a shuffled list of foods







## files

* index.html
* main.js