import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnRoutes() {
  return (
    <div className='flex flex-col items-center gap-5'>
      <Link className='py-3 px-4 bg-[--main-color-green-dark] text-white avenir-book rounded-md text-center w-fit ' to={'/admin/dashboard/add-company'}>إنشاء حساب شركة</Link>
      <Link className='py-3 px-4 bg-[--main-color-orange-dark] text-black avenir-book rounded-md text-center w-fit ' to={'/admin/dashboard/add-hospital'}>إنشاء حساب مستشفى</Link>
    </div>
  )
}
