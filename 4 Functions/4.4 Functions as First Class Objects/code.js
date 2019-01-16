'use strict';

//store a function inside a variable
var sumFunction = function sum(a,b){
    return a + b;
}
//you can thread the variable as the function an call it
console.log(sumFunction(1,3));

//You can omit the name of the function an just assign it
//to a variable, this are called anonimous functions
var resFunction = function(a,b){
    return a-b;
}

console.log(resFunction(4,2));

//assign annonimus functions to object variables to transform them
//into methods
var myPhone = {
    make: "Apple",
    model: "IPhone 6",
    warranty: 12,
    color: "gold",
    showWarrantyDetails: function(){
        console.log("This phonen comes with a "+this.warranty+" months warranty!");
    }
}

myPhone.showWarrantyDetails();

//pass functions as parameter inside another functions 
//to modify the internal behavior of a function
// when a function is passed as a parameter to another function
// it is called a call back !!!!

function square(x){
    return Math.pow(x,2);
}

function funnySum(myFunction, a, b){
    return myFunction(a)+myFunction(b);
}

console.log(funnySum(square,3,4));

//A Function can return a function
function aritmethicFunctions(type){
    switch(type){
        case 'sum':
            return function(a,b){
                return a+b;
            };

        case 'res':
            return function(a,b){
                return a-b;
            }

        case 'mul':
            return function(a,b){
                return a*b;
            }

        case 'div':
            return function(a,b){
                return a/b;
            }
    }
}

var mathFunction = aritmethicFunctions('sum');
console.log(mathFunction(6,3));
console.log(aritmethicFunctions('res')(6,3));
console.log(aritmethicFunctions('mul')(6,3));
console.log(aritmethicFunctions('div')(6,3));

//Second example of a function returning a function
//this time as some sort of setting up
function addSomething(x){
    return function(a){
        return a + x;
    }
}

var addOne = addSomething(1);
console.log(addOne(4));
var addFive = addSomething(5);
console.log(addFive(5));