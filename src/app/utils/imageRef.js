import { useState, useEffect } from 'react';

export function useBoundingBox(imgRef) {
  const [boundingBox, setBoundingBox] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const box = imgRef.current.getBoundingClientRect();
        setBoundingBox(box.y);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imgRef]);

  return boundingBox;
}