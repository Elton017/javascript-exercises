const round = function(num, places) {
  if (num % 1 == 0) {
    return Math.round(num)
  }
  return parseFloat(num.toFixed(places));
}


const convertToCelsius = function(temp) {
 return round(((temp - 32) * 5 / 9), 1)
};

const convertToFahrenheit = function(temp) {
  return round((temp * 9 / 5 + 32), 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
