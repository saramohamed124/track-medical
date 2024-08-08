import React from 'react'
import Header from '../Components/Home/components/header/Header'
import ClinicsCards from '../Components/clinics/components/ClinicsCards'
import AdsPanner from '../Components/AdsPanner'

export default function ClinicsHome() {
  return (
    <div>
      <Header/>
      <div className='container my-10 mx-auto'>
      <h1 className="heading-cards-flex " style={{margin:'5rem'}}>العيادات الخارجية</h1>
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start  justify-center gap-2">
      <div className="parent-cards-flex">
        <ClinicsCards/>
        </div>
        <div className='flex flex-col gap-3 m-auto lg:m-0'>
        <AdsPanner/>
        <AdsPanner/>
        </div>
      </div>
      </div>
    </div>
  )
}
