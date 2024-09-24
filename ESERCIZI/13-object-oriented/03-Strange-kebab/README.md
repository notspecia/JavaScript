## Author Details

* Name: Gabriele Speciale
* Date: 2024-09-17
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

   ● Add a method to the String prototype called toStrangeKebab() that transforms strings to kebab-case 
     // Given the following array:

     const source = [
     'MyNameIsMyPassportVerifyMe',
     'My Name Is My Passport Verify Me MMM',
     ' -- -My?Name&*is**my$$Passport???p??',
     'mY--name--- is- - 2023---',
     'mynameismypassport',
     '2022 my name is',
     '2024-my-name-is'
     ];

     source.forEach(item => console.log(item.toStrangeKebab()));


   ● The output should exactly match this:
     my-name-is-my-passport-verify-me
     my-name-is-my-passport-verify-me-m-m-m
     my-name-is-my-passport-p
     m-y-name-is-2023
     mynameismypassport
     my-name-is
     my-name-is


   ● Note:
     This implementation of kebab-case is not standard. It was invented for this exercise
     You might want to use regular expressions in your solution

     USE --> https://regex101.com/




## Approach to solution

this script implements a method called `toStrangeKebab()` added to the `String` prototype, which transforms strings into a custom kebab-case format. The method utilizes regular expressions to handle various string formats and edge cases

### 1. **Method Definition**:
- the `toStrangeKebab()` method is defined on the `String` prototype, allowing it to be called on any string instance
- it performs several transformations to convert the string into kebab-case

### 2. **String Transformations**:
- the method inserts a dash (`-`) before each uppercase letter
- it replaces non-alphanumeric characters with dashes
- multiple consecutive dashes are condensed into a single dash
- eading and trailing dashes are removed
- any digits followed by a dash are also removed





## files

* index.html
* main.js