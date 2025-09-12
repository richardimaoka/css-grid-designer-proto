import {
  CSSGridContainerNew,
  HugHeight,
  HugWidth,
  PlaceholderRectNew,
  SizingTypeNew,
} from "../types";
import {
  createPlaceholderRectNew,
  widthCenter,
  heightCenter,
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
  return {
    width: hugWidth,
    height: hugHeight,
    children: [rect],
  };
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("encloseInGrid", () => {
    it("should enclose a placeholder rect with fixed width and height with hug sizing", () => {
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
  });
}
