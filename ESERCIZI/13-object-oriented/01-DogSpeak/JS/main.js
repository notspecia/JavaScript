/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-09-14
 * @description
 *
 * Add a method to the String prototype called dogSpeak() that works as follows:

   let s = 'We like to learn';
   s.dogSpeak();
   'Dogs are smart'.dogSpeak();

   // Console output
   // We like to learn Woof!
   // Dogs are smart Woof!

Think about the following question:
- Is it a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc?
 */

//* debug print of what type is the extended prototype
// console.log(typeof (String.prototype.dogSpeak));


// add an method to the `String.prototype`
String.prototype.dogSpeak = function () {
  console.log(this.concat(" ", "Woof!"));
}


// create a string variable and call to it the dogSpeak method
let s = 'We like to learn';
s.dogSpeak();

// call dogSpeak method directly on a string literal
'Dogs are smart'.dogSpeak();





//! my personal solution to solve this ex (NOT USING METHOD), instead using function!!
// function dogSpeak(string) {
//   console.log(string.concat(" ", "Woof!"));
// }


// let s = 'We like to learn';
// dogSpeak(s);

// dogSpeak('Dogs are smart');