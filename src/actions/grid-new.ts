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
 * Encloses a placeholder rectangle within a CSS grid container.
 * The grid container's dimensions are determined by the rectangle's sizing properties.
 * If the rectangle's width or height is set to stretch, the grid will also stretch in that dimension.
 * Otherwise, the grid will hug the content.
 *
 * @param rect The placeholder rectangle to enclose.
 * @returns A new CSS grid container with the rectangle as its child.
 *
 * @example
 * // Enclose a fixed-size rectangle
 * const rect = createPlaceholderRectNew(widthCenter(100), heightCenter(200));
 * const grid = encloseInGrid(rect);
 * // grid.width will be 'hug'
 * // grid.height will be 'hug'
 *
 * @example
 * // Enclose a rectangle that stretches horizontally
 * const rect = createPlaceholderRectNew(stretchWidth, heightCenter(200));
 * const grid = encloseInGrid(rect);
 * // grid.width will be 'stretch'
 * // grid.height will be 'hug'
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
    it("should enclose a w:fixed/h:fixed rect into a w:hug/h:hug grid", () => {
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

    it("should enclose a w:stretch/h:fixed rect into a w:stretch/h:hug grid", () => {
      const rect = createPlaceholderRectNew(stretchWidth, heightCenter(100));
      const grid = encloseInGrid(rect);
      expect(grid).toEqual({
        width: stretchWidth,
        height: hugHeight,
        children: [rect],
      });
    });

    it("should enclose a w:fixed/h:stretch rect into a w:hug/h:stretch grid", () => {
      const rect = createPlaceholderRectNew(widthCenter(100), stretchHeight);
      const grid = encloseInGrid(rect);
      expect(grid).toEqual({
        width: hugWidth,
        height: stretchHeight,
        children: [rect],
      });
    });

    it("should enclose a w:stretch/h:stretch rect into a w:stretch/h:stretch grid", () => {
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
