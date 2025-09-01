# Data Types

## GridContainer

GridContainer is for a CSS grid container, having `display: grid` in CSS.
GridContainer can hold PlaceholderRect, TextContent, and GridContainer types.

### Actions

#### Creation

- Create an instance of GridContainer, with extrinsic width and intrinsic height by default

#### Extrinsic or Intrinsic Sizing

- Check whether whether is extrinsically or intrinsically sized
- Check whether height is extrinsically or intrinsically sized


#### Create GridContainer

- Create empty GridContainer

#### Inspecting and Changing Sizing

- Query whether width or height uses intrinsic or extrinsic sizing

#### Child Management

- Add child elements (PlaceholderRect, TextContent) to the container
- Remove child elements by index
- Access child elements immutably (return copy to prevent mutations)
- Maintain immutability when modifying child collections

## PlaceholderRect 

### Definition

PlaceholderRect is for a placeholder rectangle.

PlaceholderRect can specify its sizing. 
- Sizing should be either fixed or extrinsic. 
- Sizing is in width and height, and they can be specified individually.

For example:
- If width is extrinsically sized, it behaves the same as the default width of `<div>`
- If height is extrinsically sized, it behaves the same as `height: 100%` in CSS for `<div>`

### Actions

#### Sizing Inspection
- Query whether width or height uses fixed or extrinsic sizing
- Extract pixel values for fixed-sized dimensions
- Handle extrinsic sizing gracefully by returning sizing type indicators

#### Dimension Modification  
- Modify width or height values while preserving other properties
- Always convert dimensions to fixed sizing when setting explicit pixel values
- Maintain immutability by returning new instances rather than mutating originals


## TextContent

TextContent holds content.

### Actions

#### Content Access
- Extract text content from TextContent objects
- Analyze content properties such as length and emptiness

#### Content Modification
- Update text content while preserving object structure
- Maintain immutability through copy-on-write semantics


# Design Principles

## Immutability
All modification operations return new objects rather than mutating existing ones, ensuring predictable behavior and preventing unintended side effects.

## Type Safety
Operations handle both fixed and extrinsic sizing modes appropriately, with clear type indicators for different sizing strategies.

## Functional Design
Actions are implemented as pure functions without side effects, making them composable and testable
