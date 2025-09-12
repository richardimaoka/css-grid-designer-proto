import { FixedWidth, JustifyType, SizingTypeNew, FixedHeight, AlignType } from "../types";

export function justifyCenter(widthPx: number): FixedWidth {
  return {
    type: SizingTypeNew.FIXED,
    justifySelf: JustifyType.CENTER,
    valuePx: widthPx,
  };
}

export function justifyStart(widthPx: number): FixedWidth {
  return {
    type: SizingTypeNew.FIXED,
    justifySelf: JustifyType.START,
    valuePx: widthPx,
  };
}

export function justifyEnd(widthPx: number): FixedWidth {
  return {
    type: SizingTypeNew.FIXED,
    justifySelf: JustifyType.END,
    valuePx: widthPx,
  };
}

export function alignCenter(heightPx: number): FixedHeight {
  return {
    type: SizingTypeNew.FIXED,
    alignSelf: AlignType.CENTER,
    valuePx: heightPx,
  };
}

export function alignStart(heightPx: number): FixedHeight {
  return {
    type: SizingTypeNew.FIXED,
    alignSelf: AlignType.START,
    valuePx: heightPx,
  };
}

export function alignEnd(heightPx: number): FixedHeight {
  return {
    type: SizingTypeNew.FIXED,
    alignSelf: AlignType.END,
    valuePx: heightPx,
  };
}
