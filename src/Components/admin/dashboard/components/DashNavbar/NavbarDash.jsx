import React from 'react'
import { Logo } from '../../../../Navbar/components/Logo'
import LeftsideNav from './components/LeftsideNav'
import PermissionsTextNav from './components/PermisionsTextNav'

export default function Navbar() {
  return (
    <div className="navbar bg-white flex flex-col md:flex-row justify-between mx-0  shadow-md mb-2">
    <div className=" flex  gap-5 w-fit">
      <div>
    <Logo/>
      </div>
      <div className="dropdown">
     <PermissionsTextNav/>
      </div>
  {/* <div className="navbar-center block lg:flex"> */}
    {/* </div> */}
    </div>
    <LeftsideNav/>
    </div>
  )
}
