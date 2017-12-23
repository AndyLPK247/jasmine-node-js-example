// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const calc = require('../../lib/calculator.functions');


// --------------------------------------------------------------------------------
// Calculator Function Specs
// 
// These are very basic tests.
// Since the calculator functions are stateless, they don't need setup or cleanup.
// --------------------------------------------------------------------------------

describe("Calculator Functions", function() {

  describe("add", function() {

    it("should add two positive numbers", function() {
      let value = calc.add(3, 2);
      expect(value).toEqual(5);
    });
  
    it("should add a positive and a negative number", function() {
      let value = calc.add(3, -2);
      expect(value).toEqual(1);
    });
  
    it("should give the same value when adding zero", function() {
      let value = calc.add(3, 0);
      expect(value).toEqual(3);
    });
  
  });
  
  it("should subtract two numbers", function() {
    let value = calc.subtract(3, 2);
    expect(value).toEqual(1);
  });

  it("should subtract two numbers for a negative result", function() {
    let value = calc.subtract(2, 3);
    expect(value).toEqual(-1);
  });

  it("should multiply two numbers", function() {
    let value = calc.multiply(3, 2);
    expect(value).toEqual(6);
  });

  it("should divide two numbers", function() {
    let value = calc.divide(3, 2);
    expect(value).toEqual(1.5);
  });

  it("should throw an exception when dividing by zero", function() {
    let divideByZero = function() { calc.divide(3, 0); };
    expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero');
  });

});
