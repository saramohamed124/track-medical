import brain_icon from '../assets/icons/brain.svg'
import earnose_icon from '../assets/icons/nose_ear.svg'
import soul_icon from '../assets/icons/soul.svg'
import teeth_icon from '../assets/icons/teeth.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination]);

function CardMajor() {
    return ( 
        <div  className='cards-flex cards-majors'>
             <Swiper
      className='text-webkit-center justify-between'
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
        <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={teeth_icon}
                    alt="teeth" />
                    <h2 className="heading-major-card">الأسنان</h2>
            </div>
                </SwiperSlide>
        <SwiperSlide>
        <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={earnose_icon}
                    alt="earnose" />
                    <h2 className="heading-major-card">الأنف والأذن</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={soul_icon}
                    alt="soul" />
                    <h2 className="heading-major-card">الطب النفسي</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={brain_icon}
                    alt="brain" />
                    <h2 className="heading-major-card">المخ والأعصاب</h2>
            </div>
        </SwiperSlide>
        
      </Swiper>
           
      
            
           
        </div>
     );
}

export default CardMajor;