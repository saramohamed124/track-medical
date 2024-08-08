import React from 'react'
import DashSidebar from './components/dashsidebarRoles/components/DashSidebar'
import NavbarDash from './components/DashNavbar/NavbarDash'
import DashboardHome from './components/Dashhome/DashboardHome'
import { Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';
import ErrorUnauthorized from '../../ErrorUnauthorized'
import ErrorNotFound from '../../ErrorNotFound'

export default function DashboardAll() {
  const userRole = Cookies.get('userRole');
  const token = Cookies.get('authToken');

  if(!token){
    return <ErrorUnauthorized/>
   }if(token && (userRole !== 'Track Super Admin')){
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
