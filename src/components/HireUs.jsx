import React from 'react'

const HireUs = () => {
  return (
    <div className='flex flex-col items-center ml-4 w-[90%] bg-gray-950 rounded-lg h-auto md:flex md:flex-row md:flex-wrap md:items-center md:justify-center mt-44 md:ml-16'>
          <div className="hire_img  w-[80%] md:w-[30%] mt-10 h-80 md:h-80  mr-8 shadow-xl shadow-black ">
            <img className='w-full h-full rounded-3xl pr-1 object-fill ' src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="hire_text w-[80%] md:w-[30%] mt-16">
            <h1 className='text-white text-[2.5rem] mt-2 font-bold'>We</h1>
            <h1 className='text-white text-[2.5rem] mt-2 font-bold'>Build</h1>
            <h1 className='text-white text-[2.5rem] mt-2 font-bold'>Websites</h1>
            <p className='text-white mt-8 text-xl'>We assist in building up better communication between people and brands. With help of our websites we make a digital world a better place, where customers and companies achieve their goals</p>

            <button className=' px-20 py-2 mt-8 bg-white rounded-2xl mb-8 transition ease-in-out delay-150 font-semibold  hover:bg-gray-700 hover:text-white  '>Hire us</button>
          </div>
    </div>
  )
}

export default HireUs
