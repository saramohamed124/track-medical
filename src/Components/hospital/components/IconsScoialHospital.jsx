import React from 'react'
import snapshat_icon from '../assets/icons/snapchat_icon.svg'
import whatsapp_icon from '../assets/icons/whatsapp_icon.svg'
import tiktok_icon from '../assets/icons/tiktok_icon.svg'
import facebook_icon from '../assets/icons/facebook_icon.svg'
import instagram_icon from '../assets/icons/Instagram.svg'
import website_icon from '../assets/icons/website_icon.svg'
import twitter_icon from '../assets/icons/twitte_icon.svg'


const IconsScoialHospital = () => {
  return (
      <ul className='flex items-center gap-2 mt-2 '>
        <li>
           <img src={snapshat_icon} alt='snapchat icon'/>
        </li>
        <li>
           <img className='invert-[1]' src={whatsapp_icon} alt='whatsapp_icon'/>
        </li>
        <li>
           <img src={tiktok_icon} alt='tiktok_icon'/>
        </li>
        <li>
           <img src={facebook_icon} alt='facebook_icon'/>
        </li>
        <li>
           <img src={instagram_icon} alt='instagram_icon'/>
        </li>
        <li>
           <img src={website_icon} alt='website_icon'/>
        </li>
        <li>
           <img src={twitter_icon} alt='twitter_icon'/>
        </li>
      </ul>
  )
}

export default IconsScoialHospital
