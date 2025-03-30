import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className="h-[80vh] rounded-2xl flex items-center gap-5 my-6 px-20 bg-blue-500">
      <div className="left flex flex-col items-start gap-4 max-w-2/4">
      <h2 className="text-6xl text-white font-bold">Book Appointment <br /> With Trusted Doctors</h2>
      <div className="grouped flex gap-2 text-l ">
        <img src={assets.group_profiles} alt="" srcset="" />
        <p className="text-white font-medium">Simply browse through our extensive list of trusted doctors,
        schedule your appointment hassle-free.</p>
      </div>
      <button>Book Appointment</button>
      </div>
      
      <div className="right flex justify-end">
       <img src={assets.header_img} alt=""  className=''/>
      </div>
    </div>
  )
}

export default Header
