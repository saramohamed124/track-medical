import React from 'react'
import HospitalLogoHeader from '../Components/hospital/components/HospitalLogoHeader'
import HospitalInfo from '../Components/hospital/components/HospitalInfo'

const Hospital = () => {
  return (
    <div>
        <HospitalLogoHeader/>
      <div className='container m-2'>
        <HospitalInfo/>
      </div>
    </div>
  )
}

export default Hospital
