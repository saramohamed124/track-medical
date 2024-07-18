// src/CardGrid.js
import React from 'react';

import double_left_icon from '../assets/icons/double-left.svg'

const CardGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">المستشفيات</h2>
      <div className="grid grid-cols-3 gap-4">
      </div>
      <div className="flex justify-center items-center my-8 avenir-heavy">
        <button className="px-4 py-2 mx-1 bg-[--main-color-orange] text-white rounded-[40px] text-sm lg:text-xl">الصفحة السابقة</button>
        <button className="h-[2.2rem] px-[13px] py-0 mx-1 bg-[--main-color-orange] text-white rounded-[50%]">1</button>
        <button className="h-[2.2rem] px-[13px] py-0 mx-1 bg-white text-black rounded-[50%] border">2</button>
        <button className="h-[2.2rem] px-[13px] py-0 mx-1 bg-white text-black rounded-[50%] border hidden sm:block">3</button>
        <button className="h-[2.2rem] px-[13px] py-0 mx-1 bg-white text-black rounded-[50%] border hidden sm:block">4</button>
        <button className="h-[2.2rem] px-[13px] py-0 mx-1 bg-white text-black rounded-[50%] border hidden sm:block">5</button>
        <button className=" flex justify-center items-center h-[2.2rem] px-[13px] py-2 mx-1 bg-white text-black rounded-[50%] border"><img className='min-w-[25px] w-[92%]' src={double_left_icon} alt='double-left-icon'/></button>
        <button className="px-4 py-2 mx-1 bg-[--main-color-orange] text-white rounded-[40px] text-sm lg:text-xl">الصفحة التالية</button>
      </div>
    </div>
  );
};

export default CardGrid;
