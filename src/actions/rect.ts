import { test, expect } from "vitest";
import { PlaceholderRect, SizingType } from "../types";

function isFixedWidth(rect: PlaceholderRect): boolean {
  return rect.width.type === SizingType.FIXED;
}

if (import.meta.vitest) {
  test("isFixedWidth should return true for fixed sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.FIXED, valuePx: 50 },
    };
    expect(isFixedWidth(rect)).toBe(true);
  });

  test("isFixedWidth should return false for extrinsic sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.EXTRINSIC },
      height: { type: SizingType.FIXED, valuePx: 50 },
    };
    expect(isFixedWidth(rect)).toBe(false);
  });
}

function isFixedHeight(rect: PlaceholderRect): boolean {
  return rect.height.type === SizingType.FIXED;
}

if (import.meta.vitest) {
  test("isFixedHeight should return true for fixed sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.FIXED, valuePx: 50 },
    };
    expect(isFixedHeight(rect)).toBe(true);
  });

  test("isFixedHeight should return false for extrinsic sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.EXTRINSIC },
    };
    expect(isFixedHeight(rect)).toBe(false);
  });
}

function getWidthPx(rect: PlaceholderRect): number | SizingType.EXTRINSIC {
  if (rect.width.type === SizingType.EXTRINSIC) {
    return SizingType.EXTRINSIC;
  } else {
    return rect.width.valuePx;
  }
}

if (import.meta.vitest) {
  test("getWidthPx should return value for fixed sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 150 },
      height: { type: SizingType.FIXED, valuePx: 75 },
    };
    expect(getWidthPx(rect)).toBe(150);
  });

  test("getWidthPx should return EXTRINSIC for extrinsic sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.EXTRINSIC },
      height: { type: SizingType.FIXED, valuePx: 75 },
    };
    expect(getWidthPx(rect)).toBe(SizingType.EXTRINSIC);
  });
}

function getHeightPx(rect: PlaceholderRect): number | SizingType.EXTRINSIC {
  if (rect.height.type === SizingType.EXTRINSIC) {
    return SizingType.EXTRINSIC;
  } else {
    return rect.height.valuePx;
  }
}

if (import.meta.vitest) {
  test("getHeightPx should return value for fixed sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.FIXED, valuePx: 150 },
    };
    expect(getHeightPx(rect)).toBe(150);
  });

  test("getHeightPx should return EXTRINSIC for extrinsic sizing", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.EXTRINSIC },
    };
    expect(getHeightPx(rect)).toBe(SizingType.EXTRINSIC);
  });
}

function changeWidth(rect: PlaceholderRect, widthPx: number): PlaceholderRect {
  return {
    ...rect,
    width: { type: SizingType.FIXED, valuePx: widthPx },
  };
}

if (import.meta.vitest) {
  test("changeWidth should change the width", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.FIXED, valuePx: 50 },
    };
    const result = changeWidth(rect, 200);
    expect(getWidthPx(result)).toBe(200);
  });
}

function changeHeight(
  rect: PlaceholderRect,
  heightPx: number
): PlaceholderRect {
  return {
    ...rect,
    height: { type: SizingType.FIXED, valuePx: heightPx },
  };
}

if (import.meta.vitest) {
  test("changeHeight should change the height", () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.FIXED, valuePx: 100 },
      height: { type: SizingType.FIXED, valuePx: 50 },
    };
    const result = changeHeight(rect, 200);
    expect(getHeightPx(result)).toBe(200);
  });
}
