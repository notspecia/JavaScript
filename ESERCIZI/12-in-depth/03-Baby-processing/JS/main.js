/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-08-07
 * @description 
 * Using the babies array from the previous exercise:
 * 
  ● Write a getBabyOutfit() function that returns a description of a baby's outfit
    ○ e.g "Lyla is wearing a blue shirt and red pants and a green hat"

  ● Write a feedBaby() function that prints what a baby is eating.
    ○ e.g. "Lyla is eating food3, food1, food4, and food2"
    ○ All foods in favoriteFoods should appear but randomly each time the function is called

  ● Run both functions on all the babies
 */

// creation of the array which contains the babies (like the previous exercise)
const babies = [
    {
        name: "Justin",
        months: 35,
        noises: ["cry", "laugh"],
        favoriteFoods: ["fried chips", "hamburger", "sausage"],
        outfits: {
            cap: "yellow",
            gloves: "red",
            socks: "black"
        }
    },
    {
        name: "Micheal",
        months: 61,
        noises: ["sneeze", "boom"],
        favoriteFoods: ["fish and chips", "tomatoes", "hamburger"],
        outfits: {
            jeans: "blue",
            socks: "white",
            shoes: "aqua"
        }
    }, {
        name: "Kevin",
        months: 12,
        noises: ["cry", "snore"],
        favoriteFoods: ["homogenized", "milk", "honey"],
        outfits: {
            jacket: "gray",
            socks: "yellow",
            cap: "yellow"
        }
    }, {
        name: "Lucas",
        months: 89,
        noises: ["scream", "laugh"],
        favoriteFoods: ["carbonara", "pasta"],
        outfits: {
            shoes: "gray",
            pants: "green",
            gloves: "black"
        }
    }
];



/**
 * function getBabyOutfit
 * function that receives an object containing the baby's information as a parameter
 * specifically, the function will create a sentence (string) composed of all the baby's outfits
 * 
 * @param {object} baby - object that contains the information of the baby
 */
function getBabyOutfit(baby) {

    // the sentence will be composed of the baby's outfit (using key-value pairs!)
    let str = `${baby.name} is wearing `;

    // compose the string
    for (let [outfit, color] of Object.entries(baby.outfits)) {
        str += `${outfit} ${color} and `;
    }

    // use regex to remove the last "and" and replace it with a "." ($ = last)
    str = str.replace(/ and $/, ".");
    console.log(str);
}





/**
 * function feedBaby
 * function that receives an object containing the baby's information as a parameter
 * specifically, the function will create a sentence (string) in which:
 * 
 * 01. the baby's favorite foods will be taken from the array contained in the baby object `favoriteFoods`
 * 02. before composing the sentence, the elements of that array will be randomly shuffled
 * 
 * @param {object} baby - object that contains the information of the baby
 */
function feedBaby(baby) {

    // random shuffle of the array containing the baby's favorite foods
    let favoriteFoodsRandom = [];

    do {

        // random number to be used as an index to select a food from the baby's favoriteFoods array
        let randomIndex = Math.round(Math.random() * ((baby.favoriteFoods.length - 1) - 0) + 0);

        /* if the food selected from the baby's original favoriteFoods array 
        is already present in the random array, it will not be added again .includes("thatFood") */
        if (!favoriteFoodsRandom.includes(baby.favoriteFoods[randomIndex])) {
            favoriteFoodsRandom.push(baby.favoriteFoods[randomIndex]);
        }

    } while (baby.favoriteFoods.length !== favoriteFoodsRandom.length);

    // the sentence will be composed of the foods eaten by the baby (using .join() method!)
    let str = `${baby.name} is eating `;
    str += `${favoriteFoodsRandom.join(", ")}.`
    console.log(str);
}



// perform the same actions for each baby (OBJECT) in the babies (ARRAY)
for (let baby of babies) {

    // debug print of the baby
    console.log(baby);

    // functions 
    getBabyOutfit(baby);
    feedBaby(baby);

    // add space in the console
    console.log("\n\n\n");
}