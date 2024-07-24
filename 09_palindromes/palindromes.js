const palindromes = function (str) {
    const oldStr = str.toLowerCase();
    const newStr = oldStr.split('').reverse().join('');
    return oldStr === newStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
