'use strict';

//function statement/declaration
function greet(){
    console.log("Hello !");
}
greet();

//function expression
var greet2 = function(){
    console.log("Hi from mars !");
};

greet2();

/*
You can invoke you function inmediately after declaring it
by adding the () at the end of the declaration
by doing this the varibale will store the value return
by the function not a a reference to the function
*/

var greet3 = function(){
    console.log("Hi From Space Station 1 !");
}();

console.log(greet3); // should print indefined not function

/*
If the function you declared use parameters you can add them
inside the parentesis ()
*/

var sumOperation = function(a,b){
    console.log(a+b);
}(4,6);

/*
if you dont want to store the output of your annonimous function
expression you have to:

    -> add parentesis around the function expression (case 1)
    -> or add parentesis aroung the all structure (case 2)

    sometimes this is required because of scope reasons
*/
//function(){
//     console.log("I will not work");
//}();

(function(){
    console.log("Case 1 should work");
})();

(function(){
    console.log("Case 2 should also work");
}());