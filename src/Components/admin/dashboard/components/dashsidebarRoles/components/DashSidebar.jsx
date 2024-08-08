// DashSidebar.js
import React from 'react';
import Cookies from 'js-cookie';
import ErrorNotFound from '../../../../../ErrorNotFound';
import ErrorUnauthorized from '../../../../../ErrorUnauthorized';
import home_icon from '../assets/icons/home.svg';
import request_icon from '../assets/icons/request.svg';
import ads_icon from '../assets/icons/ads.svg';
import blog_icon from '../assets/icons/blog.svg';
import store_icon from '../assets/icons/store.svg';
import team_icon from '../assets/icons/team.svg';
import hospitals_icon from '../assets/icons/hospitals.svg';
import companies_icon from '../assets/icons/company.svg';
import logout_icon from '../assets/icons/logout.svg';
import { Link } from 'react-router-dom';

export default function DashSidebar() {
  const userRole = Cookies.get('userRole');
  const token = Cookies.get('authToken');
  
  const roles = [
    {
      type: 'Track Super Admin',
      links: [
        { name: 'لوحة التحكم', src: home_icon, link: '/admin/dashboard/' },
        { name: 'طلبات', src: request_icon, link: '/request' },
        { name: 'إعلانات', src: ads_icon, link: '/ads' },
        { name: 'مدونة', src: blog_icon, link: '' },
        { name: 'المتجر', src: store_icon, link: '' },
        { name: 'الفريق', src: team_icon, link: '/team-admin' },
        { name: 'المستشفيات', src: hospitals_icon, link: '/hospitals' },
        { name: 'الشركات', src: companies_icon, link: '/companies' }
      ]
    },
    {
      type: 'Admin',
      links: [
        { name: 'لوحة التحكم', src: home_icon, link: '/' }
      ]
    }
  ];

  // Find the role object based on the userRole
  const role = roles.find(role => role.type === userRole);

  // Handle unauthorized access or role not found
//   if (!token) {
//     return <ErrorUnauthorized />;
//   }
//   if (!role) {
//     return <ErrorNotFound />;
//   }

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
