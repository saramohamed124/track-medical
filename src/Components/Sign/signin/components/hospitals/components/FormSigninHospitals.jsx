import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { logInHospital } from '../../../../../../api/api';
import { useNavigate } from 'react-router-dom';

function FormSigninHospitals() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            // Authenticate the user
            const response = await logInHospital(data);

            // Save the authentication token to cookies
            const token = response.data.data.token;
            // Cookies.set('authToken', token);
            // console.log(response);
            
            

            // Check the user role from the response
            const userRole = response.data.data.user.type;
            // console.log(userRole);
            
            // Save user role to cookies
            Cookies.set('userRole', userRole);

            navigate('/');
            // Handle successful login (e.g., redirect or show success message)

            console.log('Login successful');
        } catch (error) {
            // console.error('Login failed', error.response ? error.response.data : error.message);
             console.error('Login failed');
        }
    };

    return ( 
        <div className="form-signs">
            <div>
                <p className="avenir-heavy text-3xl text-white mb-9">تسجيل الدخول</p>
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
    );
}

export default FormSigninHospitals;
