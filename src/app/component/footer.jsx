'use client';
import React from 'react';
import styles from './page.module.css';
import { 
  FacebookShareButton, 
  FacebookIcon, 
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer() {
  const matches = useMediaQuery('(min-width:768px)');

  return (
    <div className={styles.footer}>
      <span>Copyright © 2024 Archie Lai</span>
      <FacebookShareButton 
        url={'https://archielai.github.io/portfolio/'}
      > 
        <FacebookIcon size={matches ? 28: 20} round /> 
      </FacebookShareButton> 
      <LineShareButton
        url={'https://archielai.github.io/portfolio/'}
      >
        <LineIcon size={matches ? 28: 20} round />
      </LineShareButton>
      <TwitterShareButton
        url={'https://archielai.github.io/portfolio/'}
      >
        <TwitterIcon size={matches ? 28: 20} round />
      </TwitterShareButton>
    </div>
  );
}