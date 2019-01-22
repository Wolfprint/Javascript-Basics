'use strict';

/*
    CHANGE DOM ELEMENTS
    -> To modify a DOM elements you have to first, select an element,
       and then modify one or more of its properties
*/

//Change content of a HTML element
var p1 = document.getElementById("p1");
console.log(p1.innerHTML);
p1.innerHTML = "JS is fun!";

var p2 = document.getElementById("p2");
p2.innerHTML += "This is number 2";

var p3 = document.getElementById("p3");
p3.textContent = "Some new text !!!!";

/*
    Change attribute of HTML element
    -> use method setAttribute on a reference object

        HTML_OBJECT_REFERENCE.setAttribute(ATTRIBUTE_NAME , ATTRIBUTE_VALUE);

       the attribute name must allways be a string while the
       value can varie depending on the attribute 
*/
var link = document.getElementById("link");
link.setAttribute("href","http://wikipedia.org");

/*
    Change CSS styling

        HTML_OBJECT_REFERENCE.style.CSS_STYLE_ATTRIBUTE = CSS_ATTRIBUTE_VALUE;
*/
p1.style.backgroundColor = "grey";
p2.style.display = "none";
p3.style.color = "white";

//EXCERCISE

/*
    HTMLCollection does not support forEach function present 
    in normal arrays. You can work with them using a normal 
    for loop or modifying the prototype of HTMLCollection to 
    support forEach method. To do it you can add the forEach
    method of Array prototype to the HTMLCollection prototype
*/
var list = document.getElementsByTagName("ul");

//Working with a for loop
for(var i=0 ; i < list.length ; i++){
    var element = list[i];
    var newListElement = document.createElement("li");
    var text = document.createTextNode("Ford");
    newListElement.appendChild(text);
    element.appendChild(newListElement);
}

//Modify the HTMLCollection prototype to support forEach

HTMLCollection.prototype.forEach = Array.prototype.forEach;
list.forEach(function(element){
    element.innerHTML += "<li>Kia</li>";
    
    var children = element.children;
    console.log(children);
    children.forEach(function(element){
        element.style.color = "red";
    });

});
