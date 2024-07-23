/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-07-09
 * @description 
 * ● Write your cars and factory objects as JSON strings in a variable
   
   ● Parse them with JSON.parse();

   ● Write each of them to the DOM in a list
    ○ You should use a styled CSS <ul><li> list with no bullets
    ○ Don’t use <table>
 */


// object which contains the json object (from exsercise 1) writed into string in JS variable
let objectJson = `{
    "name": "Toyota agency",
    "location": "Tokyo, Japan",
    "capacityCars": 4500,
    "isOperational": true,
    "departments": [
        "assembly",
        "inspections",
        "painting",
        "quality control"
    ],
    "manager": {
        "name": "Speciale Luigi",
        "employeeId": "02310LS",
        "contacts": [
            "email",
            "conferences"
        ],
        "coFounders": [
            {
                "name": "Mario Rossi",
                "age": 53,
                "married": true
            },
            {
                "name": "Giorgio Bianchi",
                "age": 23,
                "married": false
            }
        ]
    },
    "established": 2012,
    "cars": [
        {
            "id": 1,
            "make": "Toyota",
            "model": "Mazda",
            "year": 2022,
            "color": "black",
            "isElectric": true,
            "features": [
                "air conditioning",
                "auto drive",
                "bluetooth"
            ],
            "owner": {
                "name": "Speciale Gabriele",
                "licenseNumber": "ABCD33412",
                "contacts": [
                    "email",
                    "phone",
                    "fax"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 2,
            "make": "Toyota",
            "model": "Yaris",
            "year": 2010,
            "color": "gray",
            "isElectric": false,
            "features": [
                "air conditioning",
                "power steering"
            ],
            "owner": {
                "name": "Conti Carlo",
                "licenseNumber": "WE46273",
                "contacts": [
                    "email",
                    "pec",
                    "fax"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 3,
            "make": "Toyota",
            "model": "Corolla",
            "year": 2020,
            "color": "blue",
            "isElectric": true,
            "features": [
                "air conditioning",
                "auto drive",
                "phonecall device"
            ],
            "owner": {
                "name": "Barri Laura",
                "licenseNumber": "EL45DF2",
                "contacts": [
                    "phone",
                    "email"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 4,
            "make": "Toyota",
            "model": "RAV4",
            "year": 2015,
            "color": "red",
            "isElectric": true,
            "features": [
                "power steering",
                "auto drive",
                "bluetooth"
            ],
            "owner": {
                "name": "Bistrotti Luca",
                "licenseNumber": "LU21ME56",
                "contacts": [
                    "email",
                    "phone",
                    "fax"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 5,
            "make": "Toyota",
            "model": "Hilux",
            "year": 2023,
            "color": "green",
            "isElectric": true,
            "features": [
                "air conditioning",
                "auto drive",
                "bluetooth",
                "power steering"
            ],
            "owner": {
                "name": "Nostri Daniele",
                "licenseNumber": "DA32M127",
                "contacts": [
                    "email",
                    "instagram",
                    "facebook"
                ]
            },
            "lastInspectionDate": null
        }
    ]
}`;



/**
 * function appendListItem
 * create an element <li> with the text provided and adds it to a list <ul> specified
 * @param {string} text - content that will be insered into the <li>
 * @param {element} list - the element <ul> that will be filled
 */
function appendListItem(text, list) {

    /* element <li> which will contain the information of the past text of the factory, 
    and that will be appended on to the <ul> factory */
    let infoOfList = document.createElement("li");
    infoOfList.textContent = text;

    // append the X information <li> about the factory into the list <ul>
    list.append(infoOfList);

}


/**
 * function generateFactoryCars
 * generates and dynamically inserts information relating to a factory and cars in the DOM,
 * starting from an object JS. 
 * the information is displayed in two lists `<ul>` separated: 
 * one for factory information, and one for information on cars
 * @param {object} object - object javascript of the factory whit the cars
 */
function generateFactoryCars(object) {

    // --------------------------- FACTORY INFORMATIONS ---------------------------------

    // title <h1> will has the name of the factory
    let titleFactory = document.createElement("h1");
    titleFactory.textContent = `${object.name}`;

    // append the title of the factory at the start of the body
    document.body.prepend(titleFactory);


    /* get the <ul> a list which will contains the info of the factory, 
    from the document and stored into a variable */
    let listFactory = document.getElementById("factoryInfo");

    /* invocation functions that allow you to insert content from objects, 
    within the <li> from the <ul> factory */
    appendListItem(`LOCATION: ${object.location}`, listFactory);
    appendListItem(`CAPACITY CARS: ${object.capacityCars}`, listFactory);
    appendListItem(`IS OPERATIONAL?: ${object.isOperational}`, listFactory);
    appendListItem(`DEPARTMENTS: ${object.departments.join(", ")}`, listFactory);
    appendListItem(`MANAGER--> ${object.manager.name}, ID: ${object.manager.employeeId}, CONTACTS: ${object.manager.contacts.join(", ")}`, listFactory);

    /* cycle that for each co-founder present in the array, 
    within the <li> from the <ul> factory*/
    for (let i = 0; i < object.manager.coFounders.length; i++) {
        appendListItem(`${i + 1} CO-FOUNDERS--> ${object.manager.coFounders[i].name}, AGE: ${object.manager.coFounders[i].age},  IS MARRIED?: ${object.manager.coFounders[i].married}`, listFactory);

    }
    appendListItem(`DATE ESTABLISHED: ${object.established}`, listFactory);


    // --------------------------- CARS INFORMATIONS ---------------------------------

    /* get the <ul> a list which will contains the cars, 
    from the document and stored into a variable */
    let listCars = document.getElementById("listCarsInfo");

    // cycle that import infos about every cars which exist in the factory object
    for (let i = 0; i < object.cars.length; i++) {

        // creation of an title of the car 
        let titleCar = document.createElement("h2");
        titleCar.textContent = `${i + 1} CAR, ${object.cars[i].make} ${object.cars[i].model}`;

        // append the title of the car into the <ul> cars list
        listCars.append(titleCar);

        /* invocation functions that allow you to insert content from the objects, 
        within the <li> from the <ul> cars*/
        appendListItem(`ID: ${object.cars[i].id}`, listCars);
        appendListItem(`OWNER--> ${object.cars[i].owner.name}, LICENSE: ${object.cars[i].owner.licenseNumber}, CONTACTS: ${object.cars[i].owner.contacts.join(", ")}`, listCars);
        appendListItem(`YEAR PRODUCTION: ${object.cars[i].year}`, listCars);
        appendListItem(`COLOR: ${object.cars[i].color}`, listCars);
        appendListItem(`IS ELECTRIC?: ${object.cars[i].isElectric}`, listCars);
        appendListItem(`FEATURES OF THE CAR: ${object.cars[i].features.join(", ")}`, listCars);
        appendListItem(`LAST INSPECTION DATE: ${object.cars[i].lastInspectionDate}`, listCars);
    }
    
}


// conversion from the string containing the object JSON, in question JS
const objectJavaScript = JSON.parse(objectJson);

// invocation of the function that generates the information of the factory and its machines in 2 <ul> separate
generateFactoryCars(objectJavaScript);