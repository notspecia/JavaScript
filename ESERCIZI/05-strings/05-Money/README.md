## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-11
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create a function called Money

● It should take a single argument, an amount, and return '<amount> dollars'

● Add a smiley at the end if the amount is 1 million. Deal with edge cases

    For example
    Money(1): 1 dollar
    Money(10): 10 dollars
    Money(1000000): 1000000 dollars ;)

    Bonus
    add to the function the ability to convert dollars to euros
    Money(10): 10 dollars are 9.31 euros




## Approach to Solution

To implement the `money` function:

1. **Calculate Euro Equivalent**: First, we calculate the equivalent amount in euros using the conversion rate of 0.9330. We ensure that the result is formatted to two decimal places using the `toFixed(2)` method.

2. **Construct Message**: We construct the message based on the amount of money received. If the amount is 1 million, we append a smiley at the end of the message. For other amounts greater than 1 or less than -1, we provide the message without a smiley. For amounts equal to 1 or -1, we provide a singular form for "dollar" and "euro".

3. **Return Message**: Finally, we return the constructed message, containing both the amount in dollars and euros, formatted as specified.

This approach ensures that the function correctly handles various amounts of money, converting them into euros and formatting the output message accordingly. 







## files

* index.html
* main.js
