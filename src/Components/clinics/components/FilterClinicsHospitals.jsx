import React from 'react'

export default function FilterClinicsHospitals() {
  return (
    <div>
      <div className='form-search search-company'>
        <p className='avenir-heavy text-black'>اختر التخصص</p>
        <label className="form-control w-fit">
            <select className="select select-bordered rounded-md w-[15.5rem] avenir-book bg-white text-gray-500" defaultValue={'اختر شركات التأمين'}>
                <option >اختر  التخصص</option>
                <option>طب الباطني </option>
                <option>العيون</option>
                <option>جراحة القلب</option>
                <option >المخ و الأعصاب</option>
            </select>
        </label>            
        <div className='flex flex-row gap-5'>
        </div>
    </div>
    </div>
  )
}
