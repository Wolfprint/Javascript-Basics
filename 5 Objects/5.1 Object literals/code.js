'use strict';

var myPhone = {
    make : "Apple",
    model : "IPhone 7",
    warranty : 12,
    color: "gold",
    ring : function(){
        console.log("beep beep beep !");
    }
};

console.log(myPhone);
console.log(myPhone.make);
console.log(myPhone.ring());