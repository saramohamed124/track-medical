import React from 'react'
import error_not_found from '../assets/vedio/error404.gif'
export default function ErrorNotFound() {
  return (
    <div className='w-full bg-white h-screen text-center'>
        <p className='py-10 text-[--main-color-green] text-4xl avenir-heavy'>This is Page Not Found</p>
      <img className='m-auto' src={error_not_found}  alt='Error not Found'/>
    </div>
  )
}
