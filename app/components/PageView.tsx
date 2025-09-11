import React, { ReactNode } from "react";
import styles from "./PageView.module.css";

type Props = {
  children: ReactNode;
};

const PlaceholderRectView: React.FC<Props> = ({ children }) => {
  return <div className={styles.component}>{children}</div>;
};

export default PlaceholderRectView;
