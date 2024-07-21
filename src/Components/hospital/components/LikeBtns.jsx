import React from 'react'

// imgs
import star_icon from '../assets/icons/star_icon.svg'
import favorite_icon from '../assets/icons/favorite_icon.svg'
import follow_icon from '../assets/icons/follow_icon.svg'
import whatsapp_icon from '../assets/icons/whatsapp_icon.svg'

const LikeBtns = () => {
  return (
    <div>
      <ul className='bg-gray-200 py-3 px-6 rounded-full flex-between-center gap-5 w-fit mt-10 mb-4 mx-auto row-[]'>
      <li>
            <img src={favorite_icon} alt='favorite_icon'/>
        </li>
        <li>
            <img src={star_icon} alt='star_icon'/>
        </li>
        <li>
            <img src={follow_icon} alt='follow_icon'/>
        </li>
        <li>
            <img src={whatsapp_icon} alt='whatsapp_icon'/>
        </li>
      </ul>
    </div>
  )
}

export default LikeBtns
