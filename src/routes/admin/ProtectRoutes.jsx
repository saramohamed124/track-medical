import React from 'react'
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

export default function ProtectRoutes() {
    const role = Cookies.get('userRole');

    if(role === "Track Super Admin"){
            // return <Navigate to={'/superAdmin/dashboard'}/>
        }
  return (
    <div>
      
    </div>
  )
}
