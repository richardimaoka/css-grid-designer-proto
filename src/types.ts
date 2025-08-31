export enum SizingType {
  FIXED = "fixed",
  EXTRINSIC = "extrinsic",
}

export type FixedSizing = {
  type: SizingType.FIXED;
  valuePx: number;
};

export type ExtrinsicSizing = {
  type: SizingType.EXTRINSIC;
};

export type RectSizing = FixedSizing | ExtrinsicSizing;

export type PlaceholderRect = {
  width: RectSizing;
  height: RectSizing;
};

export type TextContent = {
  content: string;
};

export type CSSGridContainer = {
  // To be defined
};
