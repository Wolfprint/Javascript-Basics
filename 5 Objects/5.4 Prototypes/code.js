'use strict';
//Customise constructor using function
function phone(make,model,warranty,color){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;
}

var myPhone = new phone("Nokia","Lumia 7",3,"Black");
console.log(myPhone);

myPhone.lunchYear = "2010";
console.log(myPhone);

var myPhone2 = new phone("Apple","IPhone XS",12,"Black");
console.log(myPhone2);

//Access prototype of phone
console.log(phone.prototype);

//Add methods to prototype
phone.prototype.ring = function(){
    console.log("Este telefono se autodestruira");
}

phone.prototype.extendWarranty = function(extendTime){
    this.warranty += extendTime;
}

/*
    Add properties to prototype
        -> The properties are added to the prototype
        -> Once a property is added it can be access by all 
           instances of this constructor
        -> A property added this way is like a class variable
           all the instances of this constructor will share the
           same value, thus if one modified it all the other
           instances will see the change too.

        -> A property added like this will not be shown as part
           of an instance insted it will be located inside
           the prototype.

        -> Use this sintax to add properties:

            CONSTRUCTOR_FUNCTION_NAME.prototype.PROPERTY_NAME = VALUE;

        -> Use this sintax to access a property:

            INSTANCE_NAME.PROPERTY_NAME

           JS checks if the property exist in the instance, if not it
           will look it up on the prototype. If the property exists inside
           the prototype then it will retreive its value. If not it will
           return undefined.

    REMEMBER

        -> An instance will inherite methods and properties form its prototype
        -> A prototype can inherite from another prototype
        -> All JS elements inherite from Object

*/
phone.prototype.condition = "new";
phone.prototype.price = 500;

console.log(myPhone);
console.log(myPhone2);
console.log(phone.prototype);

console.log(myPhone.condition); // should return "new"
console.log(myPhone2.condition); // should also return "new"
console.log(myPhone.price); // should return 500
console.log(myPhone2.price); // should also return 500
console.log(myPhone.age); // this does not exist on the prototype should return undefined

myPhone.ring();
myPhone2.ring();

