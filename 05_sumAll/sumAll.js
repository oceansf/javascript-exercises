const sumAll = function(num1, num2) {
    let startingNum = 0;
    let endingNum = 0;
    let sum = 0;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (num1 > num2) {
        startingNum = num2;
        endingNum = num1;
    } else {
        startingNum = num1;
        endingNum = num2;
    }
    for (let i = startingNum; i <= endingNum; i++) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
