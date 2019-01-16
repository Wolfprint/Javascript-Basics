'use strict';

/*
A functions statement is the old way to declare a function

function NAME(param1,param2,...,paramN){
    CODE
}

-> you can call the function before and after its declaration
   anywhere in your code
*/
console.log(sum(2,3));

function sum(a,b){
    return a + b;
}

console.log(sum(3,4));

/*
A function expression is when you store a function or
anonimous function inside a variable

-> you can only use this function after its declaration
*/

//console.log(greet("Jorge"));
var greet = function(name){
    return "Hello "+name+" !";
}

console.log(greet("Carmen"));

//Example
function advanceSum(myFunction, myArray){
    var result = 0;
    
    for(var i = 0; i < myArray.length; i++){
        console.log(myArray[i]);
        result += myFunction(myArray[i]);
    }

    return result;
}

//Do not forget to add ; at the end
var multiplyBy2 = function(x){
    return x*2;
};

var res = advanceSum(multiplyBy2,[1,2,3,4,5]);
console.log(res);