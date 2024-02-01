import React from "react";
import styles from "./page.module.css";
import introduction from "./introduction";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from "next/link";

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
        <div className={styles.contactContainer}>
          <div className={styles.contactSub}>
            <GitHubIcon className={styles.icon}/>
            <Link 
              className={styles.link} 
              href="https://github.com/ArchieLai"
              target="_blank"         //attribute of anchor tag
              >Github profile</Link>
          </div>
          <div className={styles.contactSub}>
            <EmailIcon className={styles.icon}/>
            <Link 
              className={styles.link} 
              href="mailto: archie.weichi@gmail.com"
              target="_blank"      
              >archie.weichi@gmail.com</Link>
          </div>
          <div className={styles.contactSub}>
            <MenuBookIcon className={styles.icon} />
            <Link
              className={styles.link}
              href=""
              target="_blank"
            >My blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}