## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Write a function getWeekDay(date) to show the weekday in short format: 
  ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
 ● Write another function that does the same in Italian
 ● Add a language parameter to the function that accepts ‘en’ or ‘it’ and 
   the day in the correct language






## Approach to Solution

To show the weekday in both English and Italian using JavaScript, and to add a language parameter to display the day in the correct language, the following steps are taken:

1. **Creating the getWeekDayEnglish Function**:
- Define a function named `getWeekDayEnglish` that accepts a `date` object.
- Extract the day of the week from the date using the `getDay` method.
- Use a `switch` statement to print the corresponding weekday abbreviation in English (`MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`).

2. **Creating the getWeekDayItalian Function**:
- Define a function named `getWeekDayItalian` that accepts a `date` object.
- Extract the day of the week from the date using the `getDay` method.
- Use a `switch` statement to print the corresponding weekday abbreviation in Italian (`LUN`, `MAR`, `MER`, `GIO`, `VEN`, `SAB`, `DOM`).

3. **Creating the getWeekDay Function with Language Parameter**:
- Define a function named `getWeekDay` that accepts a `date` object and a `lang` string parameter.
- Extract the day of the week from the date using the `getDay` method.
- Use an `if` statement to check the `lang` parameter:
- If `lang` is `"en"`, use a `switch` statement to print the corresponding weekday abbreviation in English.
- If `lang` is `"it"`, use a `switch` statement to print the corresponding weekday abbreviation in Italian.
- If `lang` is not `"en"` or `"it"`, print an error message indicating that the language format is not found.

4. **Testing the Functions**:
- Create several `Date` objects with different dates and times to test various cases.
- Call the `getWeekDayEnglish` function with different `Date` objects to test English weekday abbreviations.
- Call the `getWeekDayItalian` function with different `Date` objects to test Italian weekday abbreviations.
- Call the `getWeekDay` function with different `Date` objects and both language parameters to test the function's ability to switch between English and Italian.






## files

* index.html
* main.js