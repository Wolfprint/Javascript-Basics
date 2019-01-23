'use strict';

/*
    DEBOUNCING

    Some events or routines can happen quite often, this can
    create a botle neck for your JS application due to the 
    single threaded model. Example, tracking mouse movement

    Debouncing, is the method by which the previous events lined up
    waiting to be excecute are delated because a new instance of
    this event has happend and the other bacame opsolite
*/

/*
document.addEventListener("mousemove",function(event){
    console.log("Your current position");
    console.log(event.pageX);
    console.log(event.pageY);

});
*/
//Option num 1 wait some time before excecution
//This still excecute all the events, just 500 ms later XD
/*
document.addEventListener("mousemove",function(event){
    setTimeout(function(){
        console.log("Your current position");
        console.log(event.pageX);
        console.log(event.pageY);
    }, 500);
});
*/

var timeout;
document.addEventListener("mousemove",function(event){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log("Your current position");
        console.log(event.pageX);
        console.log(event.pageY);
    },100);
});
