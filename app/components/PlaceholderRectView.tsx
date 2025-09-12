import React from "react";
import { PlaceholderRect, SizingType } from "../../src/types";
import styles from "./PlaceholderRectView.module.css";

type Props = {
  rect: PlaceholderRect;
};

const PlaceholderRectView: React.FC<Props> = ({ rect }) => {
  const style: React.CSSProperties = {};

  if (rect.width.type === SizingType.FIXED) {
    style.width = `${rect.width.valuePx}px`;
  }

  if (rect.height.type === SizingType.FIXED) {
    style.height = `${rect.height.valuePx}px`;
  }

  return <div className={styles.component} style={style} />;
};

export default PlaceholderRectView;
