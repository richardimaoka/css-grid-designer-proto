# Development Guidelines

## Feature Development Workflow

- **Specifications First**: When working on a new feature, update `.claude/specifications/` first, before updating `src/`
- **Documentation-Driven Development**: Ensure specifications are complete and accurate before implementing code

## Testing Standards

- **Test Execution**: When updating `src/actions`, always run vitest and make sure tests pass
- **Test Failures**: If tests fail, ask for advice rather than randomly fixing implementation
- **Test Organization**: Add in-source unit tests right after each function, instead of at the bottom of the file

## Code Organization

- **Function-Test Pairing**: Each function should be immediately followed by its test block using `if (import.meta.vitest)`
- **Immutability**: All modification operations return new objects rather than mutating existing ones
- **Type Safety**: Operations handle different sizing modes appropriately with clear type indicators
- **Functional Design**: Actions implemented as pure functions without side effects

## File Structure

- Specifications: `.claude/specifications/`
- Implementation: `src/actions/`
- Types: `src/types.ts`