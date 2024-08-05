import { Link } from "react-router-dom";

function FormSigninMembers() {
    return ( 
        <div className="form-signs">
        <div>
        <p className="avenir-heavy text-3xl text-white mb-9">تسجيل الدخول</p>
        <form className="flex items-center flex-col gap-2 ">
        <label className="form-control w-full max-w-xs">
            <div className="label avenir-heavy">
                <span className="input-signin">ادخل رقم جوالك</span>
            </div>
            <div className="input input-bordered bg-white flex items-center gap-2 avenir-book">
                <input type="text" placeholder="رقم الجوال" className="grow w-full max-w-xs" />
                <span className="text-[#9ca3af]">966+</span>
                </div>
                </label>
        <button className="btn-signs" onClick={e=>e.preventDefault()}>
            <Link to={'/otp-code'}>تسجيل الدخول
            </Link>
        </button>
        </form>
        </div>
    </div>
     );
}

export default FormSigninMembers;