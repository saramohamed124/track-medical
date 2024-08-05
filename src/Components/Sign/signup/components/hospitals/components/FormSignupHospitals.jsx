import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../../../context/auth/hospitals/AuthHospitalProviderSignUp';
import { registerHospital } from '../../../../../../api/api';

export function FormSignupHospitals() {
  const [error, setErrors] = React.useState({});
  const {
    nameAr, setNameAr,
    nameEn, setNameEn,
    email, setEmail,
    phone, setPhone,
    city, setCity,
    description, setDescription,
    googleMapLink, setGoogleMapLink
  } = useContext(AuthContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Parse googleMapLink to get lat and long
    const mapLocation = {};
    const regex = /@([-+]?[0-9]*\.?[0-9]+),([-+]?[0-9]*\.?[0-9]+)/;
    const match = googleMapLink.match(regex);
    if (match) {
      mapLocation.lat = parseFloat(match[1]);
      mapLocation.long = parseFloat(match[2]);
    } else {
      mapLocation.lat = 0; // Default or handle accordingly
      mapLocation.long = 0; // Default or handle accordingly
    }

    const formData = {
      type: "Hospital",
      arName: nameAr,
      enName: nameEn,
      email: email,
      phone: phone,
      city: city,
      description: description,
      mapLocation: mapLocation
    };

    try {
      await registerHospital(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-signup h-fit lg:h-full bg-gradient-to-br from-green-400 to-teal-500 p-5 shadow-md">
      <div className='p-5'>
        <p className="avenir-heavy text-3xl text-white mb-9">طلب تسجيل مركز طبي</p>
        <form className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5" onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الإسم باللغة العربية</span>
            </div>
            <input 
              type="text" 
              placeholder="الإسم باللغة العربية" 
              className="input input-bordered bg-white w-full max-w-xs avenir-book" 
              value={nameAr} 
              onChange={(e) => setNameAr(e.target.value)} 
            />
            {error.nameAr && <span className="text-red-500">{error.nameAr}</span>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الإسم باللغة الإنجليزية</span>
            </div>
            <input 
              type="text" 
              placeholder="الإسم باللغة الإنجليزية" 
              className="input input-bordered bg-white w-full max-w-xs avenir-book" 
              value={nameEn} 
              onChange={(e) => setNameEn(e.target.value)} 
            />
            {error.nameEn && <span className="text-red-500">{error.nameEn}</span>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white">المدينة/المنطقة</span>
            </div>
            <select 
              className="select select-bordered avenir-book bg-white text-gray-500 w-full max-w-xs" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value=''>اختر المدينة أو المنطقة</option>
              <option value='الرياض'>الرياض</option>
              <option value='مكة المكرمة'>مكة المكرمة</option>
              <option value='جدة'>جدة</option>
              <option value='المدينة المنورة'>المدينة المنورة</option>
              <option value='الدمام'>الدمام</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>رقم الجوال</span>
            </div>
            <input 
              type="text" 
              placeholder="رقم الجوال" 
              className="input input-bordered bg-white w-full max-w-xs avenir-book" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            {error.phone && <span className="text-red-500">{error.phone}</span>}
          </label>
          <label className="form-control w-full max-w-xs lg:row-[3]">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>البريد الإلكتروني</span>
            </div>
            <input 
              type="text" 
              placeholder="ادخل عنوان البريد الإلكتروني" 
              className="input input-bordered bg-white w-full max-w-xs avenir-book" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {error.email && <span className="text-red-500">{error.email}</span>}
          </label>
          <label className="form-control w-full max-w-xs lg:row-[3/5]">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>وصف (اختياري)</span>
            </div>
            <textarea 
              className="textarea textarea-bordered bg-white h-[150px] w-full max-w-xs avenir-book" 
              placeholder='ادخل وصف (اختياري)'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs lg:row-[4] lg:col-[1]">
            <div>
              <span className='block avenir-heavy text-white mt-3 mb-1 text-start'>الموقع على الخريطة (اختياري)</span>
            </div>
            <input 
              type="text" 
              placeholder="رابط الموقع على الخريطة" 
              className="input input-bordered bg-white w-full max-w-xs avenir-book" 
              value={googleMapLink} 
              onChange={(e) => setGoogleMapLink(e.target.value)} 
            />
          </label>
          <label className='avenir-book text-white flex-box-center gap-4 my-4 lg:translate-x-[0%] lg:translate-y-[-350%] lg:row-[5] lg:col-[2]'>
            <input type="checkbox" className="checkbox border-2 rounded-none bg-white text-base" />
            <span>الموافقة على الشروط والأحكام</span>
          </label>
          <button type="submit" className="btn mt-9 px-9 rounded-md text-black hover:bg-opacity-5 bg-[--main-bg-color-btn] lg:row-[5] lg:col-[1/3]">إرسال الطلب</button>
        </form>
      </div>
    </div>
  );
};
