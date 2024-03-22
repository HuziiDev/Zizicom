import React from 'react'
import { GoPencil } from "react-icons/go";
const OurServiceCard = ({title , content, btn_text}) => {
    const style = { color: "white", fontSize: "2.5rem",  }
  return (
    <div className="first-card w-full bg-zinc-900 border-[0.1px] hover:bg-gradient-to-r from-slate-900 to-slate-700  border-zinc-700 rounded md:w-[30%] ">

    <div className="card-content mx-8 my-7">
    <span> <GoPencil style={style} /> </span>
    <h2 className='text-[1.3rem] mt-4 text-white font-bold'>{title}</h2>
    <p className='text-sm mt-4 text-gray-500'>{content}</p>
    <button className='font-semibold mt-8 text-white  text-xl bg-transparent rounded-3xl px-4 py-1 border-[0.1px] border-zinc-700 hover:bg-white hover:text-black '>{btn_text} <span className='text-xl'>→</span>   </button>

   
    </div>
    <div className='w-full h-1 bg-white'></div>

    </div>
  )
}

export default OurServiceCard