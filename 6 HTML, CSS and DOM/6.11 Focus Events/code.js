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
            |       |-> MouseMove
            |-> WindowEvent
            |       |-> ScrollEvent
            |       |       |->Scroll
            |       |-> FocusEvents
            |       |       |-> Focus
            |       |       |-> Blur


    This section will focus on focus events
*/

var nameInput = document.getElementById("firstName");
console.log(nameInput);

// The focus event is activated when an element is selected
nameInput.addEventListener("focus",function(event){
    console.log(event);
    console.log(event.target.value);
});

//The blur element is activated when an element is no longer selected
nameInput.addEventListener("blur",function(event){
    console.log("Leaving Name Input");
    console.log(event);
});

addEventListener("blur",function(event){
    console.log("window element has been avandond");
    console.log(event.target);
});
