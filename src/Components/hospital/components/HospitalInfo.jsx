import React from 'react'
import LikeBtns from './LikeBtns'
import Tabs from './Tabs'
import { Outlet } from 'react-router-dom'
import InfoSocials from './InfoSocials'

const HospitalInfo = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0 lg:place-items-end justify-items-center my-3 hospital-info'>
        <LikeBtns/>
        <InfoSocials/>
        <div className='md:col-[1/4] md:row-[4] lg:place-self-start lg:col-[1/3] lg:row-[2/3] place-self-start hospital-description  md:hospital-desc  justify-self-center text-center md:text-start'>
        <p className='avenir-heavy text-black text-3xl my-5'>اسم المستشفى</p>
        <Tabs/>
        <Outlet/>
        </div>
    </div>
  )
}

export default HospitalInfo
