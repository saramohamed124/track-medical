import React from 'react';
import { SideOptionsSignup } from '../Components/Sign/signup/components/SideOptionsSignup';
// import { FormSignupHospitals } from '../Components/Sign/signup/components/hospitals/components/FormSignupHospitals';
import SignUpHospitalsCustom from '../Components/Sign/signup/components/hospitals/components/SignUpHospitalsCustom';

const SignupHospitals = () => {
    return (
        <div className='flex flex-col lg:flex-row signup-hospitals'>
            {/* <FormSignupHospitals /> */}
            <SignUpHospitalsCustom/>
            <SideOptionsSignup />
        </div>
    );
};

export default SignupHospitals;