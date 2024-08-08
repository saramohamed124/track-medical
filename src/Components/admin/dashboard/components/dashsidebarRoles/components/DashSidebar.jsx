import React from 'react';
import Cookies from 'js-cookie';
import logout_icon from '../assets/icons/logout.svg';
import { Link, useNavigate } from 'react-router-dom';
import { roles } from '../../../../roles';
import ErrorNotFound from '../../../../../ErrorNotFound';

export default function DashSidebar() {
  const userRole = Cookies.get('userRole');
  const role = roles.find(role => role.type === userRole);
  const navigate = useNavigate()

  if (!role) {
    return <ErrorNotFound />;
  }
  const logout = ()=>{
    Cookies.remove('authToken')
    Cookies.remove('userRole')
    Cookies.remove('HospitalId')
    navigate('/')
    // console.log(token);
    
}
  return (
    <div>
      <ul className='flex flex-col gap-7 py-4 px-4 lg:w-[250px] text-black avenir-heavy shadow-md h-screen'>
        {role.links.map((link, index) => (
          <li className='' key={index}>
            <Link className='flex flex-row gap-2 items-center' to={link.link}>
            {link.src && <img className=" max-w-6" src={link.src} alt={link.name} />}
            <span className='hidden md:block'>{link.name}</span>
            </Link>
          </li>
        ))}
        <li className='flex flex-row gap-2 items-center mt-10 cursor-pointer' onClick={logout}>
          <img className="max-w-6" src={logout_icon} alt='Logout' />
          <span className='hidden md:block' >Logout</span>
        </li>
      </ul>
    </div>
  );
}
