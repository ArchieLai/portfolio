'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Carousel(props){
  const carousel = props.pathList;
  const matches = useMediaQuery('(min-width:768px)');

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
        style={{aspectRatio: matches ? 1000/600 : 640/450}}
      >
        {carousel.map((imgPath, index) => {
          return(
            <SwiperSlide key={index}>
              <Image 
                src={imgPath} 
                width={1000}
                height={600}
                className={styles.carousel}
                alt='carousel'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}