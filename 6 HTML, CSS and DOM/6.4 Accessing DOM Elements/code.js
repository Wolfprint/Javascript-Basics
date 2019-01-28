'use strict';

//Access All the DOM
/*
    windows is a global object that contains all of the window
*/
console.log(window);
/*
    The DOM is store inside a variable called document in the 
    window object, because the DOM is so important it is also store
    inside a global object called document
*/
console.log(window.document);
console.log(document);

/*
    ACCESS ELEMENTS

    -> By ID

    -> By Tag type

    -> Query Selector
       This can work with tag types, classes, ids, it return only
       the fisrt element that matches the css selector
*/

var p1 = document.getElementById("p1");
console.log(typeof p1);
console.log(p1);
p1.textContent += " Altered with JS!!!!";
p1.style.color = red;
console.log(p1.innerHTML);

//Accessing list of elements by tag name
var paragraphs = document.getElementsByTagName("p");
console.log(typeof paragraphs); //This should get object : HTMLCollection
console.log(paragraphs);

console.log(paragraphs[1].innerHTML);

//Access first element by tag type
var firstParagraph = document.querySelector("p");
console.log(typeof firstParagraph);
console.log(firstParagraph);

//Access first element by class
var firstGreen = document.querySelector(".green");
console.log(typeof firstGreen);
console.log(firstGreen);

//Access first element by id
var firstGreenParagraph = document.querySelector("#p1");
console.log(typeof firstGreenParagraph);
console.log(firstGreenParagraph);


/*
    ACCESSING CHILDREN OF A NODE

    -> Difference between a Node children´s and a Node Nodes´s
       Not all nodes are html elements (children)
*/

var bodyChildren = document.body.children;
console.log(typeof bodyChildren); //HTMLCollection
console.log(bodyChildren); //Will contain only 6 elements

var bodyChildrenNodes = document.body.childNodes;
console.log(typeof bodyChildrenNodes); //NodeList
console.log(bodyChildrenNodes); //Will contain 14 elements 6 HTML elements + 8 "text" elements

/*
    ACCESSING SIBLINGS
*/

console.log("ACCESSING SIBLINGS")

var list = document.getElementsByTagName("li");
console.log(typeof list);
console.log(list)

var listItem = list[0];
console.log(typeof listItem);
console.log(listItem);

console.log(listItem.nextElementSibling);
console.log(listItem.nextElementSibling.nextElementSibling);

/*
    ACCESSING CHILDS AND PARENT
*/
console.log("ACCESSING CHILDREN AND PARENT")
list = document.querySelector("ul");
console.log(list);
console.log(list.firstChild);// It will show "text" because it return the node, not the children
console.log(list.lastChild);

var parentDiv = list.parentNode;
console.log(typeof parentDiv);
console.log(parentDiv);

/*
    CREATE NEW CHILD IN THE BODY
*/
var p = document.createElement("p");
console.log(p);
var textNode = document.createTextNode("A new paragraph created using JS");
p.append(textNode);
console.log(p);
document.body.appendChild(p);

console.log(window.document);