import React from 'react'
import sort_icon from '../assets/icons/sort_icon.svg'
import filter_icon from '../assets/icons/filter_icon.svg'

const SearchCompanies = () => {
  return (
    <div className='form-search search-company'>
        <p className='avenir-heavy text-black'>شركات التأمين التابع لها</p>
        <label className="form-control w-fit">
            <select className="select select-bordered rounded-md w-[15.5rem] avenir-book text-gray-500" defaultValue={'اختر شركات التأمين'}>
                <option >اختر شركات التأمين</option>
                <option>بوبا</option>
                <option>التعاونية</option>
                <option>الدرع العربي</option>
            </select>
        </label>            
        <div className='flex flex-row gap-5'>
        <button><img src={sort_icon} alt='sort_icon' /></button>
        <button><img src={filter_icon} alt='sort_icon' /></button>
        </div>
    </div>
  )
}

export default SearchCompanies
