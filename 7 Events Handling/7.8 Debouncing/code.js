'use strict';

/*
    DEBOUNCING

    Some events or routines can happen quite often, this can
    create a botle neck for your JS application due to the 
    single threaded model, reducing performance and responsability
    of your web page. Example, tracking mouse movement

    Debouncing limits the rate at which a function can fire, this
    will increase the performance of wour web page and will
    eliminate the botle neck in the queue of events

    To do so, a function that needs to be debouncing should have 
    the next elements:

        -> Create a waiting timeout (variate depending on the task
           that the function is doing), using the setTimeout method
           and save it on a variable

            var TIMEOUT_VAR = setTimeout(FUNCTION , TIMEOUT);

        -> If another event of the same type occures before the
           timeout is over, you have to delete all the previous events
           and restart the timeout. To do in you have to use the mehtod
           clearTimeout().

            clearTimeout(TIMEOUT_VAR);
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
    },50);
});
