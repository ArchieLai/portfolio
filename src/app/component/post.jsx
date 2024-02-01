'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Popover, Box } from '@mui/material';

export default function Post(props){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //event handles
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const popWidth = Number(props.width);
  const popHeight = Number(props.height)-20;
  return(
    <>
      <Link href={`/posts/${props.index}`}>
        <Image
          priority
          key={props.index}
          src={props.cover}
          width={props.width}
          height={props.height}
          alt="cover"
          className={styles.image}
          onMouseOver={handleOpen}
        />
        <Popover
          key={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          marginThreshold={null} //how close to the edge of the window the popover can appear.
          disableScrollLock={true} //able to scroll down when Popover is opened
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{'& .MuiPaper-root': {
              borderRadius: '0px',
              background: 'rgba(255, 255, 255, 0.7)',
              boxShadow: 0
            }
          }}
          className={styles.pop}
        >
          <Box 
            onMouseLeave={handleClose} 
            className={styles.box}
            sx={{
              width: popWidth,
              height: popHeight,
            }}
            >{props.title}
          </Box>
        </Popover>
      </Link>
    </>
  );
}