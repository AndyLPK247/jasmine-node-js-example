// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const calc = require('../../lib/calculator.class');


// --------------------------------------------------------------------------------
// Calculator Class Specs
// 
// These are very basic tests.
// The Calculator object needs minimal setup.
// The equivalence classes are not meant to be exhaustive.
// Instead, they are meant to showcase nested specs.
// --------------------------------------------------------------------------------

describe("Calculator Class", function() {

  // Spec Setup

  let calculator;

  beforeEach(function() {
    calculator = new calc.Calculator();
  });


  // Test Helper Functions

  function verifyAnswer(actual, expected) {
    expect(actual).toBe(expected);
    expect(calculator.last_answer).toBe(expected);
  }


  // add

  describe("add", function() {

    it("should add two positive numbers", function() {
      verifyAnswer(calculator.add(3, 2), 5);
    });
  
    it("should add a positive and a negative number", function() {
      verifyAnswer(calculator.add(3, -2), 1);
    });
  
    it("should give the same value when adding zero", function() {
      verifyAnswer(calculator.add(3, 0), 3);
    });
  
  });


  // subtract

  describe("subtract", function() {

    it("should subtract two numbers", function() {
      verifyAnswer(calculator.subtract(3, 2), 1);
    });
  
    it("should subtract two numbers for a negative result", function() {
      verifyAnswer(calculator.subtract(2, 3), -1);
    });
  
    it("should give the same value when subtracting zero", function() {
      verifyAnswer(calculator.subtract(3, 0), 3);
    });
  
  });
  

  // multiply

  describe("multiply", function() {

    it("should multiply two positive numbers", function() {
      verifyAnswer(calculator.multiply(3, 2), 6);
    });
  
    it("should multiply two negative numbers", function() {
      verifyAnswer(calculator.multiply(-3, -2), 6);
    });
  
    it("should multiply a positive and a negative", function() {
      verifyAnswer(calculator.multiply(3, -2), -6);
    });
  
    it("should give the same value when multiplying by one", function() {
      verifyAnswer(calculator.multiply(5, 1), 5);
    });
  
    it("should give zero when multiplying by zero", function() {
      verifyAnswer(calculator.multiply(5, 0), 0);
    });
  
  });
  

  // divide

  describe("divide", function() {

    it("should divide two positive numbers", function() {
      verifyAnswer(calculator.divide(10, 2), 5);
    });
  
    it("should divide two negative numbers", function() {
      verifyAnswer(calculator.divide(-10, -2), 5);
    });
  
    it("should divide a positive and a negative", function() {
      verifyAnswer(calculator.divide(-10, 2), -5);
    });
  
    it("should divide two positive numbers with a decimal result", function() {
      verifyAnswer(calculator.divide(3, 2), 1.5);
    });
  
    it("should give the same value when dividing by one", function() {
      verifyAnswer(calculator.divide(5, 1), 5);
    });
  
    it("should throw an exception when dividing by zero", function() {
      let divideByZero = function() { calculator.divide(3, 0); };
      expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero');
    });
  
  });


  // maximum

  describe("maximum", function() {

    [
      [1, 2, 2],
      [2, 1, 2],
      [2, 2, 2],
    ].forEach(([a, b, expected]) => {
      it(`should return ${expected} when given ${a} and ${b}`, () => {
        verifyAnswer(calculator.maximum(a, b), expected);
      });
    });

  });

  
  // minimum

  describe("minimum", function() {

    [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ].forEach(([a, b, expected]) => {
      it(`should return ${expected} when given ${a} and ${b}`, () => {
        verifyAnswer(calculator.minimum(a, b), expected);
      });
    });

  });

});
