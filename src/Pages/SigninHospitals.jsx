import * as React from 'react';
import FormSigninHospitals from '../Components/Sign/signin/components/hospitals/components/FormSigninHospitals';
import { SideOptions } from '../Components/Sign/signin/components/SideOptions';

export function SigninHospitals() {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <FormSigninHospitals />
      <SideOptions />
    </div>
  );
};