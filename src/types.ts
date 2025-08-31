export type CSSGridContainer = {
  // To be defined
};

export enum SizingType {
  INTRINSIC = 'intrinsic',
  EXTRINSIC = 'extrinsic'
}

export type IntrinsicSizing = {
  type: SizingType.INTRINSIC;
  valuePx: number;
};

export type ExtrinsicSizing = {
  type: SizingType.EXTRINSIC;
};

export type Sizing = IntrinsicSizing | ExtrinsicSizing;

export type PlaceholderRect = {
  width: Sizing;
  height: Sizing;
};

export type TextContent = {
  content: string;
};
