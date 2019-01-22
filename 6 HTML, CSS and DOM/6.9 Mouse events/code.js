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
            |       |-> MouseDown
            |       |-> MouseUp
            |       |-> Click


    This section will focus on keyboard events
*/

var b1 = document.getElementById("b1");
b1.addEventListener("mousedown",function(event){
    console.log(event);
});
b1.addEventListener("click",function(event){
    console.log(event);
});
