'use strict';

//Get PI value
console.log(Math.PI);

//Generate random number
var x = Math.random();
console.log(x);

//Round number to the closest integer number up or down
x = Math.round(3.4);
console.log(x); // should print 3
x = Math.round(3.5);
console.log(x); // should print 4
x = Math.round(3.6);
console.log(x); // should print 4
x = Math.round(3.9);
console.log(x); // should print 4

/*
    floor method return the greatest 
    integer less than or equal the number
*/

x = Math.floor(3.3); // should print 3
console.log(x);
x = Math.floor(3.5); // should print 3
console.log(x);
x = Math.floor(3.6); // should print 3
console.log(x);
x = Math.floor(3.9); // should print 3
console.log(x);

//square root
x = Math.sqrt(4);
console.log(x); //should print 2

//Trigonometric functions
//They work with radians
x = Math.sin(0);
console.log(x);

x = Math.sin(Math.PI/2);
console.log(x);

x = Math.cos(Math.PI);
console.log(x);