## Bootstrap

-   Bootstrap uses a grid system based on [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) which organizes content in rows or columns.
-   Bootstrap uses classes to apply CSS rulesets — these rulesets dictate the layout and styling of the element.
-   Containers
    -   `<div class="container"></div>`
        -   The `<div>` from the example above becomes a Bootstrap container which has a width relative to a user’s screen size, becomes horizontally centered, and has a left and right margin.
    -   `<div class="container-fluid"></div>`
        -   Here the container will take up the entire width of the screen
-   Rows
    -   rows are nested within containers.
    -   we can add as many rows as we want inside a container.
    -   By default, a row will take up the entire width of its parent container.
    -   To create a row we assign a `class` of `"row"` to an element.
    ```
        <div class="container">
    		<div class="row">
    		</div>
    	</div>
    ```
-   Columns
    -   Columns are the immediate children of rows and store content.
    -   By default, a column will take up the entire width of its parent row.
    -   As we add more columns inside a row, the default behavior is for each column’s width to be readjusted to fit in the row — each column will have the same width.
    -   At most, a row will accommodate 12 columns.
    ```
    <div  class="container">
    	<div  class="row">
    		  <div  class="col">
    		  </div>
    	</div>
    </div>
    ```
    -   We can change the width of a column by appending a hyphen and a number to the `"col"` class
    ```
    <div class="col-8">
    	<p>This is the width of 8 columns.</p>
    </div>
    ```
    -   If we decide to add an adjacent column, we could also set our desired width like so:
    ```
    <div  class="row">
    	<div  class="col-8">
    		<p>This is the width of 8 columns.</p>
    	</div>
    	<div class="col-4">
    		<p>This has the width of 4 columns.</p>
    	</div>
    </div>
    ```
    -   set column width with content
    -   If we want to use the content to set a column’s width, we append `"auto"` to the `class` of the column
    ```
    <div  class="col-auto">
    	<p>This content determines the width of the parent column</p>
    </div>
    ```
-   Breakpoints

    -   breakpoints allow for responsive design
    -   they tell the browser whre (based on window size) to change content and/or styling
    -   By using these breakpoints in combination with Bootstrap’s grid, we can customize the layout of our content for different screens.
    -   Bootstrap has 5 screen size categories

    | Category    | Breakpoint Range | Device Type           |
    | ----------- | ---------------- | --------------------- |
    | Extra small | < 576 px         | portrait smartphones  |
    | Small       | >= 576 px        | landscape smartphones |
    | Medium      | >= 768 px        | tablets               |
    | Large       | >= 992 px        | desktops              |
    | Extra Large | >= 1200 px       | large desktop         |

-   Naming conventions
    -   Using Bootstrap, we can freely change the layout of our content using grid. We can even customize how our content on the grid changes based on breakpoints (extra small, small, medium, large, extra large). To incorporate these breakpoints into our code, we have to follow Bootstrap’s class naming convention.
    -   The naming convention follows a pattern of `"col-{breakpoint}-{width}"`
        -   `"col"` refers to a column.
        -   `{breakpoint}` can be `sm`, `md`, `lg`, or `xl`. Notice that there is no extra small or `xs` breakpoint. If we omit `{breakpoint}`, it is by default for extra small screens.
        -   `{width}` can be set from `1` to `12` and assigns a width to the column.
        -   When we set a `{breakpoint}-{width}`, it means that we want our column to have that set width for screens that fit in the specified breakpoint range and other larger screens.
        ```
        <div class="col-sm-8">
        </div>
        ```
-   Combining classes
    -   We can add multiple classes to our columns for additional control over the rendering of our content.
        ```
        <div class="col-12 col-md-8 col-xl-6">
        </div>
        ```
    -   From the example, we have a column that renders a different width based on a user’s screen size.
        -   On _extra small_ and _small sized screens_, the column has a width of 12 individual columns.
        -   For _medium_ and _large sized screens_, the column has a width of 8 individual columns.
        -   For _extra large screens_, the column has a width of 6 individual columns.
-   Bootstrap 4 Grid Review (Codecademy)
    -   When in doubt, check [Bootstrap’s documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/).
    -   There are a few required links to use Bootstrap (the CSS file and two `<meta>` tags)
    -   Bootstrap 4 has a grid system implemented using flexbox
    -   The grid system is made of containers, rows, and columns that work together to make a web page’s layout.
    -   Containers are needed to implement the grid.
    -   Containers hold rows which hold columns.
    -   Bootstrap’s grid follows a 12 column system.
    -   Bootstrap uses responsive design and is built around breakpoints related to device screen sizes.
    -   To manually set the width of a column we have to follow Bootstrap’s naming convention.
    -   We can add multiple classes to a column to determine how wide a column should be on specific breakpoints.

### Resources

[Interactive Bootstrap Cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/)
