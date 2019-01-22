'use strict';

/*
    REMOVING DOM ELEMENTS

    There are two ways of removing an element from the dom

    -> Removing a child, with this you need a reference to the parent
       and the child that you want to remove
    
        var PARENT = document.getElementbyXXX();
        var CHILD = document.getElementbyXXX();

        PARENT.removeChild(CHILD);

    -> Removing node element itself. For this to work you
       require a reference to the element that you want to
       remove and call the method remove().

        var ELEMENT_REFERENCE = document.getElementByXXX();
        ELEMENT_REFERENCE.remove();

*/

var list1 = document.getElementById("list1");
var item1 = document.getElementById("item1");

list1.removeChild(item1);

/*
Some versions of JS do not support remove
but it can be created and added to the 
Element prototype, so that it can be accessed
by every HTML element.
*/
//Create any element from the DOM
var removeFunction = function remove(){
    var parent = this.parentElement;
    parent.removeChild(this);
}

Element.prototype.remove = removeFunction;
list1.remove();