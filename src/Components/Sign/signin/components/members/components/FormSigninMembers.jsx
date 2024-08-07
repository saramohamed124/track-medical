import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../../../../../firebase/firebase";

function FormSigninMembers() {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate(); // For navigation

<<<<<<< HEAD
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
=======
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
>>>>>>> c14ee19b2f5ee7960390df90d4508ba1104f12a9

    const handlePhoneChange = (e) => {
        setPhone("+20" + e.target.value); // Set phone number with country code
    };

    return (
        <div className="form-signs">
            <div>
                <p className="avenir-heavy text-3xl text-white mb-9">تسجيل الدخول</p>
<<<<<<< HEAD
                {/* <form className="flex items-center flex-col gap-2" onSubmit={sendOtp}> */}
                <form className="flex items-center flex-col gap-2">
=======
                <form className="flex items-center flex-col gap-2" onSubmit={sendOtp}>
>>>>>>> c14ee19b2f5ee7960390df90d4508ba1104f12a9
                    <label className="form-control w-full max-w-xs">
                        <div className="label avenir-heavy">
                            <span className="input-signin">ادخل رقم جوالك</span>
                        </div>
                        <div className="input input-bordered bg-white flex items-center gap-2 avenir-book">
                            <input
<<<<<<< HEAD
                                // onChange={handlePhoneChange}
=======
                                onChange={handlePhoneChange}
>>>>>>> c14ee19b2f5ee7960390df90d4508ba1104f12a9
                                type="text"
                                placeholder="رقم الجوال"
                                className="grow w-full max-w-xs"
                            />
                            <span className="text-[#9ca3af]">966+</span>
                        </div>
                    </label>
                    <button type="submit" className="btn-signs">
                        تسجيل الدخول
                    </button>
                    <div id="recaptcha"></div>
                </form>
            </div>
        </div>
    );
}

export default FormSigninMembers;
