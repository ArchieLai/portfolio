import React from "react";
import styles from "./page.module.css";
import introduction from "./introduction";
import Image from "next/image";

export default function About(){
  return(
    <div className={styles.page}>
      <div className={styles.container}>
      <h1>Archie Lai</h1>
      <div className={styles.container2}>
        <div className={styles.intro}>
          <span>{introduction[0]}</span>
          <br /><br />
          <span>{introduction[1]}</span>
        </div>
        <Image 
          src="/images/about/person.jpg" 
          width={300}
          height={300}
          alt="photo"
          className={styles.image}
        />
      </div>
      <h1>Contact</h1>
    </div>
    </div>
    
  );
}