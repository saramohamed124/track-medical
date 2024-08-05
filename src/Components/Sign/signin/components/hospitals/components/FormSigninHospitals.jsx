function FormSigninHospitals() {
    return ( 
        <div className="form-signs">
            <div>
            <p className="avenir-heavy text-3xl text-white mb-9">تسجيل الدخول</p>
            <form className="flex items-center flex-col gap-2 ">
            <label className="form-control w-full max-w-xs">
                <div className="label avenir-heavy">
                    <span className="input-signin">ادخل البريد الإلكتروني</span>
                </div>
                <input type="text" placeholder="البريد الإلكتروني" className="input input-bordered bg-white w-[90%] m-auto max-w-xs avenir-book" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label avenir-heavy">
                    <span className="input-signin">كلمة المرور</span>
                </div>
                <input type="text" placeholder="كلمة المرور" className="input input-bordered bg-white w-[90%] m-auto max-w-xs avenir-book" />
            </label>
            <button className="btn-signs">تسجيل الدخول</button>
            </form>
            </div>
        </div>
     );
}

export default FormSigninHospitals;