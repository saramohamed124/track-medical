import brain_icon from '../../Home/components/majors/assets/icons/brain.svg';
import soul_icon from '../../Home/components/majors/assets/icons/soul.svg';
import teeth_icon from '../../Home/components/majors/assets/icons/teeth.svg';
import earnose_icon from '../../Home/components/majors/assets/icons/nose_ear.svg';
import heart_icon from '../../Home/components/majors/assets/icons/heart_major.svg';
import embryo_icon from '../../Home/components/majors/assets/icons/embryo_major.svg';
import eye_icon from '../../Home/components/majors/assets/icons/eye_major.svg';
import stomach_icon from '../../Home/components/majors/assets/icons/stomach_major.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination]);

function ClinicsCards() {
    return ( 
        <div  className='major-hospital justify-center lg:justify-start lg:items-start'>
             <Swiper
      className='text-webkit-center justify-between'
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
            { icon: heart_icon, label: 'جراحة القلب' },
            { icon: eye_icon, label: 'العيون' },
            { icon: embryo_icon, label: 'النساء والولادة' },
            { icon: stomach_icon, label: 'الطب الباطني' },
          ].map((item, index) => (
        <SwiperSlide key={index}>
        <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={item.icon}
                    alt="brain" />
                    <Link to={'/clinics-hospitals'} className="heading-major-card">{item.label}</Link>
            </div>
        </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
      </Swiper>
           
      
            
           
        </div>
     );
}

export default ClinicsCards;