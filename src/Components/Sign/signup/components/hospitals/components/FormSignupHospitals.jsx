import * as React from 'react';
import { useContext, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { AuthContext } from '../../../../../../context/auth/hospitals/AuthHospitalProviderSignUp';
import { registerHospital } from '../../../../../../api/api';
import 'leaflet/dist/leaflet.css';
import { CitiesData } from './cities';


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

export function FormSignupHospitals() {
  const [errors, setErrors] = useState({});
  const citiesData = [...CitiesData]
  const {
    nameAr, setNameAr,
    nameEn, setNameEn,
    email, setEmail,
    phone, setPhone,
    city, setCity,
    description, setDescription,
    googleMapLink, setGoogleMapLink,
  } = useContext(AuthContext);
  const [cityerror,setErrorCity] = useState(false)

  const [mapLocation, setMapLocation] = useState({ lat: 0, long: 0 });

  // Regex patterns for validation
  const nameArRegex = /^[\u0600-\u06FF\s]+$/;
  const nameEnRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    // Validate the selected value
    if (citiesData.includes(selectedValue) && nameArRegex.test(selectedValue)) {
      setCity(selectedValue);
    } else {
      // Optionally handle invalid selection
      setErrorCity(true);
    }
  };
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
      const response = await registerHospital(formData);
      console.log('Form submitted successfully:', response.data);
      setNameAr('');
      setNameEn('');
      setEmail('');
      setCity('');
      setPhone('');
      setDescription('');
      setGoogleMapLink('');
    } catch (error) {
      console.error('Form submission error:', error);
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
            {errors.nameAr && <span className="text-red-500">{errors.nameAr}</span>}
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
            {errors.nameEn && <span className="text-red-500">{errors.nameEn}</span>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white">المدينة/المنطقة</span>
            </div>
            <select 
              className="select select-bordered avenir-book bg-white text-gray-500 w-full max-w-xs" 
              value={city}
              onChange={handleChange}
              >
              <option value={city}>اختر المدينة أو المنطقة</option>
              {citiesData.map((e, index) => (
                <option key={index} value={e}>{e}</option>
              ))}
            </select>
          </label>
          {errors.city && <span className="text-red-500">{errors.city}</span>}
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
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
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
            {errors.email && <span className="text-red-500">{errors.email}</span>}
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
            <div className="w-full lg:col-span-2 h-64">
              <MapContainer center={[24.7136, 46.6753]} zoom={10} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker setMapLocation={setMapLocation} />
              </MapContainer>
            </div>
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
}