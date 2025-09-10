import React from "react";
import { PlaceholderRect, SizingType } from "../../src/types";

type Props = {
  rect: PlaceholderRect;
};

const PlaceholderRectView: React.FC<Props> = ({ rect }) => {
  const style: React.CSSProperties = {
    border: "1px dashed #999",
    backgroundColor: "#f0f0f0",
    boxSizing: "border-box",
  };

  if (rect.width.type === SizingType.FIXED) {
    style.width = `${rect.width.valuePx}px`;
  } else {
    style.width = "100%";
  }

  if (rect.height.type === SizingType.FIXED) {
    style.height = `${rect.height.valuePx}px`;
  } else {
    style.height = "100%";
  }

  return <div style={style} />;
};

export default PlaceholderRectView;
