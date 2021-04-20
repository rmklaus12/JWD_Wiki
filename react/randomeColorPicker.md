## Random Color Picker
In this project, we’ll build a program that helps designers think of new color schemes.

Our program will set the screen’s background to a random color. Clicking a button will refresh to a new, random color.  [Random generators](https://en.wikipedia.org/wiki/Oblique_Strategies)  are a well-known tool for breaking a creative rut.

project walkthrough video
[https://youtu.be/tiH5WiA5I2E](https://youtu.be/tiH5WiA5I2E)

### Tasks
1. Take a look at the  `Random`  component class.  `Random`‘s job is to store a random color, and to use that color to update the screen’s background.
First, let’s store this random color as  `state`.
Give  `Random`  a  `constructor()`  method. Give  `constructor()`  one parameter, named  `props`.
Inside the body of  `constructor()`, write the line  `super(props);`.
Still inside the body of  `constructor()`, on a new line, set  `this.state`  equal to this object:
```
{ color: [x, y, z] }
```
Instead of x, y, and z, use three numbers between 0 and 255.

2. Change the three numbers inside of the `color` array to three different numbers. Click Save. The background color should change!
3.   It would be nice to know what color we’re looking at!
In the  `render()`  method, inside of the  `<h1></h1>`, add the text,  `Your color is ___.`
Instead of  `___`, access  `this.state.color`!
4. That’s not a very friendly way to display a color!
In  `Random`, find the method named  `formatColor`. This method transforms an rgb array into something a bit more readable.
Inside of the  `<h1></h1>`, instead of simply using  `this.state.color`, call the  `formatColor`  function and pass in  `this.state.color`  as an argument.
5.   That’s a bit better!
A user should be able to click on a button to pick a new random color. In the code editor, you can see a  **Button.js**  file. That will be your button!
Select  **Button.js**. Add the word  `export`  so that you are exporting the  `Button`  component class.
6. Now, if you import  `Button`  into  **Random.js**, and you’ll get the  `Button`  component class that you want.
Select  **Random.js**. Near the top of the file, create a new line after  `import ReactDOM from 'react-dom';`.
On this new line, use  `import`  the  `Button`  component class.
**Button.js**  and  **Random.js**  share the same parent directory.
7.   Now you’re ready to render a  `<Button />`  instance!
Inside of  `Random`‘s render method, after the  `<h1></h1>`, add a  `<Button />`.
Give your  `<Button />`  this attribute:
```
light={this.isLight()}
```
8.   You can see your  `<Button />`  instance in the browser. However, clicking it doesn’t do anything!
You need to define an  _event handler_  that updates  `this.state.color`  to a new random color.
Give  `Random`  a new method named  `handleClick`.
Inside of  `.handleClick()`‘s body, call  `this.setState()`. As an argument, pass  `this.setState()`  an object with the following property:

```
color: this.chooseColor()
```
9.   
You just created a new method, that you will eventually use as an  _event handler_. Your new method uses  `this`.

That means that you need to  _bind_  your new method.

Add a new line to your  `constructor()`  method. On this new line, bind  `handleClick()`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM2MjM1NDc3NV19
-->