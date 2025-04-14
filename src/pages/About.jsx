import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <h2 className="text-center py-11 text-4xl">About Us</h2>
      <div className="flex gap-5">
       <div className="left w-2/6">
        <img src={assets.about_image} alt="" className="w-full rounded-xl"/>
      </div>
      <div className="right w-3/6 flex flex-col my-auto">
      Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
      <br /><br />
      Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
<br /><br />
     <span className="font-medium block">Our Vision</span>
    Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
      </div>
      </div>

      <h2 className='py-11 text-4xl'>Why choose us</h2>
      <div className="flex justify-center items-center align-middle mx-auto ">
        <div className="box p-13 border-1 border-gray-200 shadow-2xl w-[33%] hover:bg-blue-400 transition-all duration-500"><h3>EFFICIENCY:</h3><p>Streamlined appointment scheduling that fits into your busy lifestyle.</p></div>
        <div className="box p-13 border-1 border-gray-200 shadow-2xl w-[33%] hover:bg-blue-400 transition-all duration-500"><h3>EFFICIENCY:</h3><p>Streamlined appointment scheduling that fits into your busy lifestyle.</p></div>
        <div className="box p-13 border-1 border-gray-200 shadow-2xl w-[33%] hover:bg-blue-400 transition-all duration-500"><h3>EFFICIENCY:</h3><p>Streamlined appointment scheduling that fits into your busy lifestyle.</p></div>
      </div>
    </div>
  )
}

export default About
