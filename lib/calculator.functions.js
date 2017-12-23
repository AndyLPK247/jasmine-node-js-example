// --------------------------------------------------------------------------------
// Calculator Functions
// --------------------------------------------------------------------------------

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


// --------------------------------------------------------------------------------
// Module Exports
// --------------------------------------------------------------------------------

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    maximum: maximum,
    minimum: minimum,
}
