import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <>

    
    <div className='Navbar w-[90%] h-12 mt-4 ml-4 md:ml-16 bg-black flex items-center justify-between rounded-3xl md:rounded border-solid border-[0.1px] border-gray-600'>
        <div className="logo px-3">
            <h1 className='text-gray-200 font-medium text-[1.3rem] cursor-pointer'>Agency Name</h1>
        </div>
        
        <nav className='hidden  md:flex gap-3'>
            <a className=' mx-2 text-white text-base font-medium hover:text-gray-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180  duration-300' href="">Home</a>
            <a className=' mx-2 text-white text-base font-medium hover:text-gray-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180  duration-300' href="">Services</a>
            <a className=' mx-2 text-white text-base font-medium hover:text-gray-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180  duration-300' href="">Pricing</a>
            <a className='mx-2 text-white text-base font-medium hover:text-gray-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180  duration-300' href="">Contact</a>
        </nav>
        

        <div className=" hidden md:block button px-5">
              <a className='text-gray-400 text-base font-medium cursor-pointer mr-3 hover:text-gray-300' href="#">Sign in</a>
            <motion.button className='bg-black text-white w-24 font-bold p-1 rounded-md shadow-xl   hover:border-2  hover:border-green-700'
            
            whileHover={{scale:1.015}}
            whileTap={{
              scale:0.985
              }} 
            
            >Login</motion.button>
        </div>
        <div className=' md:hidden px-8 pb-2 pt-2 text-4xl text-white'>
            <a className='text-4xl text-white ' href="">&#8801;</a>
        </div>
    </div>


      

      </>

  )
}
export default Navbar