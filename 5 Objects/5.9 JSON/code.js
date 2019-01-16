'use strict';

var person = {
    name : "Alejandro Garcia",
    state : "Jalisco",
    birth : 1998
};

console.log(person);

//JSON Object
var personJSON = {
    "name" : "Alejandro Garcia",
    "state" : "Jalisco",
    "birth" : 1998
};

console.log(personJSON);

//JSON ARRAY
var personsJSON = [ 
    {
        "name" : "Alejandro Garcia",
        "state" : "Jalisco",
        "birth" : 1998
    },
    {
        "name" : "Francisco Lopez",
        "state" : "Jalisco",
        "birth" : 1997
    }
];

console.log(personsJSON);

/*
    To convert an object to a json string, you should use the
    global object JSON using the method stringify
*/

var personString = JSON.stringify(personJSON);
console.log(typeof personString);
console.log(personString);

/*
    Convert a json string into an object
*/

var jsonString = "{\"name\":\"Carmen Martinez\",\"state\":\"Ciudad de Mexico\",\"birth\":1938}";
var personFromString = JSON.parse(jsonString);

console.log(typeof personFromString);
console.log(personFromString);

//You can also store your JSON objects in files