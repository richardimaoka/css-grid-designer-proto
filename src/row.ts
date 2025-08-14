import { ChildType, Row } from "./types";

function addChild(parent: Row, newChild: ChildType): Row {
  return {
    ...parent,
    children: [...parent.children, newChild],
  };
}

// In-source test for addChild function
if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("addChild adds newChild to parent children array", () => {
    const parent: Row = { children: [] };
    const newChild: ChildType = { width: 100, height: 50 };

    const result = addChild(parent, newChild);

    expect(result.children).toContain(newChild);
    expect(result.children.length).toBe(1);
  });

  test("addChild does not modify original parent object", () => {
    const originalChild: ChildType = { radius: 25 };
    const parent: Row = { children: [originalChild] };
    const newChild: ChildType = { width: 100, height: 50 };

    const result = addChild(parent, newChild);

    expect(parent.children.length).toBe(1);
    expect(parent.children).not.toContain(newChild);
  });
}
