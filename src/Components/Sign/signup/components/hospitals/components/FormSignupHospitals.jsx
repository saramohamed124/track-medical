import * as React from 'react';

export function FormSignupHospitals() {
  return (
    <div className="form-signup h-fit lg:h-full">
        <div className='p-5'>
        <p className="avenir-heavy text-3xl text-white mb-9">طلب تسجيل مركز طبي</p>
        <form className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 justify-items-center gap-5 ">
        <label className="form-control w-full max-w-xs">
            <div >
            <span className='block avenir-heavy text-white mt-3 mb-1'>الإسم باللغة العربية</span>
            </div>
            <input type="text" placeholder="الإسم باللغة العربية" className="input input-bordered w-[90%] m-auto max-w-xs avenir-book" />
        </label>
        <label className="form-control w-full max-w-xs">
            <div >
            <span className='block avenir-heavy text-white mt-3 mb-1'>الإسم باللغة الإنجليزية</span>
            </div>
            <input type="text" placeholder="الإسم باللغة الإنجليزية" className="input input-bordered w-[90%] m-auto max-w-xs avenir-book" />
        </label>
        <label className="form-control w-full max-w-xs">
            <div >
            <span className='block avenir-heavy text-white mt-3 mb-1'>رقم الجوال</span>
            </div>
            <input type="text" placeholder="رقم الجوال" className="input input-bordered w-[90%] m-auto max-w-xs avenir-book" />
        </label>
        <label className="form-control w-fit">
                <div className="label">
                    <span className="label-text text-white">المدينة/المنطقة</span>
                </div>
                <select className="select select-bordered avenir-book text-gray-500 w-[16rem]" defaultValue={'اختر المدينة أو المنطقة'}>
                <option >اختر المدينة أو المنطقة</option>
                    <option>الرياض</option>
                    <option>مكة المكرمة</option>
                    <option>جدة</option>
                    <option>المدينةالمنورة</option>
                    <option>الدمام</option>
                </select>
            </label>
        <label className="form-control w-full max-w-xs">
            <div >
            <span className='block avenir-heavy text-white mt-3 mb-1'>البريد الإلكتروني</span>
            </div>
            <input type="text" placeholder="ادخل عنوان البريد الإلكتوني" className="input input-bordered w-[90%] m-auto max-w-xs avenir-book" />
        </label>
        
            <label className="form-control w-full max-w-xs">
            <div >
            <span className='block avenir-heavy text-white mt-3 mb-1'>وصف (اختياري)</span>
            </div>
            <textarea className="textarea textarea-bordered h-24"  placeholder='ادخل وصف (اختياري)'></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
            <div >
            <span className='block avenir-heavy text-white mt-3 mb-1'>الموقع علي الخريطة (اختياري)</span>
            </div>
        <iframe className='w-[303px] h-[262px]' title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3414861987!2d47.48202486752016!3d24.72374984734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0455e175c5e1%3A0xfa7d1c7f096df805!2z2KfZhNmF2KrYrdmBINin2YTZiNi32YbZig!5e0!3m2!1sar!2seg!4v1721250153348!5m2!1sar!2seg"  style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </label>
        <label className='avenir-book text-white flex justify-center items-center gap-4 my-4'>
            <input type="checkbox" defaultChecked className="checkbox border-2 rounded-none bg-white" />
            <span>الموافقة على الشروط والأحكام</span>
        </label>
        <button className="btn mt-9 px-9 rounded-md text-black">إرسال الطلب</button>
        </form>
        </div>
    </div>
  );
};