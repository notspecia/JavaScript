## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-18
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

 Write a function formatDate(date) that accepts a date and outputs it as follows:
 ● If less than a second has passed since the date, output "right now"
 ● If less than a minute has passed since the date, output "n sec. ago"
 ● If less than an hour has passed since the date, output "m min. ago"
 ● Otherwise, output the date in this format "DD.MM.YY HH:mm"
  ○ e.g. 17.04.16 10:00







## Approach to Solution

To format a date and output it based on the time elapsed, the following steps are taken:

1. **Defining the `formatDate` Function**:
- Create a function named `formatDate` that accepts a `date` object as an argument.
- Inside the function, get the current date and time.

2. **Extracting Date Components**:
- Extract the year, month, day, hours, minutes, and seconds from the input date object.

3. **Calculating Time Differences**:
- Calculate the difference in time between the current date and the input date in milliseconds.
- Convert the time difference from milliseconds to seconds and minutes using `Math.floor()`.

4. **Conditional Output**:
- If less than a second has passed since the date, output "right now".
- If less than a minute has passed since the date, output "n sec. ago".
- If less than an hour has passed since the date, output "m min. ago".
- Otherwise, output the date in the format "DD.MM.YY HH:mm".

5. **Setting an Interval**:
- Use `setInterval` to call the `formatDate` function every second, passing the desired date.








## files

* index.html
* main.js