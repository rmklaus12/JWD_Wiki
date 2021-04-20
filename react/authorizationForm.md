## Authorization Form

A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.
They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by using a React component to set up a simple authorization layer.

Walkthrough video.
https://www.youtube.com/watch?v=NQJBKX73jQc

### Tasks
1.   The contact info in the browser looks fine, but it should be hidden until you enter a password! 
Look in the code editor. You can see a  `Contact`  component class.  `Contact`‘s instructions object has three methods:  `constructor()`,  `.authorize()`, and  `.render()`.
`constructor()`  is a special method. You’ll learn about it in the next unit. For now, just know that you can check whether a user has entered the right password by running the expression  `this.state.authorized`.
2. Let’s start with the  `<h1></h1>`  in the render function.
Right now, the  `<h1></h1>`  displays the text  `Contact`. If a user hasn’t been authorized, then you want the  `<h1></h1>`  to display  `Enter the Password`  instead.
Make the  `<h1></h1>`  display  `Contact`  _only_  if  `this.state.authorized`  is true. If  `this.state.authorized`  is false, then the  `<h1></h1>`  should display  `Enter the Password`.
3.   The browser should say ‘Enter the Password.’
To make sure it’s working properly, edit the  `constructor()`  method so that the user is authorized:
	```
	constructor(props) {  
		super(props);  
		this.state = {  
			password: 'swordfish',  
			authorized: true  
		};  
		this.authorize = this.authorize.bind(this);  
	}
	```

This should change the text back to ‘Contact’.

If it works, then make sure to change  `authorized`  back to  `false`!
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQzMzk5NTU0NV19
-->