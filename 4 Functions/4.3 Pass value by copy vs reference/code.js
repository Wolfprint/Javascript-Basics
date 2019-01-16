'use strict';

//Variables value pass by copy
var a = 1;
var b = a;
a ++;
console.log(a);
console.log(b);

//Varibale value pass by reference
var house1 = {
    type : "terraced",
    town : "Cambridge",
    numRooms : 3,
    refurbished: true
};

var house2 = house1;
console.log(house1);
console.log(house2);

house1.town = "London";
console.log(house1);
console.log(house2);

//function variable value pass by copy
function addOne(x){
    x++;
}

function add1(){
    num ++;
}

var num = 1;
addOne(num);
console.log(num);//should still be one

add1();
console.log(num);//should be two because the function is using a variable defined in the general concept

//function pass by reference
function addYear(person){
    person.age ++;
}

var person1 = {
    name: "Mike",
    age: 12
}

var person2 = person1;
addYear(person1);
console.log(person1);
console.log(person2);