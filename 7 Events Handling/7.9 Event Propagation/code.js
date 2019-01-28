'use strict';

/*
    EVENT PROPAGATION

    This append when you have an event handler atached to an element
    that is nested inside another. Example:

        <div>
            <em>If you click on <code>EM</code>, the handler on
            <code>DIV</code> runs.</em>
        </div>

    You atached a 'click' event handler on the div, this handler
    will run if you click the em element or the code element too.

    EVENT BUBBLING

    This principle is simple, when an event happends on an element,
    it follows the next rules:

        -> The event is first captured and handled by the inner
           most element
        -> Then it will be propragated all the way up on other
           ancestors or outer elements
        -> If an element of the chain does not have a handler
           attached to this event, it will be jumped and the
           parent element will be next.
        
    This is the default behavior of event handling. For our example,
    the event will first be handled by <code>, then by <em> and finally
    by <div>

    EVENT CAPTURING

    This principle invert the default behaviour of event propagation,
    in other words, the event will be first caputered by the outer
    most element and then will be propagated to the inner elements.

        -> If the flag is set to true, then the outer most element
           will first handle the event and the propagate it to the
           its inner elements.
        -> The inner elements can be organized using bubbling or 
           capturing, so the chain of propagation can be modified
           or not linear.

    The event capturing is disable by default, and can be activated
    adding a boolean parameter to the function addEventListener

        HTML_ELEMENT.addEventListener( EVENT , FUNCTION , true);

    For more detailed information please see this

    https://javascript.info/bubbling-and-capturing#stopping-bubbling

*/

var div = document.getElementById("second_div");
var p = document.querySelector("p");
var span = document.querySelector("span");

/*
    All of them working with bubbling, so the handling chain,
    should look like this:

        span -> p -> div
*/
/*
div.addEventListener("click",function(event){
    console.log(event);
    console.log("DIV Clicked !!");
});
*/

//If you dissable this event handler the chain should reamin the same
p.addEventListener("click",function(event){
    console.log(event);
    console.log("P Clicked !!");
});

span.addEventListener("click",function(event){
    console.log(event);
    console.log("SPAN Clicked !!");
});

/*
    if you set the div element to follow the capture, the handling
    chain should look like this:

        div -> span -> p

    beacuse the inner elements (p and span) are still following the
    bubbling organization

*/
div.addEventListener("click",function(event){
    console.log("I am followinf capturing strategy");
    console.log(event);
    console.log("DIV Clicked !!");
},true);