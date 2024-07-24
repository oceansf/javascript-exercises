const fibonacci = function(num) {
    Number.parseInt(num);
    let fib = [0,1];
    if (num >= 0) {
        for (let i =1; i<= num; i++) {
            const newNum = fib[i-1] + fib[i];
            fib.push(newNum);
        };
    } else {
        return "OOPS";
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
