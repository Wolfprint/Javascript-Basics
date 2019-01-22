'use strict';

/*
    EVENT OBJECT

    The event object is a object that can be send to a function
    when the function required some information from the event that
    is handling. There are diferent event but all of them can be 
    group in the next categories:

        -> Keyboard Events (keystrokes, keyup, keydown)
        -> Mouse Events (onClick, ondblClick)
        -> Window Events (onLoad, scrollup, scrolldowun, focus)

        Event
            |-> KeyboardEvent
            |       |-> KeydownEvent
            |       |-> KeyupEvent
            |-> MouseEvent
            |       |-> MouseDownEvent
            |       |-> OnClickEvent


    This section will focus on keyboard events
*/

window.addEventListener("keydown",keyStrokesLog);
window.addEventListener("keydown",fkeydown);
window.addEventListener("keyup",fkeyup);


function keyStrokesLog(event){
    console.log(typeof event); // It should be a KeyboardEvent
    console.log(event);
    console.log(event.keyCode);
    console.log(event.ctrlKey);
    console.log(event.key);
}

function fkeydown(event){
    switch (event.key){
        case 'g':case 'G':
            document.body.style.backgroundColor = "lightgreen";
            break;

        case 'r': case 'R':
            document.body.style.backgroundColor = "red";
            break;

        case 'b': case 'B':
            document.body.style.backgroundColor = "lightblue";
            break;
        
        case 'p': case 'P':
            document.body.style.backgroundColor = "pink";
            break;

        default:
            document.body.style.backgroundColor = "";
            break;
    }
}

function fkeyup(event){
    document.body.style.backgroundColor = "";
}
