## Testing

### Key Points to remember:

-   Tests help to improve code quality and find issues during the early stages of the development.
-   Tests supplement your development code by helping new contributors get familiar with the possible tests cases they should keep in mind while making any changes.
-   A unit test verifies the behavior of a small part of the application, isolated from the environment and other parts.
-   Unit tests are narrow in scope, and allow us to cover all cases, ensuring that every single part works correctly.
-   Unit tests are

    -   Easy to write - Developers write lots of unit tests to cover different cases and aspects of the application’s behavior, so it should be easy to code all of those test routines without a lot of time.
    -   Readable - The intent of a unit test should be clear.
    -   Reliable - Unit tests should fail only if there’s a bug in the system.
    -   Fast - Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced.

-   The red, green, refactor approach helps developers compartmentalize their focus into three phases:
    -   Red — think about what you want to develop.
    -   Green — think about how to make your tests pass.
    -   Refactor — think about how to improve your existing implementation.
-   **Code refactoring** is the process of restructuring existing computer code—changing the factoring—without changing its external behavior.
-   **Refactoring** is intended to improve attributes of the code such as maintainability, readability, and efficiency.

### Jasmine

-   Jasimine follows both TDD and BDD models
-   Jasmine is unit testing which gives higher code quality, uncovers problems earlier, and provides developers with self documenting code.
-   unit tests are written before code is written (TDD)
-   it() - defines the boundary around a test
-   describe() - defines a suite (group) of tests
-   Each test starts will a call to expect; the launching point of any test, it starts the process.
-   The expect() function accepts a single value called the 'actual' that we want to test
-   The comparison method is called the matcher (eg .toBe()) and is a method chained after the call to expect.
-   toBe() is the equivalent of a strict equal comparison

### Mocha

-   tests compare an expected outcome to an actual outcome.
-   A good test framework is _fast, complete, reliable, isolated, maintainable, and expressive_.
-   tests are grouped using the `describe` function
-   tests are defined using the `it` function
-   these two functions can be used to make the test suite _complete, maintainable, and expressive_ by structuring the test suite (nested groups that reflect the structure of the code) and by providing informative messages (define tests using human-readable strings)
-   `describe` and `it` both accept two parameters: a descriptive string and a callback function
-   Nested `describe` blocks resemble the struture of the code and individual tests are written in `it` blocks. This makes the test suite _isolated, maintainable, and expresssive_.
-   The `assert.ok` method is used to write the test itself.
-   `assert.ok()` allows you to compare values and throw errors as needed using one function call. The human-readable format creates a more _expressive_ test suite.
-   As a Node module, `assert` can be imported at the start of the test file.
    -   `const assert = require('assert');`
-   The `assert` function is called like this:
    -   `assert.ok(argument);`
    -   If the argument passed evaluates to false, an `AssertionError` is thrown and an error message is logged to the console.
-   Tests can be separated into three phases. This separation makes a test more _reliable, maintainable, and expressive_ (easier to read, change, and validate)
    1.  _Setup_ - create objects, variables, and set conditions that the test depends on
    2.  _Exercise_ - execute the functionality you are testing
    3.  _Verify_ - check your expectations against the result of the exercise phase. You can use the `assert` library here.
-   Some tests will use a fourth phase called _teardown_, which makes a test _isolated_.
    -   _Teardown_ - reset any conditions that were changed during the test.
    -   The teardown phase is used to reset the environment before the next test runs. Changes to the environment include altering files and directory structure; changing read and write permissions on a file; editing records in a database.
    -   The teardown phase is not required
    -   Using teardown in the `it` block made the test _isolated_ but not _reliable_
        -   if the system encounters an error before it reaches the teardown, it will not execute that phase. This could cause a false negative.
        -   _hooks_ solve this problem
-   A hook is a piece of code that is executed when a certain event happens. Hooks can be used to set and reset conditions like the setup and teardown phases do. In Mocha, hooks are written within the _describe_ block.

    ```
    describe('example', () => {
    	afterEach(() => {
    		// teardown goes here
    	});

    	it('sample', () => {
    		// test goes here
    	});
    });
    ```

    -   `afterEach()`, `before()`, `beforeEach()`, and `after()` are all hooks available in the Mocha library.

-   `assert.equal()` does a `==` comparison for us
-   these two lines will achieve the same results, the second line being more _expressive_.:
    ```
    assert.ok(landAnimals[2] == waterAnimals[2]);
    assert.equal(landAnimals[2], waterAnimals[2]);
    ```
-   `assert.strictEqual` - does a `===` comparison. `strictEqual` is more expressive.
-   `assert.deepEqual` - used to compare the values within two objects. This method compares the values of each object using loose (`==`) equality
-   `deepEqual` will also compare array values (since they are objects) with loose equality.
-   Check for loose (`==`) equality with `assert.equal()`
-   Check for strict (`===`) equality with `assert.strictEqual()`
-   Check the equality of two object’s values with `assert.deepEqual()`
-   Make your tests expressive by using different `assert` methods found in the [Node.js documentation](https://nodejs.org/api/assert.html).
