import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// imgs
import hospitalLogo from '../assets/imgs/hospital_header.png';
SwiperCore.use([Navigation, Pagination]);

const HospitalLogoHeader = () => {
  return (
    <div className='hospital-profile'>
      <Swiper
      className='flex flex-col'
      slidesPerView={1}
      spaceBetween={0}
      navigation
      loop={true}
      >
        {[hospitalLogo,hospitalLogo,hospitalLogo].map((image,index)=>(
             <SwiperSlide key={index}>
             <img src={image} alt="Hospital Logo Slide 3" />
           </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HospitalLogoHeader;
