import { useState } from "react";

import styles from "./Toggle.module.scss";

export default function Toggle({ check, onClick }) {
  const [checked, setChecked] = useState(check);

  return (
    <div className={styles.toggleWrapper}>
      <input
        type="checkbox"
        className="dn"
        id="dn"
        checked={checked}
        onChange={() => setChecked(!checked)}
        onClick={(value) => onClick(value.target)}
      />
      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggleHandler}>
          <span className={`${styles.crater} ${styles.crater1}`}></span>
          <span className={`${styles.crater} ${styles.crater2}`}></span>
          <span className={`${styles.crater} ${styles.crater3}`}></span>
        </span>
        <span className={`${styles.star} ${styles.star1}`}></span>
        <span className={`${styles.star} ${styles.star2}`}></span>
        <span className={`${styles.star} ${styles.star3}`}></span>
        <span className={`${styles.star} ${styles.star4}`}></span>
        <span className={`${styles.star} ${styles.star5}`}></span>
        <span className={`${styles.star} ${styles.star6}`}></span>
      </label>
    </div>
  );
}
