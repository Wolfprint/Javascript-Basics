'use strict';

/*
    Primitives
    -> When comparing 2 primitive variables for equality 
       JS will compare the values that both variables contain.

*/
var x = 1;
var y = 1;

console.log(x == y); // Should return true

/*
    Objects / References
    -> When comparing 2 objects JS will compare its addres memory
       so that two objects that cotains the same information are
       not equal because they are alocated on different memory
       spaces
    -> If two variables are pointing to the same memory address
       (Object) then comparing them should return true.

*/

var myPhone = {
    make : "Apple",
    model : "iPhone 6"
};

var myPhone2 = {
    make : "Apple",
    model : "iPhone 6"
};

var myPhone3 = myPhone;

console.log(myPhone == myPhone2); // This should return false
console.log(myPhone == myPhone3); // This should return true

console.log(myPhone === myPhone2);

//this create a primitive string value
var namePrimitive1 = 'Mark';
var namePrimitive2 = 'Mark';

//This creates an Object string value
var nameObject1 = new String('Mark');
var nameObject2 = new String('Mark');

console.log(typeof namePrimitive1);
console.log(typeof nameObject1);
console.log(namePrimitive1 == namePrimitive2);
console.log(namePrimitive1 == nameObject1);
console.log(nameObject2 == nameObject1);