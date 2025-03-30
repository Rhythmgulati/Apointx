import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar() {

  const [token,settoken]=useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-100 "> 
      <img src={assets.logo} alt="" srcset="" className='w-44 cursor-pointer'/>
      <ul className="flex gap-4">
        <NavLink to="/">
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-amber-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/alldoctors">
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-amber-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/about">
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-amber-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/contact">
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-amber-400 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      
        {token?<div className="flex gap-2 group relative "><img src={assets.profile_pic} alt="" srcset="" className="w-12 group rounded-full"/><img src={assets.dropdown_icon} alt="" srcset="" />
        <div className="hidden group-hover:block absolute top-0 right-0 pt-14">
          <div className="bg-stone-200 p-4 gap-4 min-w-48 flex flex-col">
            <p className=" hover:font-bold cursor-pointer ">Edit </p>
            <p className="hover:font-bold cursor-pointer ">My Appointments</p>
            <p className=" hover:font-bold cursor-pointer ">Logout</p>
          </div>
        </div> </div>:  <button onClick={()=>console.log("abc")} className="group">LOGIN</button>
        }
       
    </div>
  )
}

export default Navbar
