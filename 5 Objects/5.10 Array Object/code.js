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
    CLASSIC ARRAY METHODS
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

        -> Return elements starting from position START to END, the elements
           will be returned in the form of a new array. The original array
           will not be affected

            var RETURNED_ARRAY = ARRAY_NAME.slice(START , END);

           if end is bigger than the original array length it will just return
           all the element fron START to ARRAY_LENGTH

        -> Sort the array elements. This method will rearange the elements
           of the array itself. It will return a sorted array and the original
           array will be sorted as well.

            SORTED_ARRAY = ARRAY_NAME.sort();

        -> reverse the elements of an array. This will not sort the elements
           just reverse the order of the elements in the array.

            REVERSE_ARRAY = ARRAY_NAME.reverse();
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

//Sorting array
console.log("Sorting the array");
x = shoppingList.sort();
console.log(shoppingList); // the original array is sorted
console.log(x); // the returned array is also sorted

//reverse the array
console.log("Reversing Array")
x = shoppingList.reverse();
console.log(shoppingList);
console.log(x);

console.log("Working with an unsorted array")
shoppingList = ["grapes", "plumbs", "blueberries", "raspberries", "cucumber"];
console.log(shoppingList);
x = shoppingList.reverse();
console.log(shoppingList);
console.log(x);

/*
    FUNCTIONAL ARRAY METHODS.

    -> Map method will apply a function to avery element of the array. The
       original array will not be change. The result will be visible in
       the returned array

        var FUNCTION_TO_BE_APPLY = function(n){
            return MODIFIED_N_VALUE;
        }

        var MODIFIED_ARRAY = ORIGINAL_ARRAY.map(FUNCTION_TO_BE_APPLY);

       the function that is going to be apply have to return something

    -> Filter, this method will filter the elements of an array based on a function
       that must return a boolean value. Just as map, this function wont alter
       the original array, insted the filtered result will be return from the method

        var FILTERING_FUNCTION = function(n){
            return BOOLEAN_EXPRESION;
        }

        var FILTERED_ARRAY = ORIGINAL_ARRAY(FILTERING_FUNCTION);

    -> Every, this method will return true if the boolean function return true with
       when apply to all elements of the array.

        var BOOLEAN_FUNCTION = function(n){
            return BOOLEAN_EXPRESION;
        }

        var IS_TRUE = ORIGINAL_ARRAY(BOOLEAN_FUNCTION);

    -> forEach, this method allow you to loop throw and array elemts and apply a function
       to all of them, this function can or not return a value. The function also
       can or can not modify the information of the array. Finally, this function does not

        var FUNCTION = function(ELEMENT , INDEX){
            ... PERFORM OPERATION
        }

        var FUNCTION = function(ELEMENT){
            ... PERFORM OPERATION
        }

        ARRAY_NAME.forEach(FUNCTION);

*/

console.log("Map function");
var addDelicious = function(n){
    return "Delicious "+n;
}

x = shoppingList.map(addDelicious);
console.log(shoppingList); // The original array wont be affected
console.log(x); //The returned value will show the result

console.log("Filtering arrays");
var numbers = [34,57,10,49,747,23,9];
var isDividableBy3 = function(n){
    return n % 3 == 0;
}

x = numbers.filter(isDividableBy3);
console.log(numbers);
console.log(x);

console.log("every");
x = numbers.every(isDividableBy3);
console.log(numbers);
console.log(x);

numbers = [3,6,9,12,15,18];
x = numbers.every(isDividableBy3);
console.log(numbers);
console.log(x);

console.log("Looping throw and array using a forEach function");

console.log(shoppingList);
console.log("printing elements using a for loop");
for(var i = 0; i < shoppingList.length; i++){
    console.log(shoppingList[i]);
}

console.log("printing elements using a forEach");
shoppingList.forEach(function(element){
    console.log(element)
});

var wordCount = 0;
x = shoppingList.forEach(function(element){
    return wordCount++;
});
console.log(x);
console.log(wordCount);

//A way to modify the information of the array
x = shoppingList.forEach(function(element,index){
    element = "Fresh "+element;
    console.log(index);
    shoppingList[index] = element;
});
console.log(x);
console.log(shoppingList);

//ES6
for(var element of shoppingList){
    console.log(element);
}