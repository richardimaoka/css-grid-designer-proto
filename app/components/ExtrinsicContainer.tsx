import { ReactNode } from "react";
import styles from "./ExtrinsicContainer.module.css";

type Props = {
  children: ReactNode;
};

export function ExtrinsicContainer(props: Props) {
  return <div className={styles.component}>{props.children}</div>;
}
