'use strict';

var userInput = prompt("Please input a season: ").toLowerCase();

switch(userInput){
    case 'spring':
        console.log("It is Spring !");
        break;

    case 'summer':
        console.log('It is Spring !!');
        break;

    case 'autumn':
        console.log("It is Autumn !!!");
        break;

    case 'fall':
        console.log("It is Fall !!!");
        break;

    case 'winter':
        console.log('It is Winter !!!!');
        break;

    default:
        console.log('It is Spriter XD, dont worry it happens sometimes');
        break;
}