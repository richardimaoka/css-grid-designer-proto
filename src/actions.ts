import { test, expect } from 'vitest';
import { PlaceholderRect, SizingType } from './types';

function changeWidth(rect: PlaceholderRect, widthPx: number): PlaceholderRect {
  return rect;
}

if (import.meta.vitest) {
  test('changeWidth should return the same rect (placeholder)', () => {
    const rect: PlaceholderRect = {
      width: { type: SizingType.INTRINSIC, valuePx: 100 },
      height: { type: SizingType.INTRINSIC, valuePx: 50 }
    };
    const result = changeWidth(rect, 200);
    expect(result).toBe(rect);
  });
}

function changeHeight(
  rect: PlaceholderRect,
  heightPx: number
): PlaceholderRect {
  return rect;
}

function isFixedWidth(rect: PlaceholderRect): boolean {
  return true;
}

function isFixedHeight(rect: PlaceholderRect): boolean {
  return true;
}
