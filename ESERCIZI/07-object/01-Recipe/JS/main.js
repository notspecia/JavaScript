/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-01
 * @description 
 * Create an object to hold information on your favorite recipe. It should have 
   properties for title (a string), servings (a number), and ingredients (an 
   array of strings).
   
   ● On separate lines (one console.log statement for each), log the recipe information

   Bonus: Create an array that holds several recipes and log them all
 */



// object containing my recipe
const recipe = {
    title: "pasta carbonara",
    servings: 2,
    ingredients: ["eggs", "jowls", "pasta", "cheese"]
};


/* !!! USED BRACKET NOTATION !!!
Let's print the name of the recipe on console*/
console.log("the name of this recipe is:", recipe["title"]);

// Let's print on console for how many people you can do this recipe
console.log("for", recipe["servings"], "peoples");

// Let's print whit a cycle for the ingredients to be used on console
console.log("ingredients:");

for (let i = 0; i < recipe["ingredients"].length; i++) {
    console.log("the", i + 1, "ingredient is:", recipe["ingredients"][i]);
}



// BONUS PART --> array which contains various recipes (objects)
let recipes = [
    {
        title: "pasta pomodoro",
        servings: 4,
        ingredients: ["tomatoes", "pasta",]
    }, {
        title: "pasta pesto",
        servings: 3,
        ingredients: ["cheese", "basil", "pine nuts",]
    }, {
        title: "pasta amatriciana",
        servings: 6,
        ingredients: ["tomatoes", "jowls", "pasta", "cheese"]
    }];


/* !!! USED DOT NOTATION !!!
Let's print through a cycle all the recipes (objects) that are contained in array*/
console.log("\n\n****!!BONUS PART!!****\n");

for (i = 0; i < recipes.length; i++) {

    // Let's print the name of the recipe on console
    console.log("\n\nthe name of this recipe is:", recipes[i].title);

    // Let's print on console for how many people you can do this recipe
    console.log("for", recipes[i].servings, "peoples");

    /* Let's print With a cycle nestled the ingredients of the various array positions
     for the ingredients to be used on console*/
    console.log("ingredients:");

    for (let j = 0; j < recipes[i].ingredients.length; j++) {
        console.log("the", j + 1, "ingredient is:", recipes[i].ingredients[j]);
    }
}
