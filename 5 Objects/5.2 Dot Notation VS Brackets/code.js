'use strict';

var myPhone = {
    make : "Apple",
    model : "IPhone 7",
    warranty : 12,
    color: "gold",
    ring : function(){
        console.log("beep beep beep !");
    },
    callSomeone : function(name){
        console.log("Calling "+name);
    }
};
//calling a method using the dot notation 
console.log(myPhone.ring());
console.log(myPhone.callSomeone("Grandma"));

//calling a method using the bracket notation 
console.log(myPhone["ring"]());
console.log(myPhone["callSomeone"]("Grandma"));

//calling a property using the dot notation
console.log(myPhone.make);

//calling a property using the brackets notation
console.log(myPhone["model"]);

/*
There are some cases when calling a method or a property
using the bracket notation is better, easier and more powerfull
*/

var x = "make";
console.log(myPhone.x); // should return undefined because is trying to access property x
console.log(myPhone[x]); // should return Apple because it is trying to access property make

function getRandomProperty(){
    var x = Math.floor((1 + Math.random()*100)%5);

    switch(x){
        case 0: return "make";
        case 1: return "model";
        case 2: return "warranty"
        case 3: return "color";
        default: return "make";
    }
}

function getRandomProperty2(){
    const properties = ["make","model","warranty","color"];
    var index = Math.floor((1 + Math.random()*100) % properties.length);

    return properties[index];
}

console.log(myPhone[getRandomProperty()]);
console.log(myPhone[getRandomProperty2()]);