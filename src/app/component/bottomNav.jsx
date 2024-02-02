'use client';
import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'


export default function BottomNav() {
  const [value, setValue] = React.useState(3);
  const router = useRouter();
  const handleClick = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={styles.buttonContain}
        sx={{background: "rgba(0,0,0,0)"}}
      >
        <BottomNavigationAction 
          className={styles.buttonNav} 
          icon={<div className={styles.buttonDiv}><HomeIcon /><span>Home</span></div>}          
          onClick={(e) => handleClick(e, "/")} 
        />
        <BottomNavigationAction 
          className={styles.buttonNav} 
          icon={<div className={styles.buttonDiv}><GridViewIcon /><span>Works</span></div>} 
          onClick={(e) => handleClick(e, "/works")} 
        />
        <BottomNavigationAction 
          className={styles.buttonNav} 
          icon={<div className={styles.buttonDiv}><PersonIcon /><span>About</span></div>} 
          onClick={(e) => handleClick(e, "/about")}
        />
      </BottomNavigation>
    </div>
  );
}
//The BottomNavigationAction needs to be a direct child of BottomNavigation.
//cannot wrap BottomNavigationAction inside Link