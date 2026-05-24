import styles from "./Button.module.css";

export default function Button({ children = "Click Me" }) {
  return <button className={styles.button}>{children}</button>;
}
