import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about-us');

  const handleClickTabActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex  items-center justify-center lg:justify-start gap-1 text-white my-4 mx-0 tabs'>
      <NavLink
        onClick={() => handleClickTabActive('about-us')}
        className={`text-[0.7rem] py-[5px] px-[10px] md:py-1 md:px-[2rem] md:text-lg rounded-sm avenir-heavy ${activeTab === 'about-us' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="about-us"
      >
        نبذة عنا
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('majors')}
        className={`text-[0.7rem] py-[5px] px-[10px] md:py-1 md:px-[2rem] md:text-lg rounded-sm avenir-heavy ${activeTab === 'majors' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="majors"
      >
        التخصصات
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('news')}
        className={`text-[0.7rem] py-[5px] px-[10px] md:py-1 md:px-[2rem] md:text-lg rounded-sm avenir-heavy ${activeTab === 'news' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="news"
      >
        الأخبار
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('insurance-companies')}
        className={`text-[0.7rem] py-[5px] px-[10px] md:py-1 md:px-[2rem] md:text-lg rounded-sm avenir-heavy ${activeTab === 'insurance-companies' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="insurance-companies"
      >
        شركات التأمين
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('more')}
        className={`text-[0.7rem] py-[5px] px-[10px] md:py-1 md:px-[1rem] md:text-xl rounded-sm avenir-heavy ${activeTab === 'more' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="more"
      >
        ...
      </NavLink>
    </div>
  );
};

export default Tabs;
