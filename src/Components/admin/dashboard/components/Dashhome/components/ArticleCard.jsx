import React from 'react'
import guest_icon from '../assets/icons/guest.svg';
import manager_icon from '../assets/icons/manager.svg';
import usermale_icon from '../assets/icons/usermale.svg';

export default function ArticleCard() {
  return (
    <div className='flex gap-4 flex-wrap text-white avenir-heavy justify-center'>
        {[
            { icon: guest_icon, head: 'عدد الزوار' ,data:'454,121,12'},
            { icon: manager_icon, head: 'عدد المتابعين' ,data:'781,640'},
            { icon: usermale_icon, head: 'عدد الموظفين' ,data:'45,780'},
          ].map((e,index)=>(
            <div className='flex flex-col justify-center items-center gap-4 bg-[--main-color-green] py-3 px-10 rounded-md' key={index}>
                <img className='max-w-[50px]' src={e.icon} alt={e.head} />
                <div>
                    <p className='text-center md:text-start'>{e.head}</p>
                    <p className='text-center md:text-start'>{e.data}</p>
                </div>
            </div>
          ))}
    </div>
  )
}
