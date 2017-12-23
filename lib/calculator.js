// Calculator Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let value = a * 1.0 / b;
    if (!isFinite(value))
        throw new RangeError('Divide-by-zero');
    else
        return value;
}

function maximum(a, b) {
    return (a >= b) ? a : b;
}

function minimum(a, b) {
    return (a <= b) ? a : b;
}


// Calculator Class

class Calculator {

    constructor() {
        this.last_answer = 0;
    }

    do_math(a, b, func) {
        return (this.last_answer = func(a, b));
    }

    add(a, b) {
        return do_math(a, b, add);
    }

    subtract(a, b) {
        return do_math(a, b, subtract);
    }

    multiply(a, b) {
        return do_math(a, b, multiply);
    }

    divide(a, b) {
        return do_math(a, b, divide);
    }

    maximum(a, b) {
        return do_math(a, b, maximum);
    }

    minimum(a, b) {
        return do_math(a, b, minimum);
    }
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    maximum: maximum,
    minimum: minimum,
    Calculator: Calculator,
}
