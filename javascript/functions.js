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

// function expressions do NOT start with function keyword (but it is present somewhere in the code)