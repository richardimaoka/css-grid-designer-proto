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

  function appendRect(
    grid: CSSGridContainerNew,
    rect: PlaceholderRectNew
  ): CSSGridContainerNew {
    const newGrid = { ...grid, children: [...grid.children, rect] };

    const gridWidth =
      newGrid.children.some((r) => r.width.type === SizingTypeNew.STRETCH) ||
      grid.width.type === SizingTypeNew.STRETCH
        ? stretchWidth
        : hugWidth;

    const gridHeight =
      newGrid.children.some((r) => r.height.type === SizingTypeNew.STRETCH) ||
      grid.height.type === SizingTypeNew.STRETCH
        ? stretchHeight
        : hugHeight;

    return {
      ...newGrid,
      width: gridWidth,
      height: gridHeight,
    };
  }

  describe("appendRect", () => {
    it("should append a rect to a grid", () => {
      const rect1 = createPlaceholderRectNew(
        widthCenter(100),
        heightCenter(100)
      );
      const grid = encloseInGrid(rect1);

      const rect2 = createPlaceholderRectNew(
        widthCenter(200),
        heightCenter(200)
      );
      const newGrid = appendRect(grid, rect2);

      expect(newGrid.children.length).toBe(2);
      expect(newGrid.children[0]).toBe(rect1);
      expect(newGrid.children[1]).toBe(rect2);
      expect(newGrid.width.type).toBe(SizingTypeNew.HUG);
      expect(newGrid.height.type).toBe(SizingTypeNew.HUG);
    });

    it("should resize grid to stretch if a stretch rect is added", () => {
      const rect1 = createPlaceholderRectNew(
        widthCenter(100),
        heightCenter(100)
      );
      const grid = encloseInGrid(rect1);
      expect(grid.width.type).toBe(SizingTypeNew.HUG);
      expect(grid.height.type).toBe(SizingTypeNew.HUG);

      const rect2 = createPlaceholderRectNew(stretchWidth, heightCenter(200));
      const newGrid = appendRect(grid, rect2);

      expect(newGrid.width.type).toBe(SizingTypeNew.STRETCH);
      expect(newGrid.height.type).toBe(SizingTypeNew.HUG);
    });

    it("should resize grid to stretch if a stretch height rect is added", () => {
      const rect1 = createPlaceholderRectNew(
        widthCenter(100),
        heightCenter(100)
      );
      const grid = encloseInGrid(rect1);
      expect(grid.width.type).toBe(SizingTypeNew.HUG);
      expect(grid.height.type).toBe(SizingTypeNew.HUG);

      const rect2 = createPlaceholderRectNew(widthCenter(200), stretchHeight);
      const newGrid = appendRect(grid, rect2);

      expect(newGrid.width.type).toBe(SizingTypeNew.HUG);
      expect(newGrid.height.type).toBe(SizingTypeNew.STRETCH);
    });
  });
}
