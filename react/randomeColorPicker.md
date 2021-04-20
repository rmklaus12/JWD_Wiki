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
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA1MDg2NDM1NV19
-->