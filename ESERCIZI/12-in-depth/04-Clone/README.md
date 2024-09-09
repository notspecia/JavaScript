## Author Details

* Name: Gabriele Speciale
* Date:  2024-08-20
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

This script contains a function `clone()` that clones any given object.
The function is tested on a sample object provided below. The name of the cloned
object is changed to ensure that the original object remains unaffected.

Important!:
The function is implemented without using built-in methods like Object.assign(),
jQuery.extend(), or JSON.parse(JSON.stringify()) to clone objects.





## Approach to solution

this script implements a `clone()` function to create a deep clone of any given object without using built-in methods like `Object.assign()`, `JSON.parse(JSON.stringify())`, or `jQuery.extend()`

### 1. **function debuggingLog**:
- a helper function that logs the key-value pairs of the object for debugging purposes.
- it prints both the key and value along with their types

### 2. **function clone**:
- receives an `originalObject` as a parameter.
- it initializes an empty object, `cloneObject`.
- the `name` property of `cloneObject` is explicitly set to "Speciale Gabriele" to demonstrate thatthe cloning process doesn't alter the original object
- a `for...of` loop with `Object.entries()` is used to iterate over the key-value pairs of the`originalObject`
- each key-value pair, except the `name`, is copied to `cloneObject`
- if a nested object exists (such as `bankInformation`), it is copied by reference in this example,as deep cloning of nested objects would require further recursion or handling

### 3. **originalObject**:
- an object is defined containing several properties, such as `name`, `email`, `address`, `bio`, andsome nested properties like `bankInformation`
- the `birth` and `bankInformation.date` properties are `Date` objects

### 4. **cloning**:
- the `clone()` function is called to clone the `originalObject`
- the original and cloned objects are logged to the console for comparison
- both the `name` properties of the original and cloned objects are logged to demonstrate that the`name` property of the cloned object has been changed, while the original remains unaffected









## files

* index.html
* main.js