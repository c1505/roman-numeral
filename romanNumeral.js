var RomanNumeral = function() {};

RomanNumeral.prototype.convert = function(input) {
  var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  return map[input];
};

module.exports = RomanNumeral;
