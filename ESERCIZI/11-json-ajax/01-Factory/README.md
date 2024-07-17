## Author Details

* Name: Gabriele Speciale
* Date: 2024-07-09
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Write car.json, a JSON that represents a car object
○ Make your object complete, having at least one property of the following types
○ Number, String, Boolean, Array, Object, Null

● Write a factory.json that represents a car factory
○ Follow the same rules above

● Transform car.json into cars.json with 5 cars

● Cars should belong to a factory
○ Write two variants of factory.json
○ One that has cars directly embedded in the factory JSON structure
○ Another that uses cars referring to their IDs

VALIDATION OF JSON HERE --> https://jsonlint.com/


<br> <br> <br>


# Approach to Solution

## File `car.json`

The `car.json` file represents a JSON object detailing the characteristics of a car.

## File cars.json

The `cars.json` file contains an array of JSON objects, each representing a different car. each car object follows the structure defined in `car.json` but with unique values for its properties.

## File factory.json

The `factory.json` file outlines a JSON structure that defines a factory which create cars.

## File factory-embedded-cars.json

The `factory-embedded-cars.json` is an enhanced version of `factory.json` where each car produced by the factory is directly embedded within the JSON structure.


## File factory-car-ids.json

The `factory_with_car_ids.json` file is a variant of `factory.json` where cars produced by the factory are referenced by their IDs. 
each ID in the `carsId` array corresponds to an entry in `cars.json`, allowing for efficient management of cars data, without embedding the full car objects within the factory JSON structure.





## files

* car.json
* cars.json
* factory.json
* factory-embedded-cars.json
* factory-car-ids.json