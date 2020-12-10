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
