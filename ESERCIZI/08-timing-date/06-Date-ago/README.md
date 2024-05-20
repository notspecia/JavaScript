## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-18
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create a function getDateAgo(date, days) that returns the day of the month 
  n days ago from the given date
● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be 
  19th and getDateAgo(new Date(), 2) should be 18th
● Test the function to make sure it works reliably with any valid Date object
● Decide what to do with a negative 'days' parameter
   
 ○ e.g. getDateAgo new Date(), -2




# Approach to Solution

To write two functions that output the number of seconds from the beginning of today and the number of seconds until tomorrow based on the current date and time, the following steps are taken:

## 1. Defining the `getSecondsToday` Function
- Define a function named `getSecondsToday` that accepts a `date` object as its argument.
- Extract the current hours, minutes, and seconds from the `date` object.
- Convert the hours, minutes, and seconds into total seconds from the start of the day (00:00:00).
- Return the total seconds.







## files

* index.html
* main.js