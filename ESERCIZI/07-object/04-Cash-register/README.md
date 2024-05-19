## Author Details

* Name: Gabriele Speciale
* Date: 
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

● Write a function called cashRegister that takes a shopping cart object. 

● The object contains item names and prices (itemName: itemPrice). 

● The function returns the total price of the shopping cart, e.g. :

   // Input
    let cartForParty = {
        banana: "1.25",
        handkerchief: ".99",
        Tshirt: "25.01",
        apple: "0.60",
        nalgene: "10.34",
        proteinShake: "22.36"
    };


// Output
cashRegister(cartForParty); // 60.55






## Approach to Solution

This solution involves a function called `cashRegister` that calculates the total price of items in a shopping cart object.

1. **Function Overview**:
- The function `cashRegister(cartForParty)` takes a shopping cart object as input.
- It iterates through the object's properties (item names) and retrieves their prices.
- The prices are summed up to calculate the total price of the shopping cart.

2. **Iterating Through Object Properties**:
- The `Object.keys()` method is used to extract an array of keys (item names) from the shopping cart object.
- This array is then iterated using a `for` loop to access each item's price and add it to the total.

3. **Converting Prices to Numbers**:
- The prices are retrieved from the object as strings, so they are converted to numbers using the unary plus operator (`+`) before adding to the total.

4. **Testing the Function**:
- The function is tested by calling it with the `cartForParty` object as input and logging the result to the console.

This approach efficiently calculates the total price of items in a shopping cart object by iterating through its properties and summing up the prices.






## files

* index.html
* main.js
