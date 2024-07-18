import React from 'react';
import { SideOptionsSignup } from '../Components/Sign/signup/components/SideOptionsSignup';
import FormSignupMembers from '../Components/Sign/signup/components/members/components/FormSignupMembers';

const SignupMembers = () => {
    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <FormSignupMembers />
            <SideOptionsSignup />
        </div>
    );
};

export default SignupMembers;