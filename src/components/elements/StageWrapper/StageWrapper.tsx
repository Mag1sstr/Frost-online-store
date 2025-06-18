import styles from "./StageWrapper.module.scss";
function StageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default StageWrapper;
