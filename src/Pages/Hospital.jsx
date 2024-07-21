import React from 'react'
import HospitalLogoHeader from '../Components/hospital/components/HospitalLogoHeader'
import HospitalInfo from '../Components/hospital/components/HospitalInfo'
import EditBtn from '../Components/hospital/components/EditBtn'
import EvaluationHospital from '../Components/hospital/components/EvaluationHospital'
import VisitsHospital from '../Components/hospital/components/VisitsHospital'

const Hospital = () => {
  return (
    <div className='hospital'>
        <HospitalLogoHeader/>
      <div className='container m-2'>
        <HospitalInfo/>
        <div className='flex-between-center my-4 flex-col gap-3 md:flex-row'>
          <EditBtn/>
          <div className='flex-between-center gap-3'>
          <VisitsHospital/>
          <EvaluationHospital/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospital
