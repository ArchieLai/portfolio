import React from "react";
import styles from "./page.module.css";
import BottomNav from "./buttonNav";

export default function Nav(){
  return (
    <div className={styles.menu}>
      <h1 className={styles.logo} href="/">AL</h1>
      <BottomNav />
    </div>
  );
}