import React from 'react'
import star_icon from '../assets/icons/star_icon.svg'

const EvaluationHospital = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='avenir-heavy text-[--main-color-green]'>تقييم المستشفى </p>
      <ul className='flex flex-row'>
        <li><img src={star_icon} alt="star-icon" /></li>
        <li><img src={star_icon} alt="star-icon" /></li>
        <li><img src={star_icon} alt="star-icon" /></li>
        <li><img src={star_icon} alt="star-icon" /></li>
        <li><img src={star_icon} alt="star-icon" /></li>
      </ul>
    </div>
  )
}

export default EvaluationHospital
