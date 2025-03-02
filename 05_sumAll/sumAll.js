const sumAll = function(num1, num2) {

    if ( (num1 < 0 || num2 < 0) || (!Number.isInteger(num1) || !Number.isInteger(num2)) ) {
        return "ERROR";
    }

    let start = 0;
    let end = 0;
    let sum = 0;

    if (num1 < num2){
        start = num1;
        end = num2;
    }
    else{
        start = num2;
        end = num1;
    }
    // let start = (num1 < num2) ? num1 : num2;

    for (; start <= end; start++){
        sum += start;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
