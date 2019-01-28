'use strict';

/*
    SINGLE THREADED JAVASCRIPT

    JS by default is a single threaded programing lenguage, this means
    that the JS interpreter only have one thread (pipe) which have to
    run all the instructions that are currently runing in the web
    page, including normal code, events, etc.

    In order for JS to be able to work with asynch operations, like
    AJAX and events, using this model, JS interpreter tail all the
    operations into a queue has they are generated

            +               +
            |      ....     |
            +---------------+
            |  Mouse Event  |
            +---------------+
            |keyboard Event |
            +---------------+
            |  Normal Code  |
            +---------------+
            |  AJAX Request |
            +---------------+
            | Long Function |
            +               +

    Because of this, if a job takes a lot of time other thing will
    be queue and excecute after the long jobs is done. This can
    cause the user experience to seems to be freeze
*/

var googleLink = document.querySelector("a");
googleLink.addEventListener("click",function(event){
    console.log(event);
    event.preventDefault(); // The link should not work
});

function longJob(){
    for(var i = 0; i <= 10000 ; i++){
        console.log(i);
    }
}

longJob();
