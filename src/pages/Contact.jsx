import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className="py-6">
      <h2 className="text-center py-11 text-4xl">Contact Us</h2>
          <div className="flex items-center justify-center">
             <div className="left w-2/6 ">
              <img src={assets.contact_image} alt="" className="rounded-xl w-[60%] mx-auto my-auto"/>
            </div>
            <div className="right w-2/6 flex flex-col my-auto gap-3">
<h2 className="text-xl my-2">OUR OFFICE</h2>
<p>00000 Willms Station
Suite 000, Washington, USA
<br />
Tel: (000) 000-0000
Email: greatstackdev@gmail.com
</p>
<h2 className="text-xl my-2">CAREERS AT PRESCRIPTO</h2>
<p>Learn more about our teams and job openings.</p>
<br />
<button className="w-[30%] border-[.2px] py-3 shadow-blue-500 shadow-md hover:bg-blue-400 transition-all duration-500">Explore Jobs</button>
           </div>
            </div>
      
           
    </div>
  )
}

export default Contact
