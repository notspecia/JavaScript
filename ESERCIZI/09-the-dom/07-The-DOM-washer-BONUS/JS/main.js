/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-26
 * @description 
 * create a simulation of a dishwasher system using two stacks of dishes
 * ● one stack represents dirty dishes, and the other represents clean dishes
 * 
 * ● the dirty stack has a random number of plates 2 - 7
 * 
 * ● useful functions
 *   ○ washDish - moves a dish from the dirty stack to the clean stack
 *   ○ displayStacks - displays the current state of both stacks in the console
 *   ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
 * 
 * bonus:
 * 1. have three stacks of dirty dishes and one clean stack
 * 2. the dishwasher is able to wash two dishes at a time
 */




/**
 * function createDirtyStack
 * 
 * generates a stack of dirty dishes with a random number of plates.
 * @param {nameStack} numberStack - the identifier number for the stack
 * @returns {object} - array containing dirty dishes (each numbered) 
 */
function createDirtyStack(nameStack) {

   // get the stack of dirty plates by ID
   let stackDirtyPlates = document.getElementById(nameStack);

   // generate a random number of plates between 2 and 7
   let randomPlates = Math.round(Math.random() * (max_piatti - min_piatti) + min_piatti);

   // fill the stack with dirty plates
   for (let i = 0; i < randomPlates; i++) {

      // create a list item for each dirty plate
      let dirtyPlate = document.createElement("li");
      let imagePlate = document.createElement("img");
      imagePlate.src = "IMG/dirty-plate.svg";
      dirtyPlate.append(imagePlate);
      stackDirtyPlates.append(dirtyPlate);
   }

   return stackDirtyPlates;
}




/**
 * function cleaningPlates
 * 
 * moves a plate from the dirty stack to the clean stack
 * @param {object} stackDirtyPlates - contains the nodes of the dirty plate stacks
 * @param {object} allArrayStacksPlateDirty - array containing arrays of dirty plates for each stack
 * @param {object} stackCleanPlates - node that will contain the clean plates
 * @param {number} i - index indicating which stack to take plates from
 */
function cleaningPlates(stackDirtyPlates, allArrayStacksPlateDirty, stackCleanPlates, i) {

   // get the last (top) plate from the dirty stack(i) and remove it from the stack
   const dirtyPlate = allArrayStacksPlateDirty[i].pop();

   // remove the plate from the DOM
   stackDirtyPlates[i].removeChild(dirtyPlate);


   // create a list item for the clean plate
   const cleanPlate = document.createElement("li");

   // add the image to the clean plate a
   const imagePlate = document.createElement("img");
   imagePlate.src = "IMG/clean-plate.svg";
   cleanPlate.appendChild(imagePlate);

   // attach the clean plate to the clean stack
   stackCleanPlates.appendChild(cleanPlate);
}




/**
 * function washDish
 * 
 * moves up to two dishes at a time from the dirty stacks to the clean stack
 * @param {object} stackDirtyPlates - contains the nodes of the dirty plate stacks
 * @param {object} allArrayStacksPlateDirty - array containing arrays of dirty plates for each stack
 * @param {object} stackCleanPlates - node that will contain the clean plates
 */
function washDish(stackDirtyPlates, allArrayStacksPlateDirty, stackCleanPlates) {

   // counting of clean dishes each interval, when it's > 2 then we leave the cycle of function
   let counter = 0;

   // clean up to 2 plates from one stack at a time
   for (let i = 0; i < allArrayStacksPlateDirty.length && counter < 2; i++) {

      // If the length of the stack i(ex=0(1)) is > 0 so there are still dishes...
      if (allArrayStacksPlateDirty[i].length > 0) {
         cleaningPlates(stackDirtyPlates, allArrayStacksPlateDirty, stackCleanPlates, i);
         counter++;
      }

   }

}




/**
 * function runSimulation
 * 
 * simulates the washing process, moving plates from dirty stacks to the clean stack every 2 seconds
 */
function runSimulation() {

   // create an array containing the nodes of dirty plate stacks
   let stackDirtyPlates = [
      createDirtyStack("firstStackDirty"),
      createDirtyStack("secondStackDirty"),
      createDirtyStack("thirdhStackDirty")
   ];

   // debug console logs
   console.log("dirty plates stack!:", stackDirtyPlates);
   console.log(stackDirtyPlates[0]);
   console.log(stackDirtyPlates[1]);
   console.log(stackDirtyPlates[2], "\n\n\n");



   // create arrays from NodeLists and combine them into a single array for convenience
   let arrayStackPlateDirty1 = Array.from(document.querySelectorAll("#firstStackDirty li"));
   console.log("array 1 of dirty plates!:", arrayStackPlateDirty1);

   let arrayStackPlateDirty2 = Array.from(document.querySelectorAll("#secondStackDirty li"));
   console.log("array 2 of dirty plates!:", arrayStackPlateDirty2);

   let arrayStackPlateDirty3 = Array.from(document.querySelectorAll("#thirdhStackDirty li"));
   console.log("array 3 of dirty plates!:", arrayStackPlateDirty3);

   // combine all arrays into one array for easier handling
   const allArrayStacksPlateDirty = [
      arrayStackPlateDirty1,
      arrayStackPlateDirty2,
      arrayStackPlateDirty3
   ];

   // debug console log
   console.log(allArrayStacksPlateDirty);
   console.log(allArrayStacksPlateDirty.length);



   // get the stack for clean plates
   const stackCleanPlates = document.getElementById("cleanStack");
   console.log("clean plates stack!:", stackCleanPlates);




   let timerId = setInterval(() => {

      /* Let's check that each element (every) arrays, has no more
      dirty dishes inside (stack => stack.length === 0) */
      if (allArrayStacksPlateDirty.every(stack => stack.length === 0)) {
         clearInterval(timerId);
         alert("You cleaned all the plates!");

      } else {
         washDish(stackDirtyPlates, allArrayStacksPlateDirty, stackCleanPlates);

      }
   }, 2000);
}




const min_piatti = 2;  // minimum number of dirty plates in a stack
const max_piatti = 7;  // maximum number of dirty plates in a stack

// start washing dishes!
runSimulation();
