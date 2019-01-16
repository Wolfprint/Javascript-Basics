'use strict';

var factorial = function(n){
    if(n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};

var factorialLoop = function(n){
    var result = 1;

    if(n == 1){
        return 1;
    }else if(n <= 0){
        return undefined;
    }else{
        for(var i = n; i > 1; i--){
            result *= i;
        }
        return result;
    }
};

console.log(factorial(3));
console.log(factorialLoop(3))