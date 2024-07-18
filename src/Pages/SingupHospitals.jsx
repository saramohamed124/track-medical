import React from 'react';
import { SideOptionsSignup } from '../Components/Sign/signup/components/SideOptionsSignup';
import { FormSignupHospitals } from '../Components/Sign/signup/components/hospitals/components/FormSignupHospitals';

const SignupHospitals = () => {
    return (
        <div className='flex flex-col md:flex-row signup-hospitals'>
            <FormSignupHospitals />
            <SideOptionsSignup />
        </div>
    );
};

export default SignupHospitals;