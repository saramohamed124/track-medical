import React from 'react'
import IconsScoialHospital from './IconsScoialHospital'
// imgs
import hours_icon from '../assets/icons/lasthours_icon.svg'
import address_icon from '../assets/icons/address_icon.svg'
import phone_icon from '../assets/icons/phone_icon.svg'
import email_icon from '../assets/icons/email_icon.svg'


const InfoSocials = () => {
  return (
    <div className='bg-[--main-color-green] p-4 w-fit rounded-lg row-[3] md:place-self-start md:row-[1/3] md:col-[3] '>
      <div>
      <ul className='flex items-center gap-4 flex-col ' style={{placeItems:'flex-start'}}>
        <li className='flex items-center gap-3 avenir-book text-xl text-white'>
          <div className='img'>
            <img className='bg-white p-1 rounded-[50%]' src={hours_icon} alt='last hours work'/>
          </div>
          <p>ساعات العمل : 24 ساعة </p>
        </li>
        <li className='flex items-center gap-3 avenir-book text-xl text-white'>
          <div className='img'>
            <img className='bg-white p-1 rounded-[50%]' src={address_icon} alt='address_icon'/>
          </div>
          <p className='w-[13rem] underline'>العنوان: طريق الملك فهد، 
          مطبعة حي الرياض</p>
        </li>
        <li className='flex items-center gap-3 avenir-book text-xl text-white'>
          <div className='img'>
            <img className='bg-white p-1 rounded-[50%]' src={phone_icon} alt='phone_icon'/>
          </div>
          <p>+966 479552224</p>
        </li>
        <li className='flex items-center gap-3 avenir-book text-xl text-white'>
          <div className='img'>
            <img className='bg-white p-1 rounded-[50%]' src={email_icon} alt='email_icon'/>
          </div>
          <p>info@mashfa.com</p>
        </li>
      </ul>
      </div>
      <IconsScoialHospital/>
    </div>
  )
}

export default InfoSocials
