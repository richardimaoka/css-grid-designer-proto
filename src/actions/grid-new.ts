import {
  CSSGridContainerNew,
  HugHeight,
  HugWidth,
  PlaceholderRectNew,
  SizingTypeNew,
} from "../types";
import {
  createPlaceholderRectNew,
  heightCenter,
  stretchHeight,
  stretchWidth,
  widthCenter,
} from "./rect-new";

export const hugWidth: HugWidth = {
  type: SizingTypeNew.HUG,
};

export const hugHeight: HugHeight = {
  type: SizingTypeNew.HUG,
};

/**
 *
 * @param rect
 */
function encloseInGrid(rect: PlaceholderRectNew): CSSGridContainerNew {
  const gridWidth =
    rect.width.type === SizingTypeNew.STRETCH ? stretchWidth : hugWidth;
  const gridHeight =
    rect.height.type === SizingTypeNew.STRETCH ? stretchHeight : hugHeight;

  return {
    width: gridWidth,
    height: gridHeight,
    children: [rect],
  };
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("encloseInGrid", () => {
    it("should enclose a fixed width/height placeholder rect into a hug width/height CSS grid", () => {
      const rect = createPlaceholderRectNew(
        widthCenter(100),
        heightCenter(100)
      );
      const grid = encloseInGrid(rect);
      expect(grid).toEqual({
        width: hugWidth,
        height: hugHeight,
        children: [rect],
      });
    });

    it("should enclose a stretch width/fixed height placeholder rect into a stretch width/hug height CSS grid", () => {
      const rect = createPlaceholderRectNew(stretchWidth, heightCenter(100));
      const grid = encloseInGrid(rect);
      expect(grid).toEqual({
        width: stretchWidth,
        height: hugHeight,
        children: [rect],
      });
    });

    it("should enclose a fixed width/stretch height placeholder rect into a hug width/stretch height CSS grid", () => {
      const rect = createPlaceholderRectNew(widthCenter(100), stretchHeight);
      const grid = encloseInGrid(rect);
      expect(grid).toEqual({
        width: hugWidth,
        height: stretchHeight,
        children: [rect],
      });
    });

    it("should enclose a stretch width/height placeholder rect into a stretch width/height CSS grid", () => {
      const rect = createPlaceholderRectNew(stretchWidth, stretchHeight);
      const grid = encloseInGrid(rect);
      expect(grid).toEqual({
        width: stretchWidth,
        height: stretchHeight,
        children: [rect],
      });
    });
  });
}
