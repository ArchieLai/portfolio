'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation'

const ImageCard = (props) => {
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    console.log("enter");
    setHovered(true);
  };
  const handleMouseLeave = () => {
    console.log("leave");
    setHovered(false);
  };
  const handleClick = (route) => {
    router.push(route);
  }

  return (
    <Card>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(`posts/${props.index}`)}
        position="relative"
      >
        <CardMedia
          component="img"
          alt="Image"
          width={props.width}
          height={props.height}
          image={props.cover} 
        />
        {isHovered && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >test test</Box>
        )}
      </Box>
    </Card>
  );
};

export default ImageCard;
