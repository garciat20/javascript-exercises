const repeatString = function(greeting, num) {

    if (num < 0) return "ERROR";

    let result = "";
    for (let i = 0; i < num; i++){
        result += greeting;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
