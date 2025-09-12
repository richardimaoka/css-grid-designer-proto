import React, { ReactNode } from "react";
import styles from "./PageView.module.css";
import { ExtrinsicContainer } from "./ExtrinsicContainer";

type Props = {
  children: ReactNode;
};

const PlaceholderRectView: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.component}>
      <ExtrinsicContainer>{children}</ExtrinsicContainer>
    </div>
  );
};

export default PlaceholderRectView;
