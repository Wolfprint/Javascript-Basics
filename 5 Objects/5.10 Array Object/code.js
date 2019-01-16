'use strict';

//Create array
var shoppingList = ["Apples","Milk","Butter","Bread","Eggs","Yogourt"];
console.log(shoppingList);
console.log(typeof shoppingList);

//Create array using a constructor
var shoppingList2 = new Array("Orage","Banana","Pinapple");
console.log(shoppingList2);

//Access elements of array
console.log(shoppingList[1]); //should return Milk
//console.log(shoppingList.1);This will create an error
console.log(shoppingList[10]); //Because position 10 does not exist it will return undefined

//Modify element of array
shoppingList[1] = "Orange";
console.log(shoppingList);

/*
    Delete value
        -> To delete an element from an array use the next sintaxix

            delete ARRAY_NAME[ELEMENT_POSITION];

        -> This will set element value to undefined
        -> The array will keep its size/length
*/
console.log(shoppingList);
console.log(shoppingList.length);
delete shoppingList[1];
console.log(shoppingList);
console.log(shoppingList.length);
delete shoppingList[4];

/*
    Manipulate Arrays using array Methods

        -> Add Element at the end, using method push, it will
           return the new size of the array

            ARRAY_NAME.push(ELEMENT);

        -> Remove Element from the end, it will return the
           element

            var ELEMENT = ARRAY_NAME.pop();

        -> Remove first element of the array, it will return
           the element

            var ELEMENT = ARRAY_NAME.shift();

        -> Add N element to the start of the array, it will
           return the new size of the array

            var SIZE = ARRAY_NAME.unshift(ELEMENT1, ELEMENT2, ... ,ELEMENT_N);

        -> Remove elements from START to END, will return a list
           of removed elements.

            var REMOVE_ELEMENTS = ARRAY_NAME.splice(START,END);

           you can also specify a thrid optional parameter, this is a
           list of elements that will be inserted where the delated 
           elements were in the original array

            var REMOVE_ELEMENTS = ARRAY_NAME.splice(START,END, REPLACE_ELEMENT1, REPLACE_ELEMENT2, ... , REPLACE_ELEMENT_N);
*/
shoppingList = ["Orage","Banana","Pinapple"];
console.log(shoppingList);

//add element to the end
var x = shoppingList.push("Apple");
console.log(x);
console.log(shoppingList);

//pop an element form the end
x = shoppingList.pop();
console.log(x);
console.log(shoppingList);

//Remove first element of array
x = shoppingList.shift();
console.log(x);
console.log(shoppingList);

//Add elements to the begining of the array 
x = shoppingList.unshift("grapes","strawberry","lime","Watermelon");
console.log(x);
console.log(shoppingList);

//Remove elements starting in index X ending in Y
console.log("splice in action");
x = shoppingList.splice(1,3);
console.log(x);
console.log(shoppingList);

x = shoppingList.splice(1,2,"lemon","melon","cucumber");
console.log(x);
console.log(shoppingList);

x = shoppingList.splice(1,2,"plumbs","blueberries","raspberries");
console.log(x);
console.log(shoppingList);

//return n elements
console.log("slice in action")
x = shoppingList.slice(1,4);
console.log(x);
console.log(shoppingList);


