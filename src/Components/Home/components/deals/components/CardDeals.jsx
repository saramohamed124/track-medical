import React from 'react';
import deal_img from '../../../assets/imgs/hospital.png';

function CardDeals() {
    return ( 
        <div className="my-4 flex justify-center items-center gap-10 w-full flex-wrap" >
            <div className='flex justify-center items-center w-[300px] h-[300px] overflow-hidden' style={{ backgroundImage: `url(${deal_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className='w-full flex justify-center items-center bg-[--main-color-orange] p-6 avenir-heavy text-black text-xl text-center cursor-pointer box '>باقة ولادة قيصرية ثانية (غرفة خاصة)</span>
            </div>
            <div className='flex justify-center items-center w-[300px] h-[300px] overflow-hidden' style={{ backgroundImage: `url(${deal_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className='w-full flex justify-center items-center bg-[--main-color-orange] p-6 avenir-heavy text-black text-xl text-center cursor-pointer box '>تبييض الاسنان بالليزر 3 ZOOM</span>
            </div>
            <div className='flex justify-center items-center w-[300px] h-[300px] overflow-hidden' style={{ backgroundImage: `url(${deal_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className='w-full flex justify-center items-center bg-[--main-color-orange] p-6 avenir-heavy text-black text-xl text-center cursor-pointer box '>تبييض الاسنان بالليزر</span>
            </div>
        </div>
     );
}
export default CardDeals;
