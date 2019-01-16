'use strict';


/*
GLOBAL VARIABLES
    -> They are defined outside all functions
    -> Can be access/use by any function or code
    -> Global variables can be used before or after being declared
    -> if used before being assigned a value, it will be undefined
    -> if used after being assigned a value, it will have that value
PARAMETER VARIABLE
    -> They are defined as parameters of a function
    -> If it is named as a global variable JS will give priority
       to the parameter variable when inside the scope of the function
       declaring it.
LOCAL VARIABLES
    -> They are defined inside the body of a function
    -> if it is named as a global ar parameter varibale JS will 
       give priority to the local variable when inside the scope
       body of the function 
*/
var a = 1;

//Function using a global variable
function sum(x){
    return x+a;
}

//Parameter Variable overshadowing a global variable
function sum3(a,x){
    return x + a;
}

//Local Variable overshadowing a global variable
function sum2(x){
    var a = 2;
    return x+a;
}

//Local variable overshadowing a global and parameter variable
function sum4(a,x){
    var a = 10;
    return x + a;
}

console.log(a);
console.log(sum(1)); //should print 2
console.log(sum2(1)); //should print 3
console.log(sum3(1,4)); //should print 5
console.log(sum4(1,4)); //should print 14


/*
    -> If called without defining c it will give us an error
    -> If called with c defined and assigned a value before the 
       function that is using it, it will return NaN because
       even thought the variable has been defined it has not been
       assigned a value yet. x + c -> 3 + undefined -> NaN
    -> if called whit c defined and after it was assigned a value
       it whould work just fine
*/
function sum5(x){
    return x + c;
}
console.log(sum5(2));//this should return NaN
var c = 3; //if this is commented the line before should give an error
console.log(sum5(2));//This should return 5