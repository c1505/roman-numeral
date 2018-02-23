var RomanNumeral = require('../romanNumeral');

describe('Roman Numeral', function() {
  var romanNumeral = new RomanNumeral();

  it('converts I to 1', function() {
    expect(romanNumeral.convert('I')).toEqual(1);
  });
  
  it('converts V to 5', function() {
    expect(romanNumeral.convert('V')).toEqual(5);
  });
  
  it('converts II to 2', function() {
    expect(romanNumeral.convert('II')).toEqual(2);
  });
  
  it('converts MM to 2000', function() {
    expect(romanNumeral.convert('MM')).toEqual(2000);
  });
  
  it('subtracks correctly.  converts IV to 4 ', function() {
    expect(romanNumeral.convert('IV')).toEqual(4);
  });
  
  it('subtracks correctly.  converts XIV to 14 ', function() {
    expect(romanNumeral.convert('XIV')).toEqual(14);
  });
  
  it('converts XXXIII to 33 ', function() {
    expect(romanNumeral.convert('XXXIII')).toEqual(33);
  });
});