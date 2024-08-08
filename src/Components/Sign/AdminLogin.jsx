import React from 'react'
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { logInHospital } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import admin_login from './assets/admin-login.gif'
export default function AdminLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            // Authenticate the user
            const response = await logInHospital(data);
            // console.log(response.data.data.user.clientId);
            const id = response.data.data.user.clientId;
if(id){
    Cookies.set('HospitalId', id);
    
}
            // Save the authentication token to cookies
            const token = response.data.data.token;
            Cookies.set('authToken', token);
            // console.log(response);
            
            // console.log(response);
            

            // Check the user role from the response
            const userRole = response.data.data.user.type;
            
            // Save user role to cookies
            Cookies.set('userRole', userRole);
                console.log(userRole);
                
            navigate('/admin/dashboard');

            console.log('Login successful');
        } catch (error) {
             console.error('Login failed');
        }
    };
  return (
    <div className='flex flex-col md:flex-row h-screen '>
        <img src={admin_login} alt='admin_login' className='side-options-parent m-auto'/>
           <div className="form-signs ">
    <div>
        <p className="avenir-heavy text-3xl text-white mb-9">دخول الأدمن</p>
        <form className="flex items-center flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full max-w-xs">
                <div className="label avenir-heavy">
                    <span className="input-signin">ادخل البريد الإلكتروني</span>
                </div>
                <input 
                    type="text" 
                    placeholder="البريد الإلكتروني" 
                    className="input input-bordered bg-white w-[90%] m-auto max-w-xs avenir-book" 
                    {...register('email', { required: 'البريد الإلكتروني مطلوب' })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label avenir-heavy">
                    <span className="input-signin">كلمة المرور</span>
                </div>
                <input 
                    type="password" 
                    placeholder="كلمة المرور" 
                    className="input input-bordered bg-white w-[90%] m-auto max-w-xs avenir-book" 
                    {...register('password', { required: 'كلمة المرور مطلوبة' })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </label>
            <button type="submit" className="btn-signs">تسجيل الدخول</button>
        </form>
    </div>
</div>
    </div>
 
  )
}
