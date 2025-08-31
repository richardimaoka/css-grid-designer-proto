export enum SizingType {
  FIXED = "fixed",
  EXTRINSIC = "extrinsic",
  INTRINSIC = "intrinsic",
}

export type FixedSizing = {
  type: SizingType.FIXED;
  valuePx: number;
};

export type ExtrinsicSizing = {
  type: SizingType.EXTRINSIC;
};

export type IntrinsicSizing = {
  type: SizingType.INTRINSIC;
};

export type RectSizing = FixedSizing | ExtrinsicSizing;

export type PlaceholderRect = {
  width: RectSizing;
  height: RectSizing;
};

export type TextContent = {
  content: string;
};

export type GridSizing = IntrinsicSizing | ExtrinsicSizing;

export type CSSGridContainer = {
  width: GridSizing;
  height: GridSizing;
};
