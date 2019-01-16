'use strict';

//function with no return will return undefined by default
function greeting(firstName){
    console.log('Hello '+firstName);
}

//function returning a value;
function sum(a,b){
    return a+b;
}

//functions can also return other functions
function greet(){
    return function(){
        console.log('Hello !!');
    }
}

//A function that return a function that receives a parameter
function greet2(message){
    return function(name){
        console.log(message + ' ' + name);
    }
}

var y = greeting("Jorge");
console.log(y); // will return undefined
var result = sum(1,2);
console.log(result); // will return a value
var functionResult = greet();
console.log(functionResult);//will return a function
functionResult(); //run the function returned by greet();

greet2('Hi')('Jorge');
greet2('Bonjour')('Carmen');