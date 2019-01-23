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


    This section will focus on keyboard events
*/

console.log(document.body.scrollHeight);
console.log(innerHeight);
console.log(pageYOffset);

addEventListener("scroll",function(event){
    console.log(event);

    console.log(pageYOffset / (document.body.scrollHeight - innerHeight)*100);
});