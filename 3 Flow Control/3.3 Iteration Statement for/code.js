'use strict';

for(var i = 7; i >= 1; i--){
    console.log(Math.pow(i,2));
}

var shoppingList = ["eggs","milk","bread","coffee","sugar"];

for(var i = 0; i < shoppingList.length ; i++){
    console.log('Item '+i+': '+shoppingList[i]);
}

var numList = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < numList.length ; i++){
    console.log('Element >>'+i+' Value >> '+numList[i]);
    numList[i] = numList[i] *= 2;
}
console.log(numList)
