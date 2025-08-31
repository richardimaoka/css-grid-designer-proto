export type CSSGridContainer = {
  // To be defined
};

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

export type Sizing = FixedSizing | ExtrinsicSizing;

export type PlaceholderRect = {
  width: Sizing;
  height: Sizing;
};

export type TextContent = {
  content: string;
};
