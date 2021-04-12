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
    ```javascript
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

```javascript
class Parent extends React.Component {
    	render() {
        		return <div></div>;
    }
}
```

Render React to DOM

```javascript
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('element-id'));
```

**Pass Props to a Stateless Functional Component**

In React, you can pass props, or properties, to child components. Say you have an `App` component which renders a child component called `Welcome` which is a stateless functional component. You can pass `Welcome` a `user` property by writing:

```jsx
<App>
    <Welcome user="Mark" />
</App>
```

You use **custom HTML attributes** created by you and supported by React to be passed to the component. In this case, the created property `user` is passed to the component `Welcome`. Since `Welcome` is a stateless functional component, it has access to this value like so:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>;
```

It is standard to call this value `props` and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

arrays can be passed as `props`. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```jsx
<ParentComponent>
    <ChildComponent colors={['green', 'blue', 'red']} />
</ParentComponent>
```

Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

The child component then has access to the array property `colors`. Array methods such as `join()` can be used when accessing the property. `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` This will join all `colors` array items into a comma separated string and produce: `<p>green, blue, red</p>` Later, we will learn about other common methods to render arrays of data in React.

React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string `San Francisco`, unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set `propTypes` on your component to require the data to be of type `array`. This will throw a useful warning when the data is of any other type.

It's considered a best practice to set `propTypes` when you know the type of a prop ahead of time. You can define a `propTypes` property for a component in the same way you defined `defaultProps`. Doing this will check that props of a given key are present with a given type. Here's an example to require the type `function` for a prop called `handleClick`:

`MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }`

In the example above, the `PropTypes.func` part checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is a required property for that component. You will see a warning if that prop isn't provided. Also notice that `func` represents `function`. Among the seven JavaScript primitive types, `function` and `boolean` (written as `bool`) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the [documentation](https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type) for all of the options.

**Note:** As of React v15.5.0, `PropTypes` is imported independently from React, like this: `import PropTypes from 'prop-types';`

what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write `{this.props.data}` in JSX.

A _stateless functional component_ is any function you write which accepts props and returns JSX. A _stateless component_, on the other hand, is a class that extends `React.Component`, but does not use internal state (covered in the next challenge). Finally, a _stateful component_ is a class component that does maintain its own internal state. **You may see stateful components referred to simply as components or React components.**

_A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible._ This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

One of the most important topics in React is `state`. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

You create state in a React component by declaring a `state` property on the component class in its `constructor`. This initializes the component with `state` when it is created. The `state` property must be set to a JavaScript `object`. Declaring it looks like this:

```jsx
this.state = {};
```

You have access to the `state` object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The `state` object can be as complex or as simple as you need it to be. Note that you must create a class component by extending `React.Component` in order to create `state` like this.

Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in `state` in its `render()` method. You can access the data with `this.state`.

If you want to access a state value within the `return` of the render method, you have to enclose the value in curly braces.

`state` is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other components are aware of its `state`. Its `state` is completely encapsulated, or local to that component, unless you pass state data to a child component as `props`. This notion of encapsulated `state` is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

There is another way to access `state` in a component. In the `render()` method, before the `return` statement, you can write JavaScript directly. For example, you could declare functions, access data from `state` or `props`, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the `return` statement.

There is also a way to change the component's `state`. React provides a method for updating component `state` called `setState`. You call the `setState` method within your component class like so: `this.setState()`, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a `username` in state and wanted to update it, it would look like this:

```jsx
this.setState({
    username: 'Lewis',
});
```

React expects you to never modify `state` directly, instead always use `this.setState()` when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the `setState` method can be asynchronous. There is an alternative syntax for the `setState` method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the [React documentation](https://facebook.github.io/react/docs/state-and-lifecycle.html) for further details.

In addition to setting and updating `state`, you can also define methods for your component class. A class method typically needs to use the `this` keyword so it can access properties on the class (such as `state` and `props`) inside the scope of the method. There are a few ways to allow your class methods to access `this`.

One common way is to explicitly bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used `this.handleClick = this.handleClick.bind(this)` for its `handleClick` method in the constructor. Then, when you call a function like `this.setState()` within your class method, `this` refers to the class and will not be `undefined`.

**Note:** The `this` keyword is one of the most confusing aspects of JavaScript but it plays an important role in React.	}
 }
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIyNjUwOTk4Nl19
-->