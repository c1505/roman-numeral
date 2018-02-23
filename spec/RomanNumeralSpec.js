var RomanNumeral = require('../romanNumeral');

describe('Roman Numeral', function() {
  var romanNumeral = new RomanNumeral();

  it('converts I to 1', function() {
    expect(romanNumeral.convert('I')).toEqual(1);
  });

});