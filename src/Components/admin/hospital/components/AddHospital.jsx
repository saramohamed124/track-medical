import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AddHospitalAdmin} from '../../../../api/api'; // Assuming fetchClientDetails is a function in your API module
import Cookies from 'js-cookie';
import ErrorNotFound from '../../../ErrorNotFound';

export default function AddHospital() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const role = Cookies.get('userRole');

    // Regex patterns for validation
    const nameArRegex = /^[\u0600-\u06FF\s]+$/;
    const nameEnRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^((([0]{2}|[+])966|20)|0)(5\d{8})|(1\d{9})$/;

    async function handleSubmitSignup(data) {
        try {
            const res = await AddHospitalAdmin({ type: "Hospital", ...data });
            const status = res.status || res.response?.status || res.data?.status;
            const id = res.data.data.user.clientId;
            if (status === 200 || status === 201) {
                Cookies.set('HospitalId', id);
                

                // navigate('/hospital-test-admin'); 
            } else {
                setErrorMsg('حدث خطأ غير متوقع');
            }
        } catch (error) {
            const status = error.response?.status || error.status || error.data?.status;

            if (status === 400 || status === 401) {
                setErrorMsg('هذا الحساب موجود من قبل');
            } else {
                setErrorMsg('حدث خطأ غير متوقع');
            }
            console.error("Error during registration:", error);
        }
    }

    return (
        <div className='m-auto w-full'>
             {(role === 'Track Super Admin')?(
            <div className='my-4 mx-3 flex flex-col justify-around w-full overflow-y-scroll overflow-x-clip'>
            <p className='avenir-heavy text-4xl text-center text-black mx-10 my-3'>تسجيل مستشفى</p>
            <form
                className="w-[80%] md:w-full justify-items-center items-center text-center m-auto md:max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-5 bg-[--main-color-green] p-4 rounded-md"
                onSubmit={handleSubmit(handleSubmitSignup)}
            >
                <label className="form-control w-full max-w-xs">
                    <div>
                        <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>اسم المستشفى باللغة العربية</span>
                    </div>
                    <input
                        type="text"
                        placeholder="اسم المستشفى باللغة العربية"
                        className="input input-bordered bg-white w-full max-w-xs avenir-book"
                        {...register("arName", {
                            required: "الاسم مطلوب",
                            pattern: {
                                value: nameArRegex,
                                message: "يجب أن يكون الاسم باللغة العربية"
                            },
                            minLength: {
                                value: 10,
                                message: "الاسم يجب أن يكون طوله على الأقل 10 أحرف"
                            }
                        })}
                    />
                    {errors.arName && <span className="text-red-600 avenir-book">{errors.arName.message}</span>}
                </label>

                <label className="form-control w-full max-w-xs">
                    <div>
                        <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الإسم باللغة الإنجليزية</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="الإسم باللغة الإنجليزية" 
                        className="input input-bordered bg-white w-full max-w-xs avenir-book" 
                        {...register("enName", { 
                            required: "الاسم مطلوب", 
                            pattern: {
                                value: nameEnRegex,
                                message: "يجب أن يكون الاسم باللغة الإنجليزية"
                            }, 
                            minLength: {
                                value: 10,
                                message: "الاسم يجب أن يكون طوله على الأقل 10 أحرف"
                            } 
                        })}
                    />
                    {errors.enName && <span className="text-red-600 avenir-book">{errors.enName.message}</span>}
                </label>

                <label className="form-control w-full max-w-xs">
                    <div>
                        <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>البريد الإلكتروني</span>
                    </div>
                    <input
                        type="text"
                        placeholder="البريد الإلكتروني"
                        className="input input-bordered bg-white w-full max-w-xs avenir-book"
                        {...register("email", {
                            required: "البريد الإلكتروني مطلوب",
                            pattern: {
                                value: emailRegex,
                                message: "البريد الإلكتروني غير صحيح"
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-600 avenir-book">{errors.email.message}</span>}
                </label>

                <label className="form-control w-full max-w-xs">
                    <div>
                        <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>رقم الجوال</span>
                    </div>
                    <input
                        type="text"
                        placeholder="رقم الجوال"
                        className="input input-bordered bg-white w-full max-w-xs avenir-book"
                        {...register("phone", {
                            required: "رقم الجوال مطلوب",
                            pattern: {
                                value: phoneRegex,
                                message: "رقم الجوال غير صحيح"
                            }
                        })}
                    />
                    {errors.phone && <span className="text-red-600 avenir-book">{errors.phone.message}</span>}
                </label>

                <label className="form-control w-full max-w-xs">
                    <div>
                        <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>كلمة المرور</span>
                    </div>
                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        className="input input-bordered bg-white w-full max-w-xs avenir-book"
                        {...register("password", {
                            required: "كلمة المرور مطلوبة",
                            pattern: {
                                value: nameEnRegex,
                                message: "يجب أن تكون كلمة المرور باللغة الإنجليزية"
                            },
                            minLength: {
                                value: 10,
                                message: "كلمة المرور يجب أن تكون طوله على الأقل 10 أحرف"
                            }
                        })}
                    />
                    {errors.password && <span className="text-red-600 avenir-book">{errors.password.message}</span>}
                </label>

                <label className="form-control w-full max-w-xs">
                    <div>
                        <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>تأكيد كلمة المرور</span>
                    </div>
                    <input
                        type="password"
                        placeholder="تأكيد كلمة المرور"
                        className="input input-bordered bg-white w-full max-w-xs avenir-book"
                        {...register("passwordConfirm", {
                            required: "تأكيد كلمة المرور مطلوب",
                            validate: value => value === getValues('password') || "كلمات المرور غير متطابقة"
                        })}
                    />
                    {errors.passwordConfirm && <span className="text-red-600 avenir-book">{errors.passwordConfirm.message}</span>}
                </label>

                {errorMsg && <div className=" md:col-[1/3] text-red-600 avenir-book mb-4">{errorMsg}</div>}
        
                <button
                    type="submit"
                    className="btn w-fit flex md:col-[1/3] mx-auto mt-9 px-9 rounded-md avenir-book text-black hover:bg-opacity-5 bg-[--main-bg-color-btn]"
                >
                    إرسال الطلب
                </button>
            </form>
        </div>
        ):(
            <div className='my-4 mx-auto'>
            <ErrorNotFound/>
            </div>
        )} 
       </div>
  
    );
}
