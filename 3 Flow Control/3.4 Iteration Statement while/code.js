'use strict';

var x = 0;
while(x < 5){
    console.log(x);
    x++;
}

var balance = prompt("How much would you like to spend in our shop");
var itemNumber = 1;
var totalItemBought = 0;

while(balance > 0){
    var itemPrice = Math.floor(1 + Math.random()*100);

    console.log('-------------------------------------');
    console.log('Current balance: $'+balance+".00")
    console.log('Item Number: '+itemNumber);
    console.log('Item price: $'+itemPrice+'.00');

    if(itemPrice <= balance){
        console.log('You can buy this item');
        balance -= itemPrice;
        totalItemBought ++;
    }else{
        console.log('You can not buy this item');
    }
    console.log("New Balance: $"+balance+'.00');
    itemNumber++;
}
console.log('You bougth '+totalItemBought+' items');