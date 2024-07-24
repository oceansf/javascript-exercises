const removeFromArray = function(arr, ...args) {
    // Use filter to create a new array without the unwanted values
    return arr.filter(item => !args.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
