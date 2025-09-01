import { test, expect } from "vitest";
import { CSSGridContainer, SizingType, GridChild, PlaceholderRect, TextContent } from "../types";

function isIntrinsicWidth(grid: CSSGridContainer): boolean {
  return grid.width.type === SizingType.INTRINSIC;
}

if (import.meta.vitest) {
  test("isIntrinsicWidth should return true for intrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
      children: [],
    };
    expect(isIntrinsicWidth(grid)).toBe(true);
  });

  test("isIntrinsicWidth should return false for extrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.EXTRINSIC },
      height: { type: SizingType.INTRINSIC },
      children: [],
    };
    expect(isIntrinsicWidth(grid)).toBe(false);
  });
}

function isExtrinsicWidth(grid: CSSGridContainer): boolean {
  return grid.width.type === SizingType.EXTRINSIC;
}

if (import.meta.vitest) {
  test("isExtrinsicWidth should return true for extrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.EXTRINSIC },
      height: { type: SizingType.INTRINSIC },
      children: [],
    };
    expect(isExtrinsicWidth(grid)).toBe(true);
  });

  test("isExtrinsicWidth should return false for intrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
      children: [],
    };
    expect(isExtrinsicWidth(grid)).toBe(false);
  });
}

function isIntrinsicHeight(grid: CSSGridContainer): boolean {
  return grid.height.type === SizingType.INTRINSIC;
}

if (import.meta.vitest) {
  test("isIntrinsicHeight should return true for intrinsic height sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
      children: [],
    };
    expect(isIntrinsicHeight(grid)).toBe(true);
  });

  test("isIntrinsicHeight should return false for extrinsic height sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.EXTRINSIC },
      children: [],
    };
    expect(isIntrinsicHeight(grid)).toBe(false);
  });
}

function isExtrinsicHeight(grid: CSSGridContainer): boolean {
  return grid.height.type === SizingType.EXTRINSIC;
}

if (import.meta.vitest) {
  test("isExtrinsicHeight should return true for extrinsic height sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.EXTRINSIC },
      children: [],
    };
    expect(isExtrinsicHeight(grid)).toBe(true);
  });

  test("isExtrinsicHeight should return false for intrinsic height sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
      children: [],
    };
    expect(isExtrinsicHeight(grid)).toBe(false);
  });
}

function createEmptyGrid(): CSSGridContainer {
  return {
    width: { type: SizingType.EXTRINSIC },
    height: { type: SizingType.INTRINSIC },
    children: [],
  };
}

if (import.meta.vitest) {
  test("createEmptyGrid should create a grid with extrinsic width and intrinsic height", () => {
    const grid = createEmptyGrid();
    expect(isExtrinsicWidth(grid)).toBe(true);
    expect(isIntrinsicHeight(grid)).toBe(true);
    expect(getChildren(grid)).toEqual([]);
  });
}

function addChild(grid: CSSGridContainer, child: GridChild): CSSGridContainer {
  return {
    ...grid,
    children: [...grid.children, child],
  };
}

if (import.meta.vitest) {
  test("addChild should add a PlaceholderRect child to the grid", () => {
    const grid = createEmptyGrid();
    const child: PlaceholderRect = { 
      width: { type: SizingType.FIXED, valuePx: 100 }, 
      height: { type: SizingType.FIXED, valuePx: 50 } 
    };
    const updatedGrid = addChild(grid, child);
    expect(getChildren(updatedGrid)).toHaveLength(1);
    expect(getChildren(updatedGrid)[0]).toEqual(child);
    expect(getChildren(grid)).toHaveLength(0);
  });

  test("addChild should add a TextContent child to the grid", () => {
    const grid = createEmptyGrid();
    const child: TextContent = { content: "test" };
    const updatedGrid = addChild(grid, child);
    expect(getChildren(updatedGrid)).toHaveLength(1);
    expect(getChildren(updatedGrid)[0]).toEqual(child);
    expect(getChildren(grid)).toHaveLength(0);
  });

  test("addChild should add multiple children", () => {
    const grid = createEmptyGrid();
    const child1: TextContent = { content: "test1" };
    const child2: PlaceholderRect = { 
      width: { type: SizingType.EXTRINSIC }, 
      height: { type: SizingType.FIXED, valuePx: 30 } 
    };
    const gridWithChild1 = addChild(grid, child1);
    const gridWithBoth = addChild(gridWithChild1, child2);
    
    expect(getChildren(gridWithBoth)).toHaveLength(2);
    expect(getChildren(gridWithBoth)[0]).toEqual(child1);
    expect(getChildren(gridWithBoth)[1]).toEqual(child2);
  });
}

function removeChild(grid: CSSGridContainer, index: number): CSSGridContainer {
  if (index < 0 || index >= grid.children.length) {
    return grid;
  }
  return {
    ...grid,
    children: grid.children.filter((_, i) => i !== index),
  };
}

if (import.meta.vitest) {
  test("removeChild should remove a child at the specified index", () => {
    const grid = createEmptyGrid();
    const child1: TextContent = { content: "test1" };
    const child2: TextContent = { content: "test2" };
    const gridWithChildren = addChild(addChild(grid, child1), child2);
    
    const updatedGrid = removeChild(gridWithChildren, 0);
    expect(getChildren(updatedGrid)).toHaveLength(1);
    expect(getChildren(updatedGrid)[0]).toEqual(child2);
  });

  test("removeChild should return unchanged grid for invalid index", () => {
    const grid = createEmptyGrid();
    const child: TextContent = { content: "test" };
    const gridWithChild = addChild(grid, child);
    
    expect(removeChild(gridWithChild, -1)).toEqual(gridWithChild);
    expect(removeChild(gridWithChild, 1)).toEqual(gridWithChild);
  });
}

function getChildren(grid: CSSGridContainer): GridChild[] {
  return [...grid.children];
}

if (import.meta.vitest) {
  test("getChildren should return a copy of the children array", () => {
    const grid = createEmptyGrid();
    const child: TextContent = { content: "test" };
    const gridWithChild = addChild(grid, child);
    
    const children = getChildren(gridWithChild);
    expect(children).toEqual([child]);
    expect(children).not.toBe(gridWithChild.children);
  });
}
