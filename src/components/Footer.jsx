import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className="top grid grid-cols-[3fr_1fr_1fr] pt-20 pb-10 px-5 gap-30 items-start">
        <div className="one flex flex-col gap-4 items-start ">
        <img src={assets.logo} alt="" />
        <p className="w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="two">
            <p className="font-bold text-lg mb-2">COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
            </ul>
        </div>
        <div className="three">
        <p className="font-bold text-lg mb-2">GET IN TOUCH</p>
            <ul>
                <li>+34322 34 2233</li>
                <li>Aboutus@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className="bottom py-5 border-t-2 border-blue-300 w-3/4 mx-auto text-center">
       <p>Copyright 2024 @ RG.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
