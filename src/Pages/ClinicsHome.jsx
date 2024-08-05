import React from 'react'
import Header from '../Components/Home/components/header/Header'
import ClinicsCards from '../Components/clinics/components/ClinicsCards'

export default function ClinicsHome() {
  return (
    <div>
      <Header/>
      <div className='my-10'>
      <h1 className="heading-cards-flex mx-10 my-3">العيادات الخارجية</h1>
      <div className="parent-cards-flex">
        <ClinicsCards/>
        </div>
      </div>
    </div>
  )
}
