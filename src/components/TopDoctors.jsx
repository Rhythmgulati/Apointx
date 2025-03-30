import React from 'react'
import { doctors } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

function TopDoctors() {

  const navigate = useNavigate();

  return (
    <div className="flex items-center  my-30 justify-center flex-col">
      <h2 className='text-4xl font-medium'>Top Doctors</h2>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className="grid grid-cols-5 px-10 my-10 gap-3 ">
      {doctors.slice(0,10).map((item,index)=>{
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
      <button onClick={()=>{navigate('/alldoctors');scrollTo(0,0)}} className="my-2 bg-blue-300 p-4 rounded-4xl text-sm">More</button>
    </div>
  )
}

export default TopDoctors
