import React from 'react'
import chat_icon from '../assets/icons/chat_icon.svg'
import notification_icon from '../assets/icons/notification_icon.svg'
export default function LeftsideNav() {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>
        <div className='flex flex-row gap-2'>
            <span className='block w-5 h-5 rounded-[50%] bg-[--main-color-green]'></span>
            <p className='text-black avenir-heavy'>اسم الادمن</p>
        </div>
        <div className='flex justify-center gap-2'>
            <img src={chat_icon} alt="chat-icon" />
            <img src={notification_icon} alt="notification-icon" />
        </div>
    </div>
  )
}
