import * as React from 'react';
import { useContext } from 'react';
import  { AuthContext } from '../../../../../../context/auth/hospitals/AuthHospitalProviderSignUp';
import { registerHospital } from '../../../../../../api/api';

export function FormSignupHospitals() {
  // Call Values From AuthHospitalSignUP
  const [error ,setErrors] = React.useState({})
  const {
    nameAr,setNameAr,
    nameEn,setNameEn,
    email,setEmail,
    phone,setPhone,
    city,setCity,
    description,setDescription,
    googleMapLink,setGoogleMapLink
  } = useContext(AuthContext)
  // Regex Here
  const nameArRegex = /^[\u0600-\u06FF\s]+$/;
  const nameEnRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  const validate = () => {
    const newErrors = {};
    if (!nameArRegex.test(nameAr)) newErrors.nameAr = "الاسم باللغة العربية غير صحيح";
    if (!nameEnRegex.test(nameEn)) newErrors.nameEn = "الاسم باللغة الإنجليزية غير صحيح";
    if (!emailRegex.test(email)) newErrors.email = "البريد الإلكتروني غير صحيح";
    if (!phoneRegex.test(phone)) newErrors.phone = "رقم الجوال غير صحيح";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  if (!validate()) return;
    const formData = {
      nameAr,nameEn,email,phone,city,description,googleMapLink
    }
    try{
      await registerHospital(formData);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="form-signup h-fit lg:h-full bg-gradient-to-br from-green-400 to-teal-500 p-5 shadow-md">
      <div className='p-5'>
        <p className="avenir-heavy text-3xl text-white mb-9">طلب تسجيل مركز طبي</p>
        <form className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5">
          <label className="form-control w-full max-w-xs">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الإسم باللغة العربية</span>
            </div>
            <input type="text" placeholder="الإسم باللغة العربية" className="input input-bordered w-full max-w-xs avenir-book" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الإسم باللغة الإنجليزية</span>
            </div>
            <input type="text" placeholder="الإسم باللغة الإنجليزية" className="input input-bordered w-full max-w-xs avenir-book" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white">المدينة/المنطقة</span>
            </div>
            <select className="select select-bordered avenir-book text-gray-500 w-full max-w-xs" defaultValue={'اختر المدينة أو المنطقة'}>
              <option>اختر المدينة أو المنطقة</option>
              <option>الرياض</option>
              <option>مكة المكرمة</option>
              <option>جدة</option>
              <option>المدينة المنورة</option>
              <option>الدمام</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>رقم الجوال</span>
            </div>
            <input type="text" placeholder="رقم الجوال" className="input input-bordered w-full max-w-xs avenir-book" />
          </label>
          <label className="form-control w-full max-w-xs lg:row-[3]">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>البريد الإلكتروني</span>
            </div>
            <input type="text" placeholder="ادخل عنوان البريد الإلكتروني" className="input input-bordered w-full max-w-xs avenir-book" />
          </label>
          <label className="form-control w-full max-w-xs lg:row-[3/5]">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>وصف (اختياري)</span>
            </div>
            <textarea className="textarea textarea-bordered h-[150px] w-full max-w-xs avenir-book" placeholder='ادخل وصف (اختياري)'></textarea>
          </label>
          
          <label className="form-control w-full max-w-xs lg:row-[4] lg:col-[1]">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الموقع على الخريطة (اختياري)</span>
            </div>
            <iframe className='w-full max-w-xs h-[200px]' title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3414861987!2d47.48202486752016!3d24.72374984734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0455e175c5e1%3A0xfa7d1c7f096df805!2z2KfZhNmF2KrYrdmBINin2YTZiNi32YbZig!5e0!3m2!1sar!2seg!4v1721250153348!5m2!1sar!2seg" style={{border: '0px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </label>
       
          
          <label className='avenir-book text-white flex-box-center gap-4 my-4 lg:translate-x-[0%] lg:translate-y-[-350%] lg:row-[5] lg:col-[2]'>
            <input type="checkbox" className="checkbox border-2 rounded-none bg-white text-base" />
            <span>الموافقة على الشروط والأحكام</span>
          </label>
          <button className="btn mt-9 px-9 rounded-md text-black bg-white lg:row-[5] lg:col-[1/3]">إرسال الطلب</button>
        </form>
      </div>
    </div>
  );
};
