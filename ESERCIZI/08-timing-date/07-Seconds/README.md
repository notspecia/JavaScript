## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-18
* Concat: gabriele.speciale@edu.itspiemonte.it





## Description

Write two functions that based on the current date and time output the number 
of seconds:

● getSecondsToday() returns the number of seconds from the beginning of today
● getSecondsToTomorrow() returns the number of seconds till tomorrow





## Approach to solution

To write two functions that output the number of seconds from the beginning of today and the number of seconds until tomorrow based on the current date and time, the following steps are taken:

1. **Defining the `getSecondsToday` Function**:
- Define a function named `getSecondsToday` that accepts a `date` object as its argument.
- Extract the current hours, minutes, and seconds from the `date` object.
- Convert the hours, minutes, and seconds into total seconds from the start of the day (00:00:00).
- Return the total seconds.

2. **Defining the `getSecondsToTomorrow` Function**:
- Define a function named `getSecondsToTomorrow` that accepts a `date` object as its argument.
- Extract the current hours, minutes, and seconds from the `date` object.
- Calculate the total seconds remaining until the end of the day (23:59:59).
- Subtract the seconds passed today from the total seconds in a day (86400 seconds).
- Return the total seconds remaining until tomorrow.

3. **Testing the Functions**:
- Create a `date` object representing the current date and time.
- Call `getSecondsToday` with the current date and log the result.
- Call `getSecondsToTomorrow` with the current date and log the result





## files

* index.html
* main.js