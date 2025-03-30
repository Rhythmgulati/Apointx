import React from 'react'
import { assets } from '../assets/assets'

function Banner() {
  return (
    <div className="h-[60vh] rounded-4xl bg-blue-500 flex items-center justify-around">
      <div className="left">
       <div className="mb-2">
       <p className="text-white text-6xl font-semibold">Book Appointment</p>
       <p className="text-white text-4xl font-semibold">With 100+ Trusted Doctors</p>
       </div>
       <button className="p-2.5 bg-blue-200 rounded-4xl mt-3 text-m font-medium">Create Account</button>
      </div>
      <div className="right flex items-center justify-center">
        <img className="w-105" src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
