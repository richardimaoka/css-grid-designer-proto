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

export type PlaceholderRect = {
  width: FixedSizing | ExtrinsicSizing;
  height: FixedSizing | ExtrinsicSizing;
};

export type TextContent = {
  content: string;
};

export type GridChild = PlaceholderRect | TextContent;

export type CSSGridContainer = {
  width: IntrinsicSizing | ExtrinsicSizing;
  height: IntrinsicSizing | ExtrinsicSizing;
  children: GridChild[];
};
