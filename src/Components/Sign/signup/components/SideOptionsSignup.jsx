import * as React from 'react';
import hospital_icon from '../../assets/icons/hospital_icon.svg'
import member_icon from '../../assets/icons/member_icon.svg'
import { Link } from 'react-router-dom';
export function SideOptionsSignup() {
  return (
    <div className='side-options-parent side-signup'>
      <Link to={'/signup-hospitals'} className='signs-bg-linear side-option signs-bg-linear-choice'>
            <img className=' w-20 md:w-[30%] ' src={hospital_icon} alt="hospital-icon" />
            <p className='text-xl md:text-2xl avenir-heavy text-white'>مركز طبي</p>
        </Link>
        <Link to={'/signup-members'} className='bg-[--main-color-orange] side-option hover:bg-[--main-color-orange-dark]'>
            <img className=' w-20 md:w-[30%] ' src={member_icon} alt="member-icon" />
            <p className='text-xl lg:text-2xl avenir-heavy text-white'>فرد</p>
        </Link>
    </div>
  );
};