# Data Types

- **GridContainer**: CSS grid container with `display: grid` in CSS
  - Definition:
    - Can hold PlaceholderRect and TextContent types
  - Actions:
    - Creation:
      - Create an empty instance of GridContainer, with extrinsic width and intrinsic height by default
    - Sizing:
      - Check whether width is extrinsically or intrinsically sized
      - Check whether height is extrinsically or intrinsically sized
      - Query whether width or height uses intrinsic or extrinsic sizing
    - Children:
      - Add child elements (PlaceholderRect, TextContent) to the container
      - Remove child elements by index
      - Access child elements immutably (return copy to prevent mutations)
      - Maintain immutability when modifying child collections

- **PlaceholderRect**: Placeholder rectangle
  - Definition:
    - Can specify its sizing (either fixed or extrinsic)
    - Sizing is in width and height, and they can be specified individually
    - Examples:
      - If width is extrinsically sized, it behaves the same as the default width of `<div>`
      - If height is extrinsically sized, it behaves the same as `height: 100%` in CSS for `<div>`
  - Actions:
    - Creation:
      - Create a rectangle, by specifying the width only, then the height becomes intrinsically set
      - Create a rectangle, by specifying the height only, then the width becomes extrinsically set
      - Create a rectangle, by specifying the width and height T
    - Sizing Inspection:
      - Query whether width or height uses fixed or extrinsic sizing
      - Extract pixel values for fixed-sized dimensions
      - Handle extrinsic sizing gracefully by returning sizing type indicators
    - Dimension Modification:
      - Modify width or height values while preserving other properties
      - Always convert dimensions to fixed sizing when setting explicit pixel values
      - Maintain immutability by returning new instances rather than mutating originals

- **TextContent**: Holds content
  - Definition:
    - Container for text-based content
  - Actions:
    - Content Access:
      - Extract text content from TextContent objects
      - Analyze content properties such as length and emptiness
    - Content Modification:
      - Update text content while preserving object structure
      - Maintain immutability through copy-on-write semantics

# Design Principles

- **Immutability**: All modification operations return new objects rather than mutating existing ones, ensuring predictable behavior and preventing unintended side effects

- **Type Safety**: Operations handle both fixed and extrinsic sizing modes appropriately, with clear type indicators for different sizing strategies

- **Functional Design**: Actions are implemented as pure functions without side effects, making them composable and testable
