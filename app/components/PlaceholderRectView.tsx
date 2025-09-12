import React from "react";
import {
  FixedHeight,
  FixedWidth,
  PlaceholderRect,
  PlaceholderRectNew,
  SizingType,
  SizingTypeNew,
  StretchHeight,
  StretchWidth,
} from "../../src/types";
import styles from "./PlaceholderRectView.module.css";

type Props = {
  rect: PlaceholderRectNew;
};

function widthStyle(w: FixedWidth | StretchWidth): React.CSSProperties {
  if (w.type === SizingTypeNew.FIXED) {
    return { width: `${w.valuePx}px` };
  } else {
    return { justifySelf: w.justifySelf };
  }
}

function heightStyle(h: FixedHeight | StretchHeight): React.CSSProperties {
  if (h.type === SizingTypeNew.FIXED) {
    return { height: `${h.valuePx}px` };
  } else {
    return { alignSelf: h.alignSelf };
  }
}

const PlaceholderRectView: React.FC<Props> = ({ rect }) => {
  const ws = widthStyle(rect.width);
  const hs = heightStyle(rect.height);
  const style: React.CSSProperties = { ...ws, ...hs };

  return <div style={style} className={styles.component} />;
};

export default PlaceholderRectView;
