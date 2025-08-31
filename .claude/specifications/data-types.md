# Data Types

## GridContainer

GridContainer is for a CSS grid container, having `display: grid` in CSS.
GridContainer can hold PlaceholderRect, TextContent, and GridContainer types.

## PlaceholderRect 

PlaceholderRect is for a placeholder rectangle.

PlaceholderRect can specify its sizing. 
- Sizing should be either fixed or extrinsic. 
- Sizing is in width and height, and they can be specified individually.

For example:
- If width is extrinsically sized, it behaves the same as the default width of `<div>`
- If height is extrinsically sized, it behaves the same as `height: 100%` in CSS for `<div>`

## TextContent

TextContent holds content.
