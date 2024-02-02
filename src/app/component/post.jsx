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
  const h = Number(props.height);
  const w = Number(props.width);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card className={styles.card} sx={{ width: w, height: h}}>
      <Link href={`/posts/${props.index}`}>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{position: "relative"}}
        >
          <CardMedia
            component={() => (
              <Image
                alt="Image"
                className={styles.img}
                src={props.cover}
                width={w}
                height={h}
              />
            )}
          />
          {isHovered && (
            <Box className={styles.box} sx={{fontSize: 36}}>
              {props.title}
            </Box>
          )}
        </Box>
      </Link>
    </Card>
  );
};
export default Post;