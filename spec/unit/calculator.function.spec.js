const calculator = require('../../lib/calculator');

describe("Calculator Functions", function() {

  const NUM_A = 3;
  const NUM_B = 2;

  it("should add two numbers", function() {
    let value = calculator.add(NUM_A, NUM_B);
    expect(value).toEqual(5);
  });

  it("should subtract two numbers", function() {
    let value = calculator.subtract(NUM_A, NUM_B);
    expect(value).toEqual(1);
  });

  it("should subtract two numbers for a negative result", function() {
    let value = calculator.subtract(NUM_B, NUM_A);
    expect(value).toEqual(-1);
  });

  it("should multiply two numbers", function() {
    let value = calculator.multiply(NUM_A, NUM_B);
    expect(value).toEqual(6);
  });

  it("should divide two numbers", function() {
    let value = calculator.divide(NUM_A, NUM_B);
    expect(value).toEqual(1.5);
  });

});
