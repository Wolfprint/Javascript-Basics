'use strict';

var s1 = "Javascript";
var s2 = " is awesome!";
var s3 = "Java";
var s4 = "I rreally enjoy learning Javascript. It is so fun!";

//Get character at position X
console.log(s1.charAt(0));

//concatenate two string
console.log(s1.concat(s2));

//Check if a string contains a string
console.log(s1.includes(s3));

//index of a character
console.log(s1.indexOf('a'));
console.log(s1.lastIndexOf('a'));

//to uppercase or lowercase
console.log(s4.toLowerCase());
console.log(s4.toUpperCase());

//Convert String Object to a String primitive
var y = new String("Mark");
console.log(y);
console.log(typeof y);
y = y.toString();
console.log(y);
console.log(typeof y);
