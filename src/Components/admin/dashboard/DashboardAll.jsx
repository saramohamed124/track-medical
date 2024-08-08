import React from 'react'
import DashSidebar from './components/dashsidebarRoles/components/DashSidebar'
import NavbarDash from './components/DashNavbar/NavbarDash'
import { Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';
import ErrorUnauthorized from '../../ErrorUnauthorized'
import ErrorNotFound from '../../ErrorNotFound'
import { roles } from '../roles'

export default function DashboardAll() {
  const userRole = Cookies.get('userRole');
  const token = Cookies.get('authToken');
  const role = roles.find(role => role.type === userRole);
// console.log(token);

  if(!token){
    return <ErrorUnauthorized/>
   }if(token && !role){
    return <ErrorNotFound/>
   }
  
  return (
    <div>
      {!token ? (
        <ErrorUnauthorized/>
      ):(
        <>
           <NavbarDash/>
      <div className='flex h-screen'>
        <DashSidebar/>
        <Outlet/>
        </div>
        </>
      )}
    </div>
  )
}
