import React from 'react'
import { specialityData } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
function Speciality() {

  const speciality = specialityData ;
  console.log(speciality);
  const navigate = useNavigate();  
  return (
    <div className="flex items-center  my-30 justify-center flex-col">
      <h2 className="text-4xl font-medium">Find By Speciality</h2>
      <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className="flex items-center gap-9 py-9">
       {speciality.map((item,index)=>{
        return (
            <div onClick={()=>navigate(`/doctors/${item.speciality}`)} className="w-[40%] hover:translate-y-[-4%] transition-all duration-500">
             <img src={item.image} alt="" />
             <p className="text-center">{item.speciality} </p>
            </div>
        )
       })}
      </div>
    </div>
  )
}

export default Speciality
