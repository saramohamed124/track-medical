import React from 'react';
import Cookies from 'js-cookie';
import logout_icon from '../assets/icons/logout.svg';
import { Link } from 'react-router-dom';
import { roles } from '../../../../roles';
import ErrorNotFound from '../../../../../ErrorNotFound';

export default function DashSidebar() {
  const userRole = Cookies.get('userRole');
  const role = roles.find(role => role.type === userRole);

  if (!role) {
    return <ErrorNotFound />;
  }

  return (
    <div>
      <ul className='flex flex-col gap-7 py-4 px-4 lg:w-[250px] text-black avenir-heavy shadow-md h-screen'>
        {role.links.map((link, index) => (
          <li className='flex flex-row gap-2 items-center' key={index}>
            {link.src && <img className="w-[1.8rem] min-w-5" src={link.src} alt={link.name} />}
            <Link className='hidden md:block' to={link.link}>{link.name}</Link>
          </li>
        ))}
        <li className='flex flex-row gap-2 items-center mt-10'>
          <img className="w-[1.8rem] min-w-5" src={logout_icon} alt='Logout' />
          <a className='hidden md:block' href='/'>Logout</a>
        </li>
      </ul>
    </div>
  );
}
