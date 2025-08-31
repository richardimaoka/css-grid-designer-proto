type CSSGridContainer = {
  // To be defined
};

enum SizingType {
  INTRINSIC = 'intrinsic',
  EXTRINSIC = 'extrinsic'
}

type IntrinsicSizing = {
  type: SizingType.INTRINSIC;
  valuePx: number;
};

type ExtrinsicSizing = {
  type: SizingType.EXTRINSIC;
};

type Sizing = IntrinsicSizing | ExtrinsicSizing;

type PlaceholderRect = {
  width: Sizing;
  height: Sizing;
};

type TextContent = {
  content: string;
};
