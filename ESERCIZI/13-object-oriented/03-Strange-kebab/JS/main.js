/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-09-17
 * @description 
 * 
 * ● Add a method to the String prototype called toStrangeKebab() that transforms strings to kebab-case 
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
 */



/*
01 --> .trim() ci permette di rimuovere gli spazi iniziali e finali della stringa
02 --> 
 */
String.prototype.toStrangeKebab = function () {

    return this.trim()
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/ /g, "")
        .replace(/ /g, "")
        .replace(/ /g, "")
        .replace(/ /g, "")
        .toLowerCase();
}


// creation and log of the array which contain the strings written is camelCase
const sourceCamel = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
];

console.log(sourceCamel);


sourceCamel.forEach(item => {
    console.log(item.toStrangeKebab());
});
