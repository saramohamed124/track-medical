import React from 'react'
import search_icon from '../assets/search_icon.svg'

export default function SearchDeals() {
  return (
    <div className='w-fit mb-10 mx-auto'>
        <form className="form-search py-3 px-3">
            <label className="form-control w-[14rem]">
                <div className="label">
                    <span className="label-text text-black">المدينة</span>
                </div>
                <select className="select select-bordered bg-white" defaultValue={'الرياض'}>
                    <option >الرياض</option>
                    <option>مكة المكرمة</option>
                    <option>جدة</option>
                    <option>المدينةالمنورة</option>
                    <option>الدمام</option>
                </select>
            </label>
            <label className="form-control w-[14rem]">
                <div className="label">
                    <span className="label-text text-black">التخصصات</span>
                </div>
                <select className="select select-bordered bg-white" defaultValue={'الأسنان'}>
                    <option >الأسنان</option>
                    <option>الأنف والأذن</option>
                    <option>الطب النفسي</option>
                    <option>المخ والأعصاب</option>
                </select>
            </label>
           <button className='bg-[--main-color-green]  p-3 rounded-[50%] flex-between-center md:self-end butn'>
           <img className='max-w-full' src={search_icon} alt="search_icon"/>
           </button>
        </form>
            <label className='flex text-black gap-4 my-4 mx-0 md:mr-14 avenir-book'>
            <input type="checkbox" defaultChecked className="checkbox border-2 rounded-none" />
            <span>لديك تأمين صحي</span>
            </label>
    </div>
  )
}
