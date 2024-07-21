import React from 'react';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import  { Navigation, Pagination } from 'swiper/modules'
// imgs
import brain_icon from '../../Home/components/majors/assets/icons/brain.svg';
import soul_icon from '../../Home/components/majors/assets/icons/soul.svg';
import teeth_icon from '../../Home/components/majors/assets/icons/teeth.svg';
import earnose_icon from '../../Home/components/majors/assets/icons/nose_ear.svg';
import heart_icon from '../../Home/components/majors/assets/icons/heart_major.svg';
import embryo_icon from '../../Home/components/majors/assets/icons/embryo_major.svg';
import eye_icon from '../../Home/components/majors/assets/icons/eye_major.svg';
import stomach_icon from '../../Home/components/majors/assets/icons/stomach_major.svg';

SwiperCore.use([Navigation, Pagination]);

const MajorsHospital = () => {
  return (
    <div className='major-hospital'>
        <Swiper
          className='text-webkit-center justify-between h-fit flex flex-wrap'
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
          {[
            { icon: earnose_icon, label: 'الأنف والأذن' },
            { icon: soul_icon, label: 'الطب النفسي' },
            { icon: brain_icon, label: 'المخ والأعصاب' },
            { icon: teeth_icon, label: 'الأسنان' },
            { icon: heart_icon, label: 'جراحة القلب' },
            { icon: eye_icon, label: 'العيون' },
            { icon: embryo_icon, label: 'النساء والولادة' },
            { icon: stomach_icon, label: 'الطب الباطني' },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="min-w-[9rem] h-[9rem] bg-white py-6 px-4 rounded-full flex justify-center flex-col gap-1 items-center box-majors-shadow">
                <img className='w-[80px] max-h-[80px]' src={item.icon} alt={item.label} />
                <h2 className="avenir-heavy w-full px-3 py-1 rounded-3xl text-[15px] text-white bg-[--main-color-green]">{item.label}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default MajorsHospital;
