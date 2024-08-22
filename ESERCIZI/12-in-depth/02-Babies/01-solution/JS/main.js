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



/**
 * function printBabyInfo
 * prints a key-value pair containing a child's information,
 * representing a property of the baby, e.g., ["name", "John"]
 * @param {array} babyInfo - array containing the key-value pair
 */
function printBabyInfo(babyInfo) {
  console.log(`${babyInfo.join(": ")}\n`);
}


/**
 * function elaborateBabyInfo
 * prints the information of a baby, including the case of the outfit if present
 * @param {array} babyKeyValues - array of key-value pairs containing the baby's information
 * @param {string} babyName - name of the baby (used principaly for the OUTFIT case)
 */
function elaborateBabyInfo(babyKeyValues, babyName) {

  // print each key-value pair of the baby (e.g., name: "Luke", months: 32...)
  for (let i = 0; i < babyKeyValues.length; i++) {

    // !if the baby has outfits (haveOutfit is true)
    if (babyKeyValues[i][0] === "outfits") {

      // transform the outfits OBJECT which has the outfits, into an array of key-value pairs
      // key: "name-outfit" /  value: "color-outfit"
      let outfitsNewFormat = Object.entries(babyKeyValues[i][1]);

      // loop to print the outfits of the baby in a formatted way
      console.log(`---- outfits of ${babyName} ----`);
      for (let i = 0; i < outfitsNewFormat.length; i++) {
        printBabyInfo(outfitsNewFormat[i]);
      }

      // !other informations of the baby (name, months, favFood...)
    } else {
      printBabyInfo(babyKeyValues[i]);
    }
  }
}


// -------------------------------------------------


// print key-value pairs of the babies, BABY IS AN OBJECT {}
for (let baby of babies) {

  // transform the baby object into an ARRAY of key-value pairs
  let babyKeyValues = Object.entries(baby);
  console.log(babyKeyValues);

  // call the function to process and print the baby's key-value information
  elaborateBabyInfo(babyKeyValues);

  // add space in the console between babies
  console.log("\n\n\n");
}


// -------------------------------------------------


// array containing the parts of the OUTFIT(keys) and their COLORS(values)
const outfits = ["T-shirt", "Shirt", "Blouse", "Sweater", "Hoodie", "Tank top", "Crop top",
  "Polo shirt", "Jeans", "Trousers", "Shorts", "Skirt", "Dress", "Leggings", "Jacket", "Coat", "Blazer",
  "Cardigan", "Scarf", "Gloves", "Hat", "Cap",];

const colors = ["red", "blue", "green", "yellow", "purple"];


/* 01. add the outfits key property (an object) to each baby
   02. print key-value pairs of the babies, BABY IS AN OBJECT {} */
for (let baby of babies) {

  // create an empty OBJECT that will contain the baby's OUTFIT
  baby.outfits = {};

  /* add 3 outfits for each baby (randomly) using bracket notation.
     math.floor is used to create a random index to select from the arrays the outfit and the color */
  for (let i = 0; i < 3; i++) {
    baby.outfits[outfits[Math.floor(Math.random() * outfits.length)]] = colors[Math.floor(Math.random() * colors.length)];
  }

  // transform the baby object into an ARRAY of key-value pairs
  let babyKeyValues = Object.entries(baby);
  console.log(babyKeyValues);

  // call the function to process and print the baby's key-value information, and pass also the NAME of the baby
  elaborateBabyInfo(babyKeyValues, baby.name);

  // add space in the console
  console.log("\n\n\n");
}