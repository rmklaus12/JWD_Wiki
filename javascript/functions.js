// function declaration
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(24))
console.log(isEven(11))

// Hoisted variable
console.log(hello('Aliens')) // => 'Hello Alients!'

// Named function
console.log(hello.name) // => 'hello'

// variable holds the function object
console.log(typeof hello); // => 'function'

function hello(name) {
    return `Hello ${name}!`;
}

// regular function
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6)); // => 11
console.log(([3, 7]).reduce(sum)) // => 10

// function expressions or arrow functions that do not create a bidning with the function varable by its name
// to calculate recursively (iterating over an operation) the factorial you have to access the function inside:
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(4)); // => 24

// recap: function declaration starts with function keyword
function isNil(value) {
    return value == null;
}

// function expressions do NOT start with function keyword
// (but it is present somewhere in the code)

// function expression: starts with 'const'
const isTruth = function(value) {
    return !!value;
};

// function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function(item) {
    return typeof item === 'number';
});

// function expression (IIFE): starts with "("
// An **IIFE** (Immediately Invoked Function Expression) is a
// JavaScript function that runs as soon as it is defined.
(function messageFunction(message) {
    return message + ' World!';
})
console.log(('Hello'));

// some JS environments can throw a reference error when invoking a function whose declaration
// appears within blocks {...} of if, for, or while statements
// with strict mode enabled: (else function returning 'false ok' shows as unreachable)
(function() {
    'use strict';
    let ok;
    if (true) {
        ok = function() {
            return 'true ok';
        };
    } else {
        ok = function() {
            return 'false ok';
        };
    }
    console.log(typeof ok === 'function'); // => true
    console.log(ok()); // => 'true ok'
})();

// recap: A function expression is determined by a function keyword, followed by an
// optional function name, a list of parameters in a pair of parenthesis (para1, ..., paramN)
// and a pair of curly braces { ... } that contains the body code.
// samples of function expression:
const count = function(array) { // function expression
    return array.length;
}
const methods = {
    numbers: [1, 5, 8],
    sum: function() { //function expression
        return this.numbers.reduce(function(acc, num) { // function expression
            return acc + num;
        });
    }
}
console.log(count([5, 7, 8])); // => 3
console.log(methods.sum()); // => 14

// A function is anonymous when it does not have a name (name property is an empty string ''):
(
    function(variable) {
        return typeof variable;
    }).name; // => ''

// sometimes the function name can be inferred. For example, when the anonymous is
// is assigned to a variable:

const myFunctionVar = function(variable) {
    return typeof variable;
};
console.log(myFunctionVar.name);
// => 'myFunctionVar' is the anonymous function name because
// myFunctionVar variable name is used to infer the function name

// Named function expression has a name specified and has some additional properties
// the variable funName is accessible within function scope, but not outside
// the property name of the function object holds the name: funName
const getType = function funName(variable) {
    console.log(typeof funName === 'function'); // => true
    return typeof variable;
}
console.log(getType(3)); // => 'number'
console.log(getType.name); // => 'funName'

console.log(typeof funName); // => 'undefined'

// Arrow functions are defined using a pair of parenthesis that contains the list of
// parameters (param1, param2, ..., paramN) followed by an arrow => and a pair of curly braces { ... }
const absValue = (number) => {
    if (number < 0) {
        return -number;
    }
    return number;
}
console.log(absValue(-10)); // => 10
console.log(absValue(5)); // => 5