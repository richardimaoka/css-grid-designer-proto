import { PlaceholderType, Row } from "./types";

function appendChild(
  children: PlaceholderType[],
  newChild: PlaceholderType
): PlaceholderType[] {
  return [...children, newChild];
}

function addChild(parent: Row, newChild: PlaceholderType): Row {
  return {
    ...parent,
    children: appendChild(parent.children, newChild),
  };
}

// In-source test for addChild function
if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("addChild adds newChild to parent children array", () => {
    const parent: Row = { children: [] };
    const newChild: PlaceholderType = { width: 100, height: 50 };

    const result = addChild(parent, newChild);
    expect(result.children).toContain(newChild);
    expect(result.children.length).toBe(parent.children.length + 1);
  });

  test("addChild does not modify original parent object", () => {
    const parent: Row = { children: [] };
    const newChild: PlaceholderType = { width: 100, height: 50 };

    addChild(parent, newChild);

    expect(parent.children.length).toBe(0);
    expect(parent.children).not.toContain(newChild);
  });
}
