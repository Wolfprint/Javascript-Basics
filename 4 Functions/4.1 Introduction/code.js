'use strict';

//basic function
function greeting(){
    console.log('Hello!!');
}

//function with parameters
function greeting2(firstName){
    console.log('Hello '+firstName);
}

//function returning a value;
function sum(a,b){
    return a+b;
}

console.log(greeting);
greeting();
var y = greeting2("Jorge");
console.log(y); // will return undefined
var result = sum(1,2);
console.log(result); // will return a value