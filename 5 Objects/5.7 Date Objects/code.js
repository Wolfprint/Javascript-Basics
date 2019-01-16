'use strict';

//Get current day and time
var currentTime = new Date();
console.log(currentTime);
console.log(typeof currentTime);

/*
    Setting your own day and time

    -> Constructor with parameters 
    
        Date(YEAR , MONTH, DAY, HOURS, MINUTES, SECONDS, MILLISECONDS)
    
        -> year
        -> month (from 0 - January to 11 - December)
           if the number is greater than 11 it will select the
           next moth ej. 15 -> April
        -> day (default value -> 1);
        -> hours (default value -> 0);
        -> minutes (default value -> 0);
        -> seconds (default value -> 0);
        -> milliseconds (default value -> 0);

        All parameters except for year and moth are optional so 
        you can create a date only by especifing the year and month
        and all the others will be set to default.

    -> Constructor with milliseconds
        
        Date(MILLISECONDS)

        -> The milliseconds parameter ir a integer counting
           the number of milliseconds since January 1, 1970 at
           midnight UTC (01/01/1970 00:00:00.0000 UTC)
        -> You can use negative interger to set a time before
           01/01/1970
*/
//Creating a date using year,moth,day...
var customTime = new Date(2017,11,15,10);
console.log(customTime);
var customTime = new Date(2017,15,15,10);
console.log(customTime);
var customTime = new Date(2017,12);
console.log(customTime);

//Creating a date using milliseconds
var customTime2 = new Date(2017);
console.log(customTime2);
var customTime2 = new Date(2039484763615);
console.log(customTime2);
var customTime2 = new Date(-20394847);
console.log(customTime2);

//Converting a date to milliseconds
var customTimeMilliseconds = customTime2.getTime();
console.log(customTimeMilliseconds);

//Get current milliseconds
var currentTimeMilliseconds = Date.now();
console.log(currentTimeMilliseconds);

/*
    getDay()
        -> Will return a number [0,1,...,5,6] representing the 
           days of the week [Sunday,Monday,...,Friday,Saturday]
           it is important to remember that it start with 
           Sunday, not Monday.

    getMonth()
        -> Will return a number [0,1,...,10,11] representing the
           a month of the year [January,February,...,November,December]

    getDate()
        -> will return the day of the month
*/

var now = new Date();
console.log(now);
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(dayOfTheWeek(now));

function dayOfTheWeek(date){
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[date.getDay()];
}

/*
var year = prompt("Which year were you born?");
var month = prompt("Which month were you born?");
var day = prompt("Which day were you born?");

console.log("you were born on a "+dayOfTheWeek(new Date(year,month,day)));
*/

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

//Calcula how much time JS takes to run some code
var start = Date.now();

for(var i = 0; i < 1000; i++){
    console.log(i);
}

var end = Date.now();

var elapsedTime = end - start;
var totalTime = new Date(elapsedTime);

console.log('Start: '+start);
console.log('end: '+end);
console.log('Elapsed Time: '+elapsedTime+' ms');
console.log(totalTime);

console.log('It took '
            +totalTime.getHours()+' hrs, '
            +totalTime.getMinutes()+' mins, '
            +totalTime.getSeconds()+' seconds, '
            +totalTime.getMilliseconds()+' milliseconds'+
            ' to run the code');