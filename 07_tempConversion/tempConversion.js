const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32)/1.8;
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let temp = (celsius * 1.8) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
