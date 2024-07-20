import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about-us');

  const handleClickTabActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex  items-center gap-1 text-white my-4 mx-0'>
      <NavLink
        onClick={() => handleClickTabActive('about-us')}
        className={`py-1 px-[3rem] text-xl rounded-sm avenir-heavy ${activeTab === 'about-us' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="about-us"
      >
        نبذة عنا
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('majors')}
        className={`py-1 px-[3rem] text-xl rounded-sm avenir-heavy ${activeTab === 'majors' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="majors"
      >
        التخصصات
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('news')}
        className={`py-1 px-[3rem] text-xl rounded-sm avenir-heavy ${activeTab === 'news' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="news"
      >
        الأخبار
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('insurance-companies')}
        className={`py-1 px-[3rem] text-xl rounded-sm avenir-heavy ${activeTab === 'insurance-companies' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="insurance-companies"
      >
        شركات التأمين
      </NavLink>
      <NavLink
        onClick={() => handleClickTabActive('more')}
        className={`py-1 px-[1rem] text-xl rounded-sm avenir-heavy ${activeTab === 'more' ? 'bg-[--main-color-orange] text-black' : 'bg-[--main-color-green] text-white'}`}
        to="more"
      >
        ...
      </NavLink>
    </div>
  );
};

export default Tabs;
