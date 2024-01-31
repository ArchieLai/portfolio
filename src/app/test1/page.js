'use client';

import React, { useRef } from 'react';
import { useBoundingBox } from '../utils/imageRef';
import {Box} from '@mui/material';

function MyComponent() {
  const imgRef = useRef(null);
  const box = useBoundingBox(imgRef);
  console.log(box);
  return (
    <div>
      <img
        ref={imgRef}
        src="/images/posts/0/1.jpg"
        alt="Your Image"
        width="500"
        height="1500"
      />
      <Box
        sx={{
          "&:hover": {
            color: 'gray',
            backgroundColor: 'gray'
          },
          width: '500px',
          height: '500px'
        }}  
      >text</Box>
    </div>
  );
}

export default MyComponent;
