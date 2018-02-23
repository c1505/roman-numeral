var RomanNumeral = function() {};

RomanNumeral.prototype.convert = function(numerals) {
  var romanNumeralToNumericMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var total = 0;
  for (i = 0; i < numerals.length; i++) {
    var numeral = numerals[i];
    var nextNumeral = numerals[i + 1];
    if ( romanNumeralToNumericMap[numeral] < romanNumeralToNumericMap[nextNumeral]) {
      total = total + romanNumeralToNumericMap[nextNumeral] - romanNumeralToNumericMap[numeral];
      break;
    } else {
      total += romanNumeralToNumericMap[numeral];  
    }
  }
  return total;
};

module.exports = RomanNumeral;
