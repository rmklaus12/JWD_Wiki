Review: Accessibility

Using ARIA roles and properties, `alt` attributes, and semantic elements in your HTML is a simple way to make your website accessible to visually-impaired Internet users.

1.  Using semantic HTML elements whenever possible (such as `<header>` instead of `<div id="header">`) will allow screen reader users to navigate your website more efficiently.
2.  The `role` attribute is used to communicate information about the role of specific elements.
3.  `role="presentation"` allows a screen reader to skip markup elements that don’t directly contain useful information.
4.  `aria-label` and other ARIA properties can be used to help users perceive information that is communicated visually but not through text.
5.  The `alt` attribute should be added to every image element (and all other elements that support it) instead of `aria-label`. When used, its value should be a useful description of the image.
