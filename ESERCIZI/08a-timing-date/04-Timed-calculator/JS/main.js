/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-15
 * @description 
 * 
 * ● We will modify ‘Calculator’ exercise from the lesson about functions
   ● Rewrite the last function that performs all 4 operations so that there is a 
     delay of 3 seconds between one operation and the next:

   Write a function that will take one argument (a number) and perform the 
   following operations, using the functions you wrote earlier:
   
   ● Take half of the number and store the result
   ● Square the result of #1 and store that result
   ● Calculate the area of a circle with the result of #2 as the radius
   ● Calculate what percentage that area is of the squared result (#3)
 */





/**
 * function operations
 * function that receives a number as a topic, this number will come
 * processed in various ways by some functions that are present inside,
 * Each function will have a 3 -second timeout, the function will do:
 * 1. number / 2
 * 2. number divided 2 to ^2
 * 3. number to the square used to calculate the area of a circle
 * 4. percentage of what the area is contained in the square number
 * @param {number} num - int number
 */
function operations(num) {

    setTimeout(function halfNumber(num) {
        let half = num / 2;
        console.log("the number", num + ",", "dividing it for 2 is:", half);

        setTimeout(function squareHalf(half) {
            let halfSquare = half * half;
            console.log("The number divided before:", half + ",", "to the square does:", halfSquare);

            setTimeout(function areaRadius(halfSquare) {
                let areaCyrcle = Math.PI * halfSquare * halfSquare;
                console.log("The area of the circle with radius", halfSquare, "And", areaCyrcle.toFixed(2));

                setTimeout(function percentRatio(halfSquare, areaCyrcle) {
                    let percentNumber = (areaCyrcle / halfSquare) * 100;
                    console.log("the area of", areaCyrcle.toFixed(2), "It is about the", percentNumber.toFixed(0) + "%", "of the number at ^2:", halfSquare);
                }, 3000, halfSquare, areaCyrcle);
            }, 3000, halfSquare);
        }, 3000, half);
    }, 3000, num);
}


// recall of the Operations function, we pass a number as a topic.
operations(10);