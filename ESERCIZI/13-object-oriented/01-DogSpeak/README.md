## Author Details

* Name: Gabriele Speciale
* Date: 2024-09-14
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description
Add a method to the String prototype called dogSpeak() that works as follows:
 
   let s = 'We like to learn';
   s.dogSpeak();
   'Dogs are smart'.dogSpeak();

   // Console output
   // We like to learn Woof!
   // Dogs are smart Woof!

Think about the following question:
- Is it a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc?





## Approach to solution

this script extends the `String.prototype` by adding a new method `dogSpeak()` which appends " woof!" to any given string

### **extending the string prototype**:
- a new method `dogSpeak()` is added directly to the `String.prototype`
- this allows all string instances, whether declared as variables or literals, to call `dogSpeak()` as a built-in method
- the method uses the `concat()` function to append `" woof!"` to the original string and prints the result to the console






## files

* index.html
* main.js