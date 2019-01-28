'use strict';

/*
    EVENT DELEGATION

    This will help us havin to atache a event handler to a new 
    html element that is created using JS code.

    Event Delegation takes into advantage 2 things:
        
        -> The principle of bubbling
        -> The fact that the target attribute inside an event
           object will allways tell us where the event actually
           happend and handle it.

    The ide is that if we have a lot of elements handled in a 
    similar way, then instead of assigning a handler to each of
    them we put a single handler on their common ancestor.

    To check which element generated the event, we use the next:

        ORIGINAL_ELEMENT = event.target;

    For more information please go to

        https://javascript.info/event-delegation
*/

var paragraphs = document.querySelectorAll("p");
//var paraghaps = document.getElementByTagName("p");
var div = document.querySelector("div");

function logHelloParagraph(){
    console.log("Hello !");
}
/*
for(var i = 0 ; i < paragraphs.length ; i++){
    paragraphs[i].addEventListener("click",logHelloParagraph);
}
*/
var newParagraph = document.createElement("p");
newParagraph.innerHTML = "Paragraph 4";
div.appendChild(newParagraph);

//How to add the same functionality to new elements

div.addEventListener("click",function(event){
    console.log(event);

    var t = event.target;
    console.log(t);
    console.log(t.nodeName);
    console.log(t.tagName);
    if(event.target && event.target.nodeName == "P"){
        console.log(event.target.innerHTML + ' clicked ');
    }
});

newParagraph = document.createElement("p");
newParagraph.innerHTML = "Paragraph 5";
div.appendChild(newParagraph);