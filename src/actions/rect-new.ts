import {
  FixedWidth,
  JustifyType,
  SizingTypeNew,
  FixedHeight,
  AlignType,
  StretchWidth,
  StretchHeight,
  PlaceholderRectNew,
} from "../types";

export function widthCenter(widthPx: number): FixedWidth {
  return {
    type: SizingTypeNew.FIXED,
    justifySelf: JustifyType.CENTER,
    valuePx: widthPx,
  };
}

export function widthStart(widthPx: number): FixedWidth {
  return {
    type: SizingTypeNew.FIXED,
    justifySelf: JustifyType.START,
    valuePx: widthPx,
  };
}

export function widthEnd(widthPx: number): FixedWidth {
  return {
    type: SizingTypeNew.FIXED,
    justifySelf: JustifyType.END,
    valuePx: widthPx,
  };
}

export const stretchWidth: StretchWidth = {
  type: SizingTypeNew.STRETCH,
  justifySelf: JustifyType.STRETCH,
};

export function heightCenter(heightPx: number): FixedHeight {
  return {
    type: SizingTypeNew.FIXED,
    alignSelf: AlignType.CENTER,
    valuePx: heightPx,
  };
}

export function heightStart(heightPx: number): FixedHeight {
  return {
    type: SizingTypeNew.FIXED,
    alignSelf: AlignType.START,
    valuePx: heightPx,
  };
}

export function heightEnd(heightPx: number): FixedHeight {
  return {
    type: SizingTypeNew.FIXED,
    alignSelf: AlignType.END,
    valuePx: heightPx,
  };
}

export const stretchHeight: StretchHeight = {
  type: SizingTypeNew.STRETCH,
  alignSelf: AlignType.STRETCH,
};

export function createPlaceholderRectNew(
  width: FixedWidth | StretchWidth,
  height: FixedHeight | StretchHeight
): PlaceholderRectNew {
  return {
    width,
    height,
  };
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("createPlaceholderRectNew", () => {
    it("should create a placeholder rect with fixed width and height", () => {
      const rect = createPlaceholderRectNew(
        widthCenter(100),
        heightCenter(200)
      );
      expect(rect).toEqual({
        width: {
          type: SizingTypeNew.FIXED,
          justifySelf: JustifyType.CENTER,
          valuePx: 100,
        },
        height: {
          type: SizingTypeNew.FIXED,
          alignSelf: AlignType.CENTER,
          valuePx: 200,
        },
      });
    });

    it("should create a placeholder rect with stretch width and height", () => {
      const rect = createPlaceholderRectNew(stretchWidth, stretchHeight);
      expect(rect).toEqual({
        width: {
          type: SizingTypeNew.STRETCH,
          justifySelf: JustifyType.STRETCH,
        },
        height: {
          type: SizingTypeNew.STRETCH,
          alignSelf: AlignType.STRETCH,
        },
      });
    });

    it("should create a placeholder rect with fixed width and stretch height", () => {
      const rect = createPlaceholderRectNew(widthStart(150), stretchHeight);
      expect(rect).toEqual({
        width: {
          type: SizingTypeNew.FIXED,
          justifySelf: JustifyType.START,
          valuePx: 150,
        },
        height: {
          type: SizingTypeNew.STRETCH,
          alignSelf: AlignType.STRETCH,
        },
      });
    });

    it("should create a placeholder rect with stretch width and fixed height", () => {
      const rect = createPlaceholderRectNew(stretchWidth, heightEnd(250));
      expect(rect).toEqual({
        width: {
          type: SizingTypeNew.STRETCH,
          justifySelf: JustifyType.STRETCH,
        },
        height: {
          type: SizingTypeNew.FIXED,
          alignSelf: AlignType.END,
          valuePx: 250,
        },
      });
    });
  });
}
