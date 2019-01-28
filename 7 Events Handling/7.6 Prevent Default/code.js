'use strict';

/*
    PREVENT DEFAULT 

    It is possible to avoid running the default code when an event
    is trigger by calling the method preventDefault. This will allow
    you to modify the default behaviour of an html component or JS 
    event.

        EVENT_OBJECT.preventDefault();
*/

var googleLink = document.querySelector("a");
googleLink.addEventListener("click",function(event){
    console.log(event);
    event.preventDefault(); // The link should not work
});
