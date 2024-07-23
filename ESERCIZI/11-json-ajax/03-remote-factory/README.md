## Author Details

* Name: Gabriele Speciale
* Date: 2024-07-15
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Use jsonblob to store JSON data about cars and a car factory
 
● You can use as many blobs as you need. Decide the structure in a way to 
  reduce the amount of data you modify with HTTP requests

● Write an application that displays a factory with a list of cars

● Clicking on each car should display a collapsible panel with more 
  information about the car

● It should be possible to edit the car details

● Save the modified data to jsonblob with an HTTP request

● Whenever data is modified you should reload the new data from jsonblob 
  once the writing has finished

● You should handle all error cases in your application. If an HTTP request 
  fails, you should display a message to the user

● Your project should include a folder called ‘json’ with all the initial json files 
  that you upload to jsonblob (the initial state of your DB)

● Your readme (markdown) should include links to all the jsonblobs that you 
  are using as well as a list of their IDs




## Approach to solution

this application interacts with JSON data stored on jsonblob to display information about a car factory and its cars. 

users can click on each car to view more details in a collapsible panel and edit car details. changes are saved back to jsonblob, ensuring data is always up-to-date. 

error handling is implemented to manage HTTP request failures.

## JSONBlob Links and IDs

### Factory Data
- **URL:** [Factory JSON](https://jsonblob.com/api/jsonBlob/1265346802797633536)
- **ID:** 1265346802797633536

### Cars Data
- **URL:** [Cars JSON](https://jsonblob.com/api/jsonBlob/1265346918619144192)
- **ID:** 1265346918619144192



## files

* index.html
* style.css
* main.js
* factory.json
* cars.json