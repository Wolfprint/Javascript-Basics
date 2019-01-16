'use strict';

/*
Create multiple objects with the same properties and methods
but different values

CONSTRUCTOR
    -> A constructor is a function that create a templete of an
       object and create a new instance of this object for you

Different kind of Constructors
    -> Generic Object Constructor
        This is provided by default by JS to use it you have to use
        the next sintaxis

            var VARIABLE_NAME = new Object();

        this would be the same as if writing

            var VARIABLE_NAME = {};

        which means you are assigning an empty object to this variable
        after being created you can assing the values you want to the
        properties you wish.

            VARIABLE_MANE.PROPERTY_1 = "something";
            VARIABLE_MANE.PROPERTY_2 = true;
            ..
            ..
            VARIABLE_MANE.PROPERTY_N = 10;

    -> Custom Object Consturctor
        You can create a function statement that create a instances of 
        that class. To do so, we use this sintax:

            function CONSTRUCTOR_NAME( PARAM_1 , PARAM_2, ... , PARAM_N){
                this.PARAM_1 = PARAM_1;
                this.PARAM_2 = PARAM_2;
                ...
                this.PARAM_N = PARAM_N;
            }

        In order to create a new instance you need to class the constructor
        function using the key word new, using this sintax:

            var VARIABLE_NAME = new CONSTURCTOR_NAME( PARAM_1 , PARAM_2 , ... , PARAM_N);
*/

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

var myPhone2 = {
    make : "Sansung",
    model : "Galaxy 8",
    warranty : 12,
    color: "Silver",
    ring : function(){
        console.log("beep beep beep !");
    },
    callSomeone : function(name){
        console.log("Calling "+name);
    }
};

console.log(myPhone);
console.log(myPhone2);

//Generic constructor
var myPhone3 = new Object();
myPhone3.make = "Nokia";
myPhone3.model = "7.1";
myPhone3.warranty = 12;
myPhone3.color = "Orange";

console.log(myPhone3);

//Customise constructor using function
function phone(make,model,warranty,color){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;

    /*
        -> Is valid but it is not a good practice to add a methos 
           in the constructor, Itis better to add them on 
           the prototype
        -> If you add a method on the constructor, everytime you
           create a new instance of this object you will create
           a new instance of the functions witch will consume more
           memory and resources.
        -> If you add the methods on the prototype, there will be
           only one instance on the method shared by all instances
           of the class, witch consumes less memory and resources
    */
    this.extendWarranty = function(x){
        this.warranty += x;
    };
}

var myPhone4 = new phone("Nokia","Lumia 7",3,"Black");
console.log(myPhone4);

myPhone4.extendWarranty(3);
console.log(myPhone4);
myPhone4.codition = "like new";
console.log(myPhone4);

var myPhone5 = new phone("Apple","IPhone XS",12,"Black");
console.log(myPhone5);

/*
How to add a "condition" property to all objects of the same 
class without adding it manually to all instances.

    PROTOTYPE
        -> As it name implies a prototype is an object belonging
           to the same Constructor(class) that works as an example or template
           to all the instances of this constructor.
        -> All elements is JS have a prototype
        -> To access a prototype you have to use the constructor
           method using the next sintax

                CONSTRUCTOR_NAME.prototype
*/
//Accessing the prototype of phone
console.log(phone.prototype);