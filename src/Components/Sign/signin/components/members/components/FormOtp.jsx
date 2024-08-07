import { useState } from "react";

function FormOtp() {
    return ( 
        <div className="form-signs">
        <div>
        <p className="avenir-heavy text-3xl text-white mb-9">تسجيل الدخول</p>
         <p className="avenir-heavy text-xl text-white mb-9">أهلا أحمد، ادخل كود التأكيد </p>
       <form className="flex items-center flex-col gap-2 ">
       <label className="form-control w-full max-w-xs">
            <div className=" avenir-book">
            <p className="input-signin">سيصلك كود تأكيد حسابي في رسالة نصية على
                رقم جوالك الذي ادخلته مسبقا</p>
            </div>
            <input onChange={(e)=> setOtp(e.target.value)} type="text" placeholder="كود من 6 ارقام" className="input input-bordered bg-white w-[90%] m-auto max-w-xs avenir-book" />
        </label>
        <button className="btn-signs">تسجيل الدخول</button>
        </form>
        </div>
    </div>
     );
}

export default FormOtp;