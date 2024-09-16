## Author Details

* Name: Gabriele Speciale
* Date: 2024-08-20
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Write a function cloneStrings() that only clones string properties of an object
Starting with the example object of the previous exercise this should be the result:

{ 
 name: 'Green Mueller',
 email: 'Rigoberto_Muller47@yahoo.com',
 address: '575 Aiden Forks',
 bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
 bankInformation: 
  { 
   amount: '802.04',
   business: 'Bernhard, Kuhn and Stehr',
   name: 'Investment Account 8624',
   type: 'payment',
   account: '34889694' 
  }
};




## Approach to solution

this script implements a `cloneStrings()` function to create a new object that only contains the string properties from a given object, including nested objects

### 1. **function cloneStrings**
- receives an `originalObject` as a parameter
- initializes an empty object, `cloneObject`
- iterates through each key-value pair of `originalObject` using `Object.entries()`
- if the value is an object (but not a Date), the function calls itself recursively to handle nested objects
- if the value is a string, it is copied to `cloneObject`

### 2. **originalObject**
- an object is defined containing several properties, including `name`, `email`, `address`, `bio`, and nested properties such as `bankInformation`
- the `birth` and `bankInformation.date` properties are `Date` objects

### 3. **cloning**
- the `cloneStrings()` function is called to clone only the string properties of the `originalObject`
- the original and cloned objects are logged to the console for comparison
- the cloned object will only include the string properties from the original object, while other types (e.g., Date objects) are excluded







## files

* index.html
* main.js