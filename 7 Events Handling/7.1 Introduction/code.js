'use strict';

/*
    EVENT HANDLING

    Take action once a certain event takes place, like a click on
    a button or a mouse overing over an element.

    This can make a web page more interactive.
*/

var f1 = function(){
    console.log("You clicked on button1."+new Date());
}

var f2 = function(){
    console.log("Second function has been triggered on "+new Date());
}

var b1 = document.getElementById("button1");

//Add a fucntion to onclick method using onclick attribute
//b1.onclick = f1;
//b1.onclick = f2; //f2 will overwrite f1;

//Add multiple function to onclick method using addEventListener method
b1.addEventListener("click",f1);
b1.addEventListener("click",f2);

//remove action
b1.removeEventListener("click",f2);

var b2 = document.getElementById("button2");
var n = 0;
b2.ondblclick = function(){
    n++;
    b2.innerText = "clicked "+n+" times";
}

var p1 = document.getElementById("p1");
p1.addEventListener("mouseover",function(){
    this.style.backgroundColor = "lightgreen";
});
p1.addEventListener("mouseout",function(){
    this.style.backgroundColor = "white";
});

var pageheader = document.querySelector("h1");
pageheader.addEventListener("click",function(){
    this.style.position = "fixed";

    var period = 0;
    var interval = window.setInterval(function(){
        period++;
        pageheader.style.top = 100 + (100 * Math.sin(period)) + "px";
        pageheader.style.left = 100 + (100 * Math.sin(period)) + "px";
    },150);

});
