import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../../../../../firebase/firebase";

function FormSigninMembers() {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate(); // For navigation


    // const sendOtp = async (e) => {
    //     e.preventDefault(); // Fix typo here
    //     try {
    //         const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    //         const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
    //         console.log(confirmation);
    //         navigate('/otp-code'); // Navigate to OTP page
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const sendOtp = async (e) => {
        e.preventDefault(); // Fix typo here
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
            console.log(confirmation);
            navigate('/otp-code'); // Navigate to OTP page
        } catch (error) {
            console.log(error);
        }
    };

    const handlePhoneChange = (e) => {
        setPhone("+20" + e.target.value); // Set phone number with country code
    };

    return (
        <div className="form-signs">
            <div>
                <p className="avenir-heavy text-3xl text-white mb-9">تسجيل الدخول</p>
                {/* <form className="flex items-center flex-col gap-2" onSubmit={sendOtp}> */}
                <form className="flex items-center flex-col gap-2">
                    <label className="form-control w-full max-w-xs">
                        <div className="label avenir-heavy">
                            <span className="input-signin">ادخل رقم جوالك</span>
                        </div>
                        <div className="input input-bordered bg-white flex items-center gap-2 avenir-book">
                            <input
                                // onChange={handlePhoneChange}
                                type="text"
                                placeholder="رقم الجوال"
                                className="grow w-full max-w-xs"
                            />
                            <span className="text-[#9ca3af]">966+</span>
                        </div>
                    </label>
                        <button className="btn-signs" onClick={e=>e.preventDefault()}>
                        <Link to={'/otp-code'}>تسجيل الدخول
                        </Link>
                    </button>
                     
                    {/* <div id="recaptcha"></div> */}
                </form>
            </div>
        </div>
    );
}

export default FormSigninMembers;
