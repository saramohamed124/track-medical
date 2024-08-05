import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


// Import your images
import dammam_img from '../assets/imgs/dammam.webp';
import gadah_img from '../assets/imgs/gadah.jpg';
import madina_img from '../assets/imgs/madina.jpg';
import mekka_img from '../assets/imgs/mekka.jpg';
import riyadh_img from '../assets/imgs/riyadh.jpg';
import SearchCompanies from './SearchCompanies';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const CardHospitalsCities = () => {
  return (
       <div className=" my-5 mx-auto px-4">
      <h2 className="heading-cards-flex ">المستشفيات/الرياض</h2>
      <SearchCompanies/>
      <div className='cards-flex cards-hospital p-4'>
        <Swiper
         className='text-webkit-center justify-between card-hospitals'
         spaceBetween={3}
         slidesPerView={1}
         navigation
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
          {[riyadh_img, gadah_img, dammam_img, mekka_img, madina_img, riyadh_img].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="card card-compact bg-white w-[230px] shadow-xl rounded-tr-md rounded-tl-md">
                <figure>
                  <img className='w-full h-[190px]' src={img} alt={`image-${index}`} />
                </figure>
                <div className="avenir-heavy w-full text-start card-body bg-white rounded-br-md rounded-bl-md">
                  <h2 className="card-title text-black flex justify-start">اسم المستشفى</h2>
                  <span className='bg-[--main-color-green] text-white py-1 px-4 rounded-2xl w-fit'>الرياض</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
         <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
     
    </div>
  )
}

export default CardHospitalsCities
