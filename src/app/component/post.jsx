'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const Post= (props) => {
  const [isHovered, setHovered] = useState(false);
  const h = props.height;
  const w = props.width;

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card 
      className={styles.card} 
      sx={{ width: w, height: 'auto', aspectRatio: w/h}} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/posts/${props.index}`}>
        <div style={{position: "relative"}}>
          <CardMedia
            component={() => (
              <Image
                alt="Image"
                className={styles.img}
                src={props.cover}
                width={w}
                height={h}
                style={{aspectRatio: w/h}}
              />
            )}
          />
          {isHovered && (
            <Box className={styles.box}>
              <h2>{props.title}</h2>
            </Box>
          )}
        </div>
      </Link>
    </Card>
  );
};
export default Post;