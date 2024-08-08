import React from 'react'
import error_unauth from '../assets/vedio/error401.gif'
export default function ErrorUnauthorized() {
  return (
    <div>
          <div className='w-full bg-white h-screen text-center'>
        <p className='py-10 text-[--main-color-green] text-4xl avenir-heavy'>You Have Sign In First!</p>
      <img className='m-auto' src={error_unauth}  alt='Error not Found'/>
    </div>
    </div>
  )
}
