# React

`import React from 'react'`
`import React, { component } from 'react';`

### Stateful and Stateless components or classes

-   Has a state, or doesn't
-   Also known as container & presentational or smart & dumb
-   Stateful components keep track of changing data and stateless components print out what is given to them via props, or they always render the same thing.
-   Components should be kept as simple and stateless as possible
-   When to make a component stateful or stateless:
    1.  Type out or visualize your website as if it were _one_ component. Busy, right? Break it down from there into smaller components.
    2.  You’ll need state _somewhere_ when information dynamically changes, like a user’s current favorite songs or top scores. Aim to have a parent component keep all the information, and pass it down to its children stateless components.
-   Rendering is the only way for a component to pass `props` to another component. Any component rendered by a different component must be included in an `export` statement:
    ```
    import  React  from  'react';
    export  class  Child  extends  React.Component {
    	render() {
    		return <h1>Hey,my name is {this.props.name}</h1>;
    	}
    }
    ```
-   A parent component passes its state to a child component. Need to import parent into child first.
-   How a stateless, child component updates the state of the parent component;
    1.  The _parent_ component class defines a method that calls `this.setState()`
    2.  The parent component binds the newly-defined method to the curent instance of the component in its contructor. This ensures that when we pass the method to the child component, it will still update the parent component.
    3.  Once the _parent_ has defined a method that updates its state and bound to it, the parent then passes that method down to a _child_.
    4.  the _child_ recieves the passed-down function, and uses it as an event handler.

Stateful component:

```javascript
class Main extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };
    }
    render() {
        <BooksList books={this.state.books} />;
    }
}
```

Stateless component:

```javascript
const BooksList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => {
                return <li>book</li>;
            })}
        </ul>
    );
};
```

`import ReactDOM from 'react-dom'`

```
class Parent extends React.Component {
	render() {
		return <div></div>;
	}
 }
```
