'use client';
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Backdrop from '@mui/material/Backdrop';

export default function ShowImg(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Image
        priority
        src={props.imgPath}
        width={props.width}
        height={props.height}
        style={{objectFit: props.square ? "contain" : "cover"}}
        className={styles.backdropImg}
        alt="image"
        onClick={handleOpen} 
      />
      <Backdrop
        sx={{ zIndex: 6}}
        open={open}
        onClick={handleClose}
      >
        <Image
        priority
        src={props.imgPath}
        width={props.width}
        height={props.height}
        style={{objectFit: props.square ? "contain" : "cover"}}
        alt='image'
        className={styles.modal}
      />
      </Backdrop>
    </>
  );
}