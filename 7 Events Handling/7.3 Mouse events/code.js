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


    This section will focus on keyboard events
*/

var b1 = document.getElementById("b1");
b1.addEventListener("mousedown",function(event){
    console.log(event);

    console.log(event.which);
    console.log(event.button);
    console.log(event.buttons);
});
b1.addEventListener("click",function(event){
    console.log(event);
});

var butterflyImg = document.getElementById("butterfly");

window.addEventListener("mousemove",function(event){
    //console.log(event);

    butterflyImg.style.top = event.pageY +"px";
    butterflyImg.style.left = event.pageX +"px";

});

window.addEventListener("mouseup",function(event){
    var img2 = document.createElement("img");
    img2.setAttribute("src","http://pngimg.com/uploads/butterfly/butterfly_PNG1066.png");
    img2.setAttribute("width","40px");
    img2.setAttribute("height","40px");
    img2.style.position = "fixed";
    img2.style.top = event.pageY+"px";
    img2.style.left = event.pageX+"px";

    document.body.appendChild(img2);

});
