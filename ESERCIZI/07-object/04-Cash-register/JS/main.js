/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-01
 * @description 
 * ● Write a function called cashRegister that takes a shopping cart object. 
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
cashRegister(cartForParty)); // 60.55
 */




/**
 * function cashRegister
 * receives the CART object as a topic, subsequently through a method we assign the object
 * to a variable in the form of array in which we store the keys contained in the object,
 * Finally we return a total sum of all the prices of the products contained in the cart
 * @param {object} cartForParty- cart spending containing the properties with values
 * @returns {cashOut} - total to be paid given the sum of the properties inside the cart
 */
function cashRegister(cartForParty) {

    // that will have the final price as value adding all products
    let cashOut = 0;

    /* returns an array containing the keys to an object, it also used
    for determinate the length of the object*/
    let arrayFromObj = Object.keys(cartForParty);

    console.log(arrayFromObj); // ['banana', 'handkerchief', 'Tshirt', 'apple', 'nalgene', 'proteinShake']


    /* Let's go to cycle all the keys contained by the arched array from the object */
    for (let i = 0; i < arrayFromObj.length; i++) {
        cashOut += +cartForParty[arrayFromObj[i]]; // put the "+" to convert it into a number type
    }

    return cashOut;
}









// cart containing various products (object)
let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};





// Call cartForParty function, we pass the Cart object (Cartforparty) as the topic
let finalPrice = cashRegister(cartForParty);
console.log(finalPrice);