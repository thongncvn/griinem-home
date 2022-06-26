import { FC, PropsWithChildren, memo } from "react";
import styles from "./Code.module.css";

export const Code: FC<PropsWithChildren<{}>> = memo(({ children }) => {
  return <span className={styles.root}>{children}</span>;
});
