// =================================================================================================
// Sizing Enums
// =================================================================================================

// TODO: remove
export enum SizingType {
  FIXED = "fixed",
  EXTRINSIC = "extrinsic",
  INTRINSIC = "intrinsic",
}

export enum SizingTypeNew {
  FIXED = "fixed",
  STRETCH = "stretch",
}

export enum JustifyType {
  START = "start",
  END = "end",
  CENTER = "center",
  STRETCH = "stretch",
}

export enum AlignType {
  START = "start",
  END = "end",
  CENTER = "center",
  STRETCH = "stretch",
}

// =================================================================================================
// Old Sizing Types (to be removed)
// =================================================================================================

// TODO: remove
export type FixedSizing = {
  type: SizingType.FIXED;
  valuePx: number;
};

// TODO: remove
export type ExtrinsicSizing = {
  type: SizingType.EXTRINSIC;
};

// TODO: remove
export type IntrinsicSizing = {
  type: SizingType.INTRINSIC;
};

// =================================================================================================
// New Sizing Types
// =================================================================================================

export type FixedWidth = {
  type: SizingTypeNew.FIXED;
  justify: JustifyType.START | JustifyType.END | JustifyType.CENTER; // "stretch" is impossible with fixed width
  valuePx: number;
};

export type StretchWidth = {
  type: SizingTypeNew.STRETCH;
  justifySelf: JustifyType.STRETCH;
};

export type FixedHeight = {
  type: SizingTypeNew.FIXED;
  alignSelf: AlignType.START | AlignType.END | AlignType.CENTER; // "stretch" is impossible with fixed width
  valuePx: number;
};

export type StretchHeight = {
  type: SizingTypeNew.STRETCH;
  alignSelf: JustifyType.STRETCH;
};

// =================================================================================================
// Content Types
// =================================================================================================

// TODO: remove
export type PlaceholderRect = {
  width: FixedSizing | ExtrinsicSizing;
  height: FixedSizing | ExtrinsicSizing;
};

export type PlaceholderRectNew = {
  width: FixedWidth | StretchWidth;
  height: FixedHeight | StretchHeight;
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
