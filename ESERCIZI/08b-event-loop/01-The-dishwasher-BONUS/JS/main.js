/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-26
 * @description 
 * Create a simulation of a dishwasher system using two stacks of dishes
 * ● one stack represents dirty dishes, and the other represents clean dishes
 * ● the dirty stack has a random number of plates 10 - 50
 * ● useful functions
 *   ○ washDish - moves a dish from the dirty stack to the clean stack
 *   ○ displayStacks - displays the current state of both stacks in the console
 *   ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
 * 
 * Bonus:
 * 1. have three stacks of dirty dishes and one clean stack
 * 2. the dishwasher is able to wash two dishes at a time
 */


/**
 * function createDirtyStack
 * 
 * will create and insert with .push(), a random number of elements (string) inside of
 * of the stack of dirty dishes ( 10 - 50 plates )
 * @param {number} numberStack - The identifier number for the stack
 * @returns {object} - Array containing dirty dishes (everyone is numbered)
 */
function createDirtyStack(numberStack) {
    let stackPlatesDirty = [];
    let randomPlates = Math.round(Math.random() * (max_piatti - min_piatti) + min_piatti);

    // Fill the stack with dirty plates
    for (let i = 0; i < randomPlates; i++) {
        stackPlatesDirty.push(`plates number ${i + 1} of the STACK ${numberStack}`);
    }

    return stackPlatesDirty;
}





/**
 * function displayStacks
 * 
 * Displays the current state of all dirty and clean stacks in the console.
 * when the dirty stacks are all empty, printed on console "U CLEAN ALL THE PLATES"
 * @param {object} cleanPlateStack - The stack of clean plates
 * @param {object} dirtyPlateStacks - The stacks of dirty plates
 */
function displayStacks(cleanPlateStack, dirtyPlateStacks) {


    for (let i = 0; i < dirtyPlateStacks.length; i++) {

        console.log(
            `STACK ${i + 1} OF DIRTY PLATES 🍽💩:\n
${dirtyPlateStacks[i].join("\n")}\n\n\n\n\n`
        );
    }

    // Display the stack of clean plates
    console.log(`---------------------------------
    STACK OF CLEAN PLATES🍽:\n
${cleanPlateStack.join("\n")}
 ---------------------------------\n\n\n\n\n\n\n\n\n\n`);

    // Check if the last stack of dirty plates is empty and all dishes are clean
    if (dirtyPlateStacks[dirtyPlateStacks.length - 1].length === 0) {
        console.log("\n\n! U CLEAN ALL THE PLATES !");
    }

}





/**
 * function washDish
 * 
 * Moves up to two dishes at intervall, from the dirty stacks to the clean stack
 * @param {object} cleanPlateStack - The stack of clean plates
 * @param {object} dirtyPlateStacks - The stacks of dirty plates
 */
function washDish(cleanPlateStack, dirtyPlateStacks) {

    // counting of clean dishes each interval, when it's > 2 then we leave the cycle of function
    let counter = 0;

    for (let i = 0; i < dirtyPlateStacks.length && counter < 2; i++) {

        if (dirtyPlateStacks[i].length > 0) {
            cleanPlateStack.push(dirtyPlateStacks[i].pop());
            counter++;
        }
    }
}





/**
 * Every 2 seconds whit the setInterval() he comes:
 *  1. the trend of the remaining dirty dishes and the already clean dishes.
 *  2. After that through the function washDish(), will go to get the last dish
 *     of the stack of dirty dishes, and we will insert it into the stack of clean dishes in growing order
 * 
 * If the length of the array (dirtyPlates.length) is === 0:
 *  1. We will go to print the situation that will be for the last time: 
 *     all dishes have been clean and there will be no dirty dish
 *  2. we stop the interval through the clearInterval()
 * 
 * for all the functions, we pass as argument the stack of dirty plates and the stack of the clean plates
 */
function runSimulation() {

    // Create arrays of dirty plate stacks
    const dirtyPlateStacks = [createDirtyStack(1), createDirtyStack(2), createDirtyStack(3)];

    // Initialize the clean plate stack
    const cleanPlateStack = [];


    let timerId = setInterval(() => {

        // Display the current state of the stacks
        displayStacks(cleanPlateStack, dirtyPlateStacks);

        // Check if all dirty stacks are empty
        if (dirtyPlateStacks[dirtyPlateStacks.length - 1].length === 0) {
            clearInterval(timerId);

        } else {
            washDish(cleanPlateStack, dirtyPlateStacks);

        }

    }, 2000);

}


const min_piatti = 10;  // Minimum number of dirty plates in a stack
const max_piatti = 50;  // Maximum number of dirty plates in a stack


// Start washing dishes!
runSimulation();