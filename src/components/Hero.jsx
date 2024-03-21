import React, { useState } from 'react'
import { motion, AnimatePresence, delay } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {

  return (


    <motion.div className='flex flex-col  w-[90%] h-aut0 mt-16   md:flex-row items-center justify-between relative'>

      <motion.div className='hero-1 relative xl:h-[26rem] sm:h-[20rem]  h-[27rem] ml-8 md:ml-16 2xl:h-[28rem] lg:h-[25rem]  pl-10 md:h-[24rem] md:w-[60%] bg-gradient-to-r from-slate-900 to-white pt-16 rounded-lg'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1 }}
        transition={{
          ease: "easeInOut", duration: 1
        }}
      >


        <motion.div>



          <h1 className='text-5xl text-black font-mono sm:text-[2.5rem] ml-16 xl:text-[4rem] lg:text-[3.5rem] font-bold 2xl:text-[4.3rem] md:text-[2.7rem] uppercase'>Let's build the Next big thing in Tech</h1>

        </motion.div>
        <div className='mt-8 w-full bg-green-700 h-1'></div>
        <motion.div className='mt-12 mb-12'
        >

          <motion.button className='hero-btn absolute bg-black border text-white p-4 ml-16  rounded-xl font-bold hover:border-2 hover:border-green-700'
            whileHover={{ scale: 1.015 }}
            whileTap={{
              scale: 0.985
            }}
          >Get Started</motion.button>

        </motion.div>


      </motion.div>
      <motion.div className=' ml-20 mt-8 w-full relative md:mb-8 md:w-[35%] md:ml-8 flex flex-col '>
        <motion.div
          initial={{
            y: 100
          }}
          animate={{
            y: 0
          }}
          transition={{ ease: "easeInOut", duration: 1 }}
          exit={{
            y: 100
          }}
          className='hero-2 relative xl:h-[14rem] card2 mt-4 w-[90%] h-[12rem] bg-slate-700  rounded-xl '>
          <h2 className=' 2xl:text-3xl xl:text-3xl lg:text-[1.3rem] md:text-[1rem] text-white sm:text-[2rem] md:mb-1  mt-2 px-4 font-bold'
          >Want Beautiful Layouts?</h2>
          <p className='2xl:text-xl xl:text-lg md:text-sm lg:text-base lg:pt-1  text-md px-4 text-white'>We produce Beautiful websites crafted with tailwind css and framer-motion and a lot more.</p>
          <motion.button className='hero-btn_2 absolute sm:p-1 2xl:p-3 xl:p-3 md:p-1  left-4 p-2 mt-4 px-4 text-white font-semibold   bg-black rounded-lg   hover:border-2  hover:border-green-700'
            whileHover={{ scale: 1.015 }}
            whileTap={{
              scale: 0.985
            }}
          >Contact us</motion.button>

        </motion.div>
        <motion.div
          initial={{
            y: -100
          }}
          animate={{
            y: 0
          }}
          transition={{ ease: "easeInOut", duration: 1 }}
          exit={{
            y: 100
          }}

          className='hero-2 relative xl:h-[14rem] card2 mt-4 w-[90%] h-[12rem] bg-white rounded-xl '>
          <h2 className=' 2xl:text-3xl xl:text-3xl lg:text-[1.3rem] md:text-[1rem] sm:text-[2rem] md:mb-1  mt-2 px-4 font-bold'>Want Beautiful Layouts?</h2>
          <p className='2xl:text-xl xl:text-lg md:text-sm lg:text-base lg:pt-1  text-md px-4'>We produce Beautiful websites crafted with tailwind css and framer-motion and a lot more.</p>
          <motion.button className='hero-btn_2 absolute sm:p-1 2xl:p-3 xl:p-3 md:p-1  left-4 p-2 mt-4 px-4 text-white font-semibold   bg-black rounded-lg   hover:border-2  hover:border-green-700'
            whileHover={{ scale: 1.015 }}
            whileTap={{
              scale: 0.985
            }}
          >Contact us</motion.button>

        </motion.div>

      </motion.div>

    </motion.div>
  )

}

export default Hero