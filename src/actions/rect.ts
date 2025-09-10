import { PlaceholderRect, SizingType } from "../types";

/**
 * Creates a PlaceholderRect with the specified dimensions.
 *
 * @example
 * // Create with width only (height becomes extrinsic)
 * createPlaceholderRect({ widthPx: 100 })
 * @example
 * // Create with height only (width becomes extrinsic)
 * createPlaceholderRect({ heightPx: 50 })
 * @example
 * // Create with both dimensions
 * createPlaceholderRect({ widthPx: 100, heightPx: 50 })
 *
 */
export function createPlaceholderRect(
  options:
    | {
        widthPx: number;
        heightPx: number;
      }
    | { widthPx: number }
    | { heightPx: number }
): PlaceholderRect {
  if ("widthPx" in options && "heightPx" in options) {
    return {
      width: { type: SizingType.FIXED, valuePx: options.widthPx },
      height: { type: SizingType.FIXED, valuePx: options.heightPx },
    };
  } else if ("widthPx" in options) {
    return {
      width: { type: SizingType.FIXED, valuePx: options.widthPx },
      height: { type: SizingType.EXTRINSIC },
    };
  } else {
    return {
      width: { type: SizingType.EXTRINSIC },
      height: { type: SizingType.FIXED, valuePx: options.heightPx },
    };
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test("createPlaceholderRect should create rect with width only", () => {
    const rect = createPlaceholderRect({ widthPx: 100 });
    expect(getWidthPx(rect)).toEqual(100);
    expect(getHeightPx(rect)).toEqual(SizingType.EXTRINSIC);
  });

  test("createPlaceholderRect should create rect with height only", () => {
    const rect = createPlaceholderRect({ heightPx: 50 });
    expect(getWidthPx(rect)).toEqual(SizingType.EXTRINSIC);
    expect(getHeightPx(rect)).toEqual(50);
  });

  test("createPlaceholderRect should create rect with both width and height", () => {
    const rect = createPlaceholderRect({ widthPx: 100, heightPx: 50 });
    expect(getWidthPx(rect)).toEqual(100);
    expect(getHeightPx(rect)).toEqual(50);
  });
}

function isFixedWidth(rect: PlaceholderRect): boolean {
  return rect.width.type === SizingType.FIXED;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test("isFixedWidth should return true for fixed sizing", () => {
    const rect: PlaceholderRect = createPlaceholderRect({
      widthPx: 100,
      heightPx: 50,
    });
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
  const { test, expect } = import.meta.vitest;
  test("isFixedHeight should return true for fixed sizing", () => {
    const rect: PlaceholderRect = createPlaceholderRect({
      widthPx: 100,
      heightPx: 50,
    });
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
  const { test, expect } = import.meta.vitest;
  test("getWidthPx should return value for fixed sizing", () => {
    const rect: PlaceholderRect = createPlaceholderRect({
      widthPx: 150,
      heightPx: 75,
    });
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
  const { test, expect } = import.meta.vitest;
  test("getHeightPx should return value for fixed sizing", () => {
    const rect: PlaceholderRect = createPlaceholderRect({
      widthPx: 100,
      heightPx: 150,
    });
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
  const { test, expect } = import.meta.vitest;
  test("changeWidth should change the width", () => {
    const rect: PlaceholderRect = createPlaceholderRect({
      widthPx: 100,
      heightPx: 50,
    });
    const result = changeWidth(rect, 200);
    expect(getWidthPx(result)).toBe(200);
    expect(getWidthPx(rect)).toBe(100); // Original rect should not be modified
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
  const { test, expect } = import.meta.vitest;
  test("changeHeight should change the height", () => {
    const rect: PlaceholderRect = createPlaceholderRect({
      widthPx: 100,
      heightPx: 50,
    });
    const result = changeHeight(rect, 200);
    expect(getHeightPx(result)).toBe(200);
    expect(getHeightPx(rect)).toBe(50); // Original rect should not be modified
  });
}
