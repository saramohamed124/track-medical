import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerHospital } from '../../../../../../api/api';
import { CitiesData } from './cities';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Component for map marker
function LocationMarker({ setMapLocation }) {
    const [position, setPosition] = useState(null);

    useMapEvents({
        click(e) {
            setPosition(e.latlng);
            setMapLocation({ lat: e.latlng.lat, long: e.latlng.lng });
        }
    });

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
}

export default function SignUpHospitalsCustom() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [mapLocation, setMapLocation] = useState({ lat: 0, long: 0 });
    const [mapError, setMapError] = useState(false)
    const citiesData = [...CitiesData];

    // Regex patterns for validation
    const nameArRegex = /^[\u0600-\u06FF\s]+$/;
    const nameEnRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^((([0]{2}|[+])966|20)|0)(5\d{8})|(1\d{9})$/;
   
    
    async function handleSubmitSignup(data) {
       
    
    try {
        console.log(mapLocation.lat === 0 && mapLocation.long === 0);
        if(mapLocation.lat === 0 && mapLocation.long === 0){
            setMapError(true)
        }else{
            setMapError(false)
        }
        const res = await registerHospital({ type: "Hospital", ...data, mapLocation });

        const status = res.status || res.response?.status || res.data?.status;

        console.log("Status:", status);
        if (status === 200 || status === 201) {
            navigate('/'); 
        }
        
    } catch (error) {
        
        const status = error.status || error.response.status || error.data?.status;
        if (status === 400 || status === 401) {
            setErrorMsg('هذا الحساب موجود من قبل');
            setTimeout(()=>{
            navigate('/signin-hospitals')
            },3000)
        }  else {
            setErrorMsg('حدث خطأ غير متوقع');
        }
        console.error("Error during registration:", error);
        // setErrorMsg('حدث خطأ أثناء تسجيل الحساب'); // Account Exist Already I Will Work on This Problem
        console.log(error.response.status);
        
    }
    }

    return (
        <div className="form-signup h-fit lg:h-full bg-gradient-to-br from-green-400 to-teal-500 p-5 shadow-md">
            <div className='p-5'>
                <p className="avenir-heavy text-3xl text-white mb-9">طلب تسجيل مركز طبي</p>
                <form className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5" onSubmit={handleSubmit(handleSubmitSignup)}>

                    <label className="form-control w-full max-w-xs">
                        <div>
                            <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الإسم باللغة العربية</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="الإسم باللغة العربية" 
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
                        <div className="label">
                            <span className="label-text text-white">المدينة/المنطقة</span>
                        </div>
                        <select 
                            className="select select-bordered avenir-book bg-white text-gray-500 w-full max-w-xs" 
                            {...register("city", { required: "يرجى اختيار المدينة أو المنطقة" })}
                        >
                            <option value="">اختر المدينة أو المنطقة</option>
                            {citiesData.map((e, index) => (
                                <option key={index} value={e}>{e}</option>
                            ))}
                        </select>
                        {errors.city && <span className='text-red-600 avenir-book'>{errors.city.message}</span>}
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

                    <label className="form-control w-full max-w-xs lg:row-[3]">
                        <div>
                            <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>البريد الإلكتروني</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="ادخل عنوان البريد الإلكتروني" 
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

                    <label className="form-control w-full max-w-xs lg:row-[3/5] lg:col-[2]">
                        <div>
                            <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>وصف</span>
                        </div>
                        <textarea 
                            className="textarea textarea-bordered bg-white h-[150px] w-full max-w-xs avenir-book" 
                            placeholder='ادخل وصف'
                            {...register("description",{required: true})}
                        ></textarea>
                        {errors.description && <span className='text-red-600 avenir-book'>الوصف مطلوب</span>}
                    </label>

                    <label className="form-control w-full max-w-xs lg:row-[4] lg:col-[1]">
                        <div>
                            <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الموقع على الخريطة </span>
                        </div>
                        <div className="w-full lg:col-span-2 h-64 overflow-hidden" >
                            <MapContainer center={[24.7136, 46.6753]} zoom={10} style={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <LocationMarker setMapLocation={setMapLocation}  />
                            </MapContainer>
                            
                        </div>
                        {mapError && (
                                <span className='text-red-600 avenir-book'>برجاء اختيار موقع علي الخريطة</span>
                            )}
                    </label>

                    <label className='avenir-book text-white flex-box-center flex-col gap-4 my-4  lg:row-[4] lg:col-[2]'>
                        <div className="checkbox-terms flex gap-1">
                        <input type="checkbox" className="checkbox border-2 rounded-none bg-white text-base" {...register("termsAgree", { required: "الموافقة على الشروط والأحكام مطلوبة" })} />
                        <span>الموافقة على الشروط والأحكام</span>
                        </div>
                        {errors.termsAgree && <span className='text-red-600 avenir-book'>يجب الموافقة علي الشروط والأحكام</span>}
                        </label>
                    {errorMsg && <span className='text-red-600 avenir-book lg:row-[5] lg:col-[1/3]'>{errorMsg}</span>}

                    <button type="submit" className="btn mt-9 px-9 rounded-md text-black hover:bg-opacity-5 bg-[--main-bg-color-btn] lg:row-[5] lg:col-[1/3]">إرسال الطلب</button>
                </form>
            </div>
        </div>
    );
}
