# CSS

### CSS Selectors

-   a CSS **rule**:
    `selector{ property: value;}`
    Can be read as:
    `who{what: how;}`
-   **Selector** defines _who_ is targeted (which HTML element(s))
-   **Property** defines _what_ characteristic to alter
-   **Value** defines _how_ to alter that characteristic
-   _Generic tag_ selectors
    -   Easy! Just use the tag name

```
	a{ /* Links */ }
	p{ /* Paragraph */ }
	ul{ /* Unordered List */ }
	li[ /* List Items */ }
```

-   _Class_
    -   Defines a _group_ of HTML elements. Classes are designated with a `.`
        ```
        .name {
        	color: purple;
        }
        ```
        -   The class must also be designated in the HTML
        ```
        <p class="name">
        	Robin
        </p>
        ```
        -   Class names can be used multiple times
-   _Id_
    -   Similar to _class_ except designated with a `#` and **must** be unique (can only be used once in the HTML code)
-   _Selectors_ can be combined
-   _Selectors_ can have a hierarchy (ancestor/dependent) and have a space between the selectors in a CSS rule.
    ```
    header a {
    	color: blue;
    }
    ```
    "Select all `a` elements that are within a `header` element. "
-   _Pseudo-class_ selectors
    -   HTML with different states can be targeted with a pseudo-class
        ```
        a {
        	color: blue;
        }
        a:hover {
        	color: purple;
        }
        ```

### CSS Display

**Every element on a web page is a rectangular box**
This is refered to as the "box model"
**Box Model**

-   refers to the box that wraps around every HTML element. It consists of:
    -   the content - text and images
    -   padding - the area around the content. It is transparent
    -   border - around the padding and content. Can be hidden or styled
    -   margin - the area outside the border. It is transparent

**Display types**

-   _display: inline_ - the default of all elements; ignores `height` and `width`. Margin and padding can be used and will push other elements away horizontally.
-   _display: inline-block_ - characteristics of block, but sits inline with the natural flow of the text. `height` and `width` can be set
-   _display: block_ - Some elements are set to block by the browser UA stylesheet. These elements include `<div>`, `<section>`, and `<ul>`, as well as text "blocks" such as `<p>` and `<h1>`. Block elements do not sit inline. By default (without setting a width) they take up as much horizontal space as they can.
-   _display: grid_ - generates a block-level grid
-   _display: inline-grid_ - characteristics of grid, but sits on a line
-   _display: flex_- generates a block flex container
-   _display: inline-flex_ - generates an inline flex container

### CSS Grid

Grid is a 2-dimensional system, handling both rows and columns. CSS rules are applied to both the parent element (grid container) and any child elements (grid items).

### Flexbox

-   CSS columns have no effect on a flex container

### Typography

### CSS Comments

`/* one line comment*/`

```
/*
multi-line comments should be written
like this.
*/
```

### CSS Selectors Review (Codecademy)

-   CSS can change the look of HTML elements. In order to do this, CSS must select HTML elements, then apply styles to them.
-   CSS can select HTML elements by tag, class, or ID.
-   Multiple CSS classes can be applied to one HTML element.
-   Classes can be reusable, while IDs can only be used once.
-   IDs are more specific than classes, and classes are more specific than tags. That means IDs will override any styles from a class, and classes will override any styles from a tag selector.
-   Multiple selectors can be chained together to select an element. This raises the specificity, but can be necessary.
-   Nested elements can be selected by separating selectors with a space.
-   Multiple unrelated selectors can receive the same styles by separating the selector names with commas.

### Box Model Review (Codecademy)

1.  The box model comprises a set of properties used to create space around and between HTML elements.
2.  The height and width of a content area can be set in pixels or percentage.
3.  Borders surround the content area and padding of an element. The color, style, and thickness of a border can be set with CSS properties.
4.  Padding is the space between the content area and the border. It can be set in pixels or percent.
5.  Margin is the amount of spacing outside of an element’s border.
6.  Horizontal margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one element and the left margin of the adjacent element.
7.  Vertical margins collapse, so the space between vertically adjacent elements is equal to the larger margin.
8.  `margin: 0 auto` horizontally centers an element inside of its parent content area, if it has a width.
9.  The `overflow` property can be set to `display`, `hide`, or `scroll`, and dictates how HTML will render content that overflows its parent’s content area.
10. The `visibility` property can hide or show elements.

### References

-   [Codrops CSS Reference](http://tympanus.net/codrops/css_reference/)
-   [CSS Color Units](https://marksheet.io/css-color-units.html)
-   [Google Fonts](https://fonts.google.com/)
