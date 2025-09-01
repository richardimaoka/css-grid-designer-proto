import { test, expect } from "vitest";
import { CSSGridContainer, SizingType, GridChild } from "../types";

function isIntrinsicWidth(grid: CSSGridContainer): boolean {
  return grid.width.type === SizingType.INTRINSIC;
}

if (import.meta.vitest) {
  test("isIntrinsicWidth should return true for intrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
    };
    expect(isIntrinsicWidth(grid)).toBe(true);
  });

  test("isIntrinsicWidth should return false for extrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.EXTRINSIC },
      height: { type: SizingType.INTRINSIC },
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
    };
    expect(isExtrinsicWidth(grid)).toBe(true);
  });

  test("isExtrinsicWidth should return false for intrinsic width sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
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
    };
    expect(isIntrinsicHeight(grid)).toBe(true);
  });

  test("isIntrinsicHeight should return false for extrinsic height sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.EXTRINSIC },
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
    };
    expect(isExtrinsicHeight(grid)).toBe(true);
  });

  test("isExtrinsicHeight should return false for intrinsic height sizing", () => {
    const grid: CSSGridContainer = {
      width: { type: SizingType.INTRINSIC },
      height: { type: SizingType.INTRINSIC },
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
  });
}
