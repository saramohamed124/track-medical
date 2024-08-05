import React from 'react';

const FormSignupMembers = () => {
    return (
        <div className="form-signs">
        <div>
        <p className="avenir-heavy text-3xl text-white mb-9">إنشاء حساب</p>
        <form className="flex items-center flex-col gap-2 ">
        <label className="form-control w-full max-w-xs">
            <div className="label avenir-heavy">
                <span className="input-signin">ادخل الإسم </span>
            </div>
            <input type="text" placeholder="الإسم لاكامل" className="input input-bordered bg-white w-full m-auto max-w-xs avenir-book" />
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label avenir-heavy">
                <span className="input-signin">ادخل رقم جوالك</span>
            </div>
            <div className="input input-bordered bg-white flex items-center gap-2 avenir-book">
                <input type="text" placeholder="رقم الجوال" className="grow w-full max-w-xs" />
                <span className="text-[#9ca3af]">966+</span>
            </div>
        </label>
        <label className='avenir-book text-white flex-box-center gap-4 my-4'>
            <input type="checkbox" defaultChecked className="checkbox border-2 rounded-none bg-white" />
            <span>الموافقة على الشروط والأحكام</span>
        </label>
        <button className="btn mt-5 px-9 rounded-md bg-[--main-bg-color-btn] hover:bg-opacity-5 text-black">استمرار</button>
        </form>
        </div>
    </div>
    );
};

export default FormSignupMembers;