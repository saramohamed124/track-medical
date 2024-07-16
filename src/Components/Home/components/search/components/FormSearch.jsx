import search_icon from '../assets/icons/search_icon.svg'

function FormSearch() {
    return ( 
        <>
                <form className="bg-[--main-color-orange] pt-3 pb-8 px-12 rounded-md md:rounded-[98px] flex-between-center avenir-book text-center gap-5 flex-col md:flex-row">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text text-black">اسم المستشفى</span>
                </div>
                <input type="text" placeholder="اسم المستشفى" className="input input-bordered w-full max-w-xs rounded-[29px]" />
            </label>
            <label className="form-control w-fit">
                <div className="label">
                    <span className="label-text text-black">المدينة</span>
                </div>
                <select className="select select-bordered" defaultValue={'الرياض'}>
                    <option >الرياض</option>
                    <option>مكة المكرمة</option>
                    <option>جدة</option>
                    <option>المدينةالمنورة</option>
                    <option>الدمام</option>
                </select>
            </label>
            <label className="form-control w-fit">
                <div className="label">
                    <span className="label-text text-black">التخصصات</span>
                </div>
                <select className="select select-bordered" defaultValue={'الأسنان'}>
                    <option >الأسنان</option>
                    <option>الأنف والأذن</option>
                    <option>الطب النفسي</option>
                    <option>المخ والأعصاب</option>
                </select>
            </label>
           <button className='bg-[--main-color-green]  p-4 rounded-[50%] flex-between-center md:self-end '>
           <img className='md:w-[60px]' src={search_icon} alt="search_icon"/>
           </button>
        </form>
            <label className='flex-between-center gap-4 my-4 mx-0 md:mr-14 avenir-book'>
            <input type="checkbox" defaultChecked className="checkbox border-2 rounded-none" />
            <span>لديك تأمين صحي</span>
            </label>
        </>
     );
}

export default FormSearch;