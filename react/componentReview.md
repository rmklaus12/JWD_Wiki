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
```
React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it’s a component instance; if not, then it’s an HTML element.

### Object Properties As Attribute Values

    const seaAnemones = {  
	    src:'https://commons.wikimedia.org/wiki/Category:Images#/media/File:Anemones_0429.jpg',  
	    alt: 'Sea Anemones',  
	    width: '300px',  
    };  
      
    class  SeaAnemones  extends  React.Component {  
	    render() {  
		    return (  
			    <div>  
				    <h1>Colorful  Sea  Anemones</h1>  
				    <img  
					    src={seaAnemones.src}  
					    alt={seaAnemones.alt}  
					    width={seaAnemones.width}  
					/>  
			    </div>  
			   );  
		    }  
	    }
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTIwNDQ4MTQzXX0=
-->