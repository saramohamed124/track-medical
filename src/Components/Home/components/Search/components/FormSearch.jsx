import search_icon from '../assets/icons/search_icon.svg'

function FormSearch() {
    return ( 
        <>
                <form className="form-search">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text text-black">اسم المستشفى</span>
                </div>
                <div className="input input-bordered bg-white flex items-center gap-2 rounded-[29px]">
                <input type="text" placeholder="اسم المستشفى" className="grow w-full max-w-xs" />
                <img 
                    className="h-4 w-4 opacity-70"
                src={search_icon} alt="search_icon"/>
                </div>
            </label>
            <label className="form-control w-fit">
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
            <label className="form-control w-fit">
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
           <button className='bg-[--main-color-green]  p-4 rounded-[50%] flex-between-center md:self-end butn'>
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