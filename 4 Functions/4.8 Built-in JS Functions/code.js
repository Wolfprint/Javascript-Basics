'use strict';

//Ask user for something and store it in x
var age = window.prompt("Please input you age");

//show something on console
console.log(age);

//Show alert on browser
window.alert("Hello");

//run a peace of JS code
eval("var a = 1; console.log(a);");

/*Time functions
    -> setInterval, call a function every interval of time in miliseconds
    -> clearInterval will stop a setInterval function from continiuing, it require the variable
       that is storing the interval to be stoped.
    -> setTimeout will excecute a pease of code after a certain delay
*/
var counterValue = 0;
function countFunction(){
    console.log(counterValue);
    counterValue++;
    if(counterValue == 10){
        clearInterval(counterInterval);
    }
}

var counterInterval = setInterval(countFunction,1000);

setTimeout(function(){
    console.log("I have been waiting for 3 seconds");
}, 3000);