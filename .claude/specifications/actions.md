# Actions

## PlaceholderRect Operations

### Sizing Inspection
- Query whether width or height uses fixed or extrinsic sizing
- Extract pixel values for fixed-sized dimensions
- Handle extrinsic sizing gracefully by returning sizing type indicators

### Dimension Modification  
- Modify width or height values while preserving other properties
- Always convert dimensions to fixed sizing when setting explicit pixel values
- Maintain immutability by returning new instances rather than mutating originals

## TextContent Operations

### Content Access
- Extract text content from TextContent objects
- Analyze content properties such as length and emptiness

### Content Modification
- Update text content while preserving object structure
- Maintain immutability through copy-on-write semantics

## Design Principles

### Immutability
All modification operations return new objects rather than mutating existing ones, ensuring predictable behavior and preventing unintended side effects.

### Type Safety
Operations handle both fixed and extrinsic sizing modes appropriately, with clear type indicators for different sizing strategies.

### Functional Design
Actions are implemented as pure functions without side effects, making them composable and testable.