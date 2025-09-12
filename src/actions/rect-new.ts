import {
  FixedWidth,
  JustifyType,
  SizingTypeNew,
  FixedHeight,
  AlignType,
  StretchWidth,
  StretchHeight,
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
