import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// imgs
import popa_logo from '../assets/imgs/popa_logo.png'
import tawuniya_logo from '../assets/imgs/tawuniya_logo.png'
import saudiainsurance_logo from '../assets/imgs/saudiinsurance_logo.png'

SwiperCore.use([Navigation, Pagination]);
const InsuranceCompanies = () => {
  return (
    <div>
       <div className=' p-4 major-hospital'>
        <Swiper
         className='text-webkit-center justify-between'
         spaceBetween={3}
         slidesPerView={1}
         breakpoints={{
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 30,
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 40,
           },
         }}
        >
          {
          [
            { icon: popa_logo, label: 'بوبا' },
            { icon: tawuniya_logo, label: 'التعاونية' },
            { icon: saudiainsurance_logo, label: 'الدرع العربي' },
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <div className=" flex flex-col justify-around min-h-[165px] items-center gap-4 bg-transparent w-[230px] h-[180px] p-2 my-2  rounded-tr-md rounded-tl-md">
                <figure className='min-h-[80px]'>
                  <img className='max-w-[80%]' src={img.icon} alt={`image-${img.label}`} />
                </figure>
                <div className="avenir-heavy w-[125px] h-[17px] flex justify-center items-center text-start py-5 bg-[--main-color-orange] rounded-md">
                  <h2 className="card-title text-black flex justify-start">{img.label}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
         <SwiperSlide></SwiperSlide>
         <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default InsuranceCompanies
