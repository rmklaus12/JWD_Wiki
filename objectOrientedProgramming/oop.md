## Object-Oriented Programming

OOP
: Use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of. It is a collection of related data and/or functionality (which usually consists of several **variables** and **functions** - which are called **properties** and **methods** when they are inside objects.

**Note**: _It is useful to think about the way objects communicate as **message passing** — when an object needs another object to perform some kind of action often it sends a message to another object via one of its methods, and waits for a response, which we know as a return value._

-   Objects are also commonly used as data stores that can be easily sent across the network.

object literal
: we've literally written out the object contents as we've come to create it.

```
const objectName = {
	member1Name: member1Value,
	member2Name: member2Value,
	member3Name: member3Value
};
```

Dot notation
: the object name (objectName) acts as the **namespace** - it must be entered first to access anyting **encapsulated** inside the object. - Object data can be stored neatly (encapsulated) inside an object package (namespace) making it easy to structure and access.

```
objectName.member2Value
objectName.member1Value
```

Bracket notation
: Another way to access object properties

```
\\\ instead of
person.age
person.name.first
\\ use
person['age'],
person['name'['first']
```

Sub-namespace
: the value of an object member is another object. When using sub-name spaces, using [i] to access items will not work. Must use dot notation only `name.first`

```
const person = {
	name: ['Robin', 'Klaus'],
}

// sub-namespace
const person = {
	name: {
	first: 'Robin',
	last: 'Klaus'
	}
}

// dot notation
person.name.first
person.name.last
```

**Set (update) object member values**

```
\\ declare the member you want to set (using dot or bracket notation)
person.age = 45;
person['name'],['last'] = 'Hay';
```

You can also create new members

```
person['eyes'] = 'brown';
person.farewell = function() { alert("Bye everybody!"); }
```

Create all new names and values based on user input.
Note: _Adding a property to an object using the method above isn't possible with dot notation, which can only accept a literal member name, not a variable value pointing to a name._

```
let myDataName = nameInput.value;
let myDataValue = nameValue.value;
// add new member
person[myDataName] = myDataValue;
// example
let myDataName = 'height';
let myDataValue = '163cm';
person[myDataName] = myDataValue;
```

`this` keyword
: refers to the current object the code is being written inside.
(in this case `this` refers to `person`)

```
const person1 = {
	name: 'Robin',
	greeting: function() {
	alert('Hi! I\'m' + this.name + '.');
	}
}

const person2 = {
	name: 'Curl',
	greeting: function() {
	alert('Hi! I\'m' + this.name + '.');
	}
}
```

-   **Abstraction** is creating a simple model of a more complex thing. Like when we pull out data to write a message in the console.

-   JavaScript uses special functions called **constructor functions** to define and initialize objects and their features. A class's constructor function is run to create an object instance. This process of creating an object instance from a class is called **instantiation** — the object instance is **instantiated** from the class. **Object instances** are objects that contain the data and functionality defined in the class. Constructor functions are JavaScript's version of a class; it defines properties and methods. Constructor functions usually start with a capital letter.

-   **Child classes** can be made to **inherit** the data and code features of their **parent class**. You can reuse functionality common to all the object types rather than having to duplicate it.
    Inhertiting from another constructor `Person`:

```
function Teacher(first, last, age, gender, interests, subject) {
	Person.call(this, first, last, age, gender, interests);
this.subject = subject;
```

Inheriting from a constructor with no parameters:

```
function Brick() {
	this.width = 10;
	this.height = 20;
}

function BlueGlassBrick() {
	Brick.call(this);
	this.opacity = 0.5;
	this.color = 'blue';
```

-   **Polymorphism** is the ability of multiple object types to implement the same functionality.

-   The sharing of functionality between objects is often called **delegation**. Specialized objects delegate functionality to a generic object type.

**Other ways to create object instances**
Besides _object literals_ and _constructor functions_ you can also use:

-   The Object() constructor

````
// stores an empty object in the person1 variable
let person1 = new Object();
// add properties and methods to the object
person1.name = 'Robin';
person1['age'] = 51;
person1.greeting = function() {
	console.log('Hi! I\'m ' + this.name + '.');
};

// pass an object literal to the ```Object()```
// constructor as a parameter, to prefill.

let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
````

-   The create() method

```
// If you're only creating a few instances of an object // you can use the create() method which allows you to // create object instances without first creating
// constructors.
let person2 = Object.create(person1);
// person2 will be created based on person1 - the same properties and methods available to it.
```

**JSON**

-   JSON is a text-based data format following JavaScript object syntax
-   JSON exists as a string which is useful when you want to transmit data across a network.
-   JSON needs to be converted to a native JavaScript object when you want to access the data. JavaScript provides a global JSON object that has methods available for converting between the two.
-   JSON is purely a data format — it contains only properties, no methods.
-   JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
-   Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use. You can validate JSON using an application like JSONLint (Links to an external site.).
-   JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. A single string or number would be a valid JSON object.

**SOLID** - An acronym for five design principles intended to make software designs more understandable, flexible and maintainable. They are:

Single Responsibility Principle (SRP)
: A class should have a single responsibility, job or purpose.

Open/Closed Principle
: Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

Liskov’s Substitution Principle (LSP)
: Derived or child classes must be substitutable for their base or parent classes.

Interface Segregation Principle (ISP)
: do not force any client to implement an interface which is irrelevant to them.

**Dependency Inversion Principle (DIP)**

-   High level modules should not depend upon low level modules. Both should depend upon abstractions.
-   Abstractions should not depend upon details. Details should depend upon abstractions.

**Student Objectives**

1. Define a class with attributes and methods
2. Instantiate a class and call its methods
3. Use Object properties/attributes
4. Explain what the JSON format is and its importance
5. Define JavaScript objects using JSON format
6. Define a class with attributes and methods
7. Instantiate a class and call its methods
8. Use Object properties/attributes
