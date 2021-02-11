## Functions

-   A function is a named sequence of instructions, packaged as a unit, that performs a specific task when the function is called.
-   inputs are _parameters_
-   input values given when function is called are _arguments_
-   When we _define_ a function, we specify the instructions, inputs, and name of the function.
-   When we _call_ a function, all of its instructions are executed.
-   Functions can be executed many times, making its instructions _reusable_.
-   Functions can have _parameters_, which accept input values, making its instructions _flexible_.
-   Functions organize a program into distinct units, making interchanging and editing them easier. This makes your entire program organized and _modular_.
-   function _constructor_ - creates a new function object
-   function _declaration_ - gives JS engine the function's name, return type and parameters.
-   Allow you to reuse code; create modules; test small parts of code in isolation

```
function myFunction() {
	    // logic goes here;
	    }
```

### Function _declaration_ v function _expression_

function _declaration_
: always **starts** with the keyword `function`
`function isNil (value) { return value == null; }`
function calls will be hoisted
function _expression_
: does **not start** with the `function` keyword (it is present somewhere in the statement code however)
function calls are not hoisted

```
// function expression: starts with "const"
  const isTruthy = function (value) {
    return !!value;
  };

// function expression: an argument for .filter()
  const numbers = ([1, false, 5]).filter(function (item) {
    return typeof item === 'number';
  });

  // function expression (IIFE): starts with '('
  // An **IIFE** (Immediately Invoked Function Expression) is a
  // JavaScript function that runs as soon as it is defined.
    (function messageFunction(message) {
      return message + ' World!';
      }) ('Hello');
```

The function expression creates a function object that can be used in different situations:

-   assigned to a variable as an object `count = function(...) {...}
-   create a method on an object `sum: function() {...}
-   use the function as a callback .reduce(function(...) {...})

Factory Functions
: allow creation of many instances of an object quickly. Think of a manufacturing factory that provides mass production of an item. Factory functions returns an object that can be reused to make multiple object instances. Factory functions can include parameters allowing customization of the object that gets returned.
You can call the function with the appropriate arguments to create a new object.

Conditional statements
: executes code when certain _conditions_ exist - if statement - for loop - while statement

camelCase naming convention
