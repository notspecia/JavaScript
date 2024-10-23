/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-08-20
 * @description 
 * 
   ● Implement some of exercises of the previous units as a webpack project

   ● The aims are:
    ○ to rewrite the same exercises with modern JS syntax
    ○ to use webpack, and polyfills if necessary, to make the code compatible with the largest 
      number of browsers

   ● Document any important configuration or code changes in readme.md

   ● Test the projects with the largest number of browsers you can
 * 
 */


// import the function used for create an object whit only values of type "string"
import { cloneStrings } from "./convertObject.js";


// original object 
const originalObject = {
  name: 'Green Mueller',
  email: 'Rigoberto_Muller47@yahoo.com',
  address: '575 Aiden Forks',
  bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
  active: false,
  salary: 37993,
  birth: new Date("Sun Apr 18 1965 13:38:00 GMT +0200(W.Europe Daylight Time)"),
  bankInformation: {
    amount: '802.04',
    date: new Date("Thu Feb 02 2012 00:00:00 GMT +0100(W.Europe Standard Time)"),
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694'
  }
}

console.log("ORIGINAL OBJECT:", originalObject);



// clone object which will contain only strings
const cloneObjectStrings = cloneStrings(originalObject);
console.log("CLONED OBJECT whit only strings:", cloneObjectStrings);