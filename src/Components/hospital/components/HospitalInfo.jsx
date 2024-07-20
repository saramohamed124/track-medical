import React from 'react'
import LikeBtns from './LikeBtns'
import Tabs from './Tabs'
import { Outlet } from 'react-router-dom'
import InfoSocials from './InfoSocials'

const HospitalInfo = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-end my-3'>
        <LikeBtns/>
        <InfoSocials/>
        <div className='col-[1/3] place-self-start lg:row-[3]'>
        <p className='avenir-heavy text-black text-3xl my-5'>اسم المستشفى</p>
        <Tabs/>
        <Outlet/>
        </div>
    </div>
  )
}

export default HospitalInfo
