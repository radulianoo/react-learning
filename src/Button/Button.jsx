//how to style react components
//1.external 2. modules 3.inline

//for modules we need to import this dedicated module
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
