var RomanNumeral = function() {};

RomanNumeral.prototype.convert = function(numerals) {
  var romanNumeralToDigitMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var totalNumber = 0;
  for (i = 0; i < numerals.length; i++) {
    var numeral = numerals[i];
    var nextNumeral = numerals[i + 1];
    if ( romanNumeralToDigitMap[numeral] < romanNumeralToDigitMap[nextNumeral]) {
      totalNumber = totalNumber + romanNumeralToDigitMap[nextNumeral] - romanNumeralToDigitMap[numeral];
      break;
    } else {
      totalNumber += romanNumeralToDigitMap[numeral];  
    }
  }
  return totalNumber;
};

module.exports = RomanNumeral;
