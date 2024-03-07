import React, { useState } from 'react'
import {motion, AnimatePresence, delay} from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";

const Hero = ({isVisible}) => {
  
  return (
  
        
            <motion.div className='flex flex-col  w-[90%] h-aut0 mt-16   md:flex-row items-center justify-between relative'>
            <motion.div className=' relative h-[27rem] ml-8 md:ml-16   pl-10 md:h-[24rem] md:w-[60%] bg-white pt-16 rounded-lg'
         
            >
            
           
               <motion.div>
                 
               
              
              <h1 className='text-5xl text-black font-mono ml-16 font-bold md:text-[4rem] uppercase'>Let's build the Next big thing in Tech</h1>
              
              </motion.div>
              <div className='mt-8 w-full bg-green-700 h-1'></div>
              <motion.div className='mt-12 mb-12'
              >
              
                <button className='absolute bg-black border text-white p-4 ml-16  rounded-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-250  duration-300 hover:bg-white hover:border-2 hover:text-black hover:border-green-700'>Get Started</button>
                
              </motion.div>
              
                
            </motion.div>
            <motion.div className=' ml-20 mt-8 w-full relative md:mb-8 md:w-[35%] md:ml-8 flex flex-col '>
               <motion.div className=' md:flexcard1 w-[90%] h-[12rem] bg-zinc-700 text-white rounded-xl'>
               <h2 className=' mt-4 text-3xl font-bold mb-8 px-4'>Want Beautiful Layouts?</h2>
               <p className='text-md px-4'>We produce Beautiful websites crafted with tailwind css and framer-motion and a lot more.</p>
               <button className=' absolute mb-2 left-4 font-semibold p-2 mt-4 px-4  transition ease-in-out delay-150 bg-black rounded-lg  hover:-translate-y-1 hover:scale-250  duration-300 hover:bg-white hover:border-2 hover:text-black hover:border-green-700'>Contact us</button>

               </motion.div>
               <motion.div className='relative card2 mt-4 w-[90%] h-[12rem] bg-white rounded-xl '>
               <h2 className='text-3xl mb-8 px-4 font-bold'>Want Beautiful Layouts?</h2>
               <p className='text-md px-4'>We produce Beautiful websites crafted with tailwind css and framer-motion and a lot more.</p>
               <button className=' absolute mb-2 left-4 p-2 mt-4 px-4 text-white font-semibold  transition ease-in-out delay-150 bg-black rounded-lg  hover:-translate-y-1 hover:scale-250  duration-300 hover:bg-white hover:border-2 hover:text-black hover:border-green-700'>Contact us</button>

               </motion.div>

            </motion.div>

            </motion.div>
  )
        
}

export default Hero