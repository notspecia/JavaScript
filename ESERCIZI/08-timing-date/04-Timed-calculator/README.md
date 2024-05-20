## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● We will modify ‘Calculator’ exercise from the lesson about functions
● Rewrite the last function that performs all 4 operations so that there is a 
  delay of 3 seconds between one operation and the next:
  
Write a function that will take one argument (a number) and perform the 
following operations, using the functions you wrote earlier:
   
● Take half of the number and store the result
● Square the result of #1 and store that result
● Calculate the area of a circle with the result of #2 as the radius
● Calculate what percentage that area is of the squared result (#3)




## Approach to Solution

To modify a calculator function that performs a sequence of mathematical operations with a delay between each operation, the following steps are taken:

1. **Defining the Operations Function**:
- A function named `operations` is defined, which accepts a number (`num`) as its argument.

2. **First Operation - Half the Number**:
- The function `halfNumber` is defined within `operations`.
- `halfNumber` calculates half of the given number and prints the result.
- This function is scheduled to execute after a delay of 3 seconds using `setTimeout`.

3. **Second Operation - Square the Result**:
- The function `squareHalf` is defined within `operations`.
- `squareHalf` calculates the square of the result from `halfNumber` and prints the result.
- This function is scheduled to execute after a further delay of 3 seconds using `setTimeout`.

4. **Third Operation - Area of a Circle**:
- The function `areaRadius` is defined within `operations`.
- `areaRadius` calculates the area of a circle using the squared result from `squareHalf` as the radius and prints the result.
- This function is scheduled to execute after another delay of 3 seconds using `setTimeout`.

5. **Fourth Operation - Percentage Calculation**:
- The function `percentRatio` is defined within `operations`.
- `percentRatio` calculates what percentage the area of the circle is of the squared result and prints the result.
- This function is scheduled to execute after a final delay of 3 seconds using `setTimeout`.

6. **Chaining the Operations**:
- Each operation is nested within the previous operation's `setTimeout` callback, ensuring that each operation executes sequentially with a 3-second delay between each step.






## files

* index.html
* main.js