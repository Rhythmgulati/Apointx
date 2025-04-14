import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { specialityData } from '../assets/assets';
import AppContext from '../context/AppContext';

function Doctors() {

  const {speciality} = useParams();
  const specialityd = specialityData;

  console.log(speciality);
  

  const {doctors} = useContext(AppContext);
  const [filterdata,setfilterdata]=useState([]); 
  
  const applyfilter=()=>{
    if(speciality){
      setfilterdata(doctors.filter((doc) => doc.speciality === speciality));
    }else{
      setfilterdata(doctors);
    }
  }
  useEffect(()=>{
    applyfilter();
  },[doctors,speciality]);

  console.log(filterdata);
  

  const navigate = useNavigate();
  
  return (
    <div className="flex my-7">
      <div className="left w-2/12  flex flex-col gap-2">
      {specialityd.map((item,index)=>{
        return(
          <div onClick={()=> speciality===`${item.speciality}`?navigate("/doctors"):navigate(`/doctors/${item.speciality}`)}  className={`w-12/12 my-2.5 border-2 px-7 py-1 hover:bg-blue-400 transition-all duration-500 rounded-l cursor-pointer ${speciality === item.speciality ? "bg-blue-300" : ""}`}>
          <p>{item.speciality}</p>
          </div>
        )
      })}
      </div>
      <div className="right w-10/12 mx-auto ">
      <div className="grid grid-cols-4 px-10 gap-3 ">
      {filterdata.slice(0,10).map((item,index)=>{
        return(
            <Link to={`appointment/${item._id}`} key={item._id} className="border-blue-400 border-[.1px] p-4 rounded-2xl  hover:translate-y-[-4%] transition-all duration-500">
                <div className="bg-slate-100">
                <img src={item.image} alt="" />
                </div>
                <div>
                <p className="flex items-center text-green-500">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2" />
                Available
                </p>
                    <p className="text-2xl font-medium">{item.name}</p>
                    <p>{item.speciality}</p>
                </div>
            </Link>
        )
      })}
      </div>
      </div>
    </div>
  )
}

export default Doctors
