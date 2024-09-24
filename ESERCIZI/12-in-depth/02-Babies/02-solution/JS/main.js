/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-08-05
 * @description 
 * 
 * ● Create an empty array of babies
 * 
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
 */


// array that will contain the babies (initially empty)
const babies = [];


// 1. method using .push()
babies.push(
  {
    name: "Justin",
    months: 35,
    noises: ["cry", "laugh"],
    favoriteFoods: ["fried chips", "hamburger", "sausage"]
  },
  {
    name: "Micheal",
    months: 61,
    noises: ["sneeze", "boom"],
    favoriteFoods: ["fish and chips", "tomatoes"]
  }
);

// 2. using index notation inside the bracket [index]
babies[2] = {
  name: "Kevin",
  months: 12,
  noises: ["cry", "snore"],
  favoriteFoods: ["homogenized", "milk"]
};

babies[3] = {
  name: "Lucas",
  months: 89,
  noises: ["scream", "laugh"],
  favoriteFoods: ["carbonara", "pasta", "ice cream"]
};

// log on console the array which contains all the babies (are objects!)
console.log("BABIES INFORMATIONS-->", babies, "\n\n\n\n\n");


// ----------------------------------------------------------------

// PRINT key-value pairs of the babies, BABY IS AN OBJECT {}
for (let baby of babies) {

  // cycle nestled in which we go to get from each baby, KEY and VALUE
  for (let [key, value] of Object.entries(baby)) {
    console.log(`${key}: ${value}`);
  }

  // add space in the console
  console.log("\n\n\n");
}


// -------------------------------------------------


// array containing the parts of the OUTFIT(keys) and their COLORS(values)
const outfits = ["T-shirt", "Shirt", "Blouse", "Sweater", "Hoodie", "Tank top", "Crop top",
  "Polo shirt", "Jeans", "Trousers", "Shorts", "Skirt", "Dress", "Leggings", "Jacket", "Coat", "Blazer",
  "Cardigan", "Scarf", "Gloves", "Hat", "Cap",];

const colors = ["red", "blue", "green", "yellow", "purple"];



/* 01. add the outfit property (an object) to each baby
   02. print key-value pairs of the babies, BABY IS AN OBJECT {} */
for (let baby of babies) {

  // create an empty OBJECT that will contain the baby's OUTFIT
  baby.outfits = {};

  /* add max 3 outfits for each baby (randomly) using bracket notation.
     math.floor is used to create a random index to select from the arrays the outfit and the color */
  for (let i = 0; i < 3; i++) {
    baby.outfits[outfits[Math.floor(Math.random() * outfits.length)]] = colors[Math.floor(Math.random() * colors.length)];
  }

  
  
  // print each key-value pair of the baby (e.g., name: "Luke", months: 32...) in a formatted way
  for (let [key, value] of Object.entries(baby)) {

    // !case of printing the outfit of the baby
    if (key === "outfits") {
      console.log(`---- outfits of ${baby.name} ----`);

      /* cycle nestled in which we go to get from each baby, KEY and VALUE about the outfit
      EX: (key: "shirt" / value:"red") */
      for (let [outfit, color] of Object.entries(baby.outfits)) {
        console.log(`${outfit}: ${color}`);
      }

      // !other informations of the baby (name, months, favFood...)
    } else {
      console.log(`${key}: ${value}`);
    }

  }

  // add space in the console
  console.log("\n\n\n");
}