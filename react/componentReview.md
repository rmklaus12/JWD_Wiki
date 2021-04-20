### Code in  `render()`
```
class  Integer  extends  React.Component {  
	render() {  
		const value = 3.14;  
		const asInteger = Math.round(value);  
return  <p>{asInteger}</p>;  
	}  
}
```

A React component can contain JavaScript before any JSX is returned. The JavaScript before the  `return`  statement informs any logic necessary to render the component.

In the example code, we see JavaScript prior to the  `return`  statement which rounds the  `value`  to an integer.

### JSX Capitalization
```
// This is considered a component by React.  
<ThisComponent />  
  
// This is considered a JSX HTML tag.  
<div>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE0NTQ1Njg5XX0=
-->