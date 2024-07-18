import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';

// Import your images
import dammam_img from '../assets/imgs/dammam.webp';
import gadah_img from '../assets/imgs/gadah.jpg';
import madina_img from '../assets/imgs/madina.jpg';
import mekka_img from '../assets/imgs/mekka.jpg';
import riyadh_img from '../assets/imgs/riyadh.jpg';
import { Navigation, Pagination } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function Cards() {
  return (
    <div className='cards-flex cards-hospital p-4'>
      <Swiper
      className='text-webkit-center justify-between'
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
        <SwiperSlide>
          <div className="card card-compact bg-base-100 w-[230px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure>
              <img className='w-full h-[190px]' src={riyadh_img} alt="الرياض" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
              <h2 className="card-title text-black flex justify-center items-center">الرياض</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact bg-base-100 w-[230px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure>
              <img className='w-full h-[190px]' src={gadah_img} alt="جدة" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
              <h2 className="card-title text-black flex justify-center items-center">جدة</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact bg-base-100 w-[230px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure>
              <img className='w-full h-[190px]' src={dammam_img} alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
              <h2 className="card-title text-black flex justify-center items-center">الدمام</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact bg-base-100 w-[230px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure>
              <img className='w-full h-[190px]' src={mekka_img} alt="مكة المكرمة" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
              <h2 className="card-title text-black flex justify-center items-center">مكة المكرمة</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-compact bg-base-100 w-[230px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure>
              <img className='w-full h-[190px]' src={madina_img} alt="المدينة المنورة" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
              <h2 className="card-title text-black flex justify-center items-center">المدينة المنورة</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cards;
