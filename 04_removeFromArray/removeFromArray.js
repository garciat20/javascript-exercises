const removeFromArray = function(array, ...targets) {

    // return array.filter((value) => !targets.includes(value));
    let res = [];

    array.forEach(value => {
        if (!targets.includes(value)) {
            res.push(value);
        }
    });

    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
