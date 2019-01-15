'use strict';

var balance = 1000;
var unit_price = 1001;

if(unit_price <= balance){
    console.log('Payment successful !');
    balance -= unit_price;
}else{
    console.log('Not enough funds !');
}

var speed = 50;

if(speed > 70){
    console.log('You are going too fast');
}else if(speed >= 40 && speed <= 70){
    console.log('Your speed is fine !');
}else{
    console.log('You are going to slow !');
}
