import React from 'react'
import Header from '../Components/Home/components/header/Header'
import CardHospitalsCities from '../Components/hospitals/components/CardHospitalsCities'

const HospitalsCities = () => {
  return (
    <div>
      <Header/>
      <div className='container '>
        <CardHospitalsCities/>
      </div>
    </div>
  )
}

export default HospitalsCities
