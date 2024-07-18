import * as React from 'react';
import LogoOtp from '../Components/Sign/signin/components/members/components/LogoOtp';
import FormOtp from '../Components/Sign/signin/components/members/components/FormOtp';

export function SignFormOtp() {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <FormOtp />
      <LogoOtp />
    </div>
  );
};