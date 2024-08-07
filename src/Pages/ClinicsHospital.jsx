import React from 'react'
import Header from '../Components/Home/components/header/Header'
import ClinicsCardsHospitals from '../Components/clinics/components/ClinicsCardsHospitals'
import FilterClinicsHospitals from '../Components/clinics/components/FilterClinicsHospitals'

export default function ClinicsHospital() {
  return (
    <div>
      <Header/>
        <div className='container' style={{margin:'5rem auto'}}>
      <h2 className="heading-cards-flex">العيادات الخارجية</h2>
      <FilterClinicsHospitals/>
      <ClinicsCardsHospitals/>
        </div>
    </div>
  )
}
