import React, { useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion, useAnimation, useScroll} from 'framer-motion'



const Card = ({image,sumTitle, sumPara, buttonText }) => {

    const scrollVariants={
        initial:{
            opacity:0,
            x:-50
        },
        animate:{
            opacity:1,
            x:0
        }
    }
  
  
  return (
   
   
    <motion.div className='card-container max-w-sm    rounded-lg mt-4' 
    variants={scrollVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once:true}}
   transition={{ease:"easeIn", duration:1.5}}
    
     >
        <motion.div className='img-container p-4 ml-[9rem] w-full'>
            <img className='w-24 h-24 ' src={image} alt="" />
        </motion.div>
        <motion.div className='sum-title p-4 w-full ml-28'>
            <h2 className=' text-white text-3xl font-semibold'>{sumTitle}</h2>
        </motion.div>
        <motion.div className='sum-para p-4 w-3/4 ml-24'>
            <p className=' text-white  '>{sumPara}</p>
        </motion.div>
        <motion.div className='sum-btn p-4 ml-36 '>
            <button className=' bg-white px-3 py-2 rounded-xl font-semibold hover:bg-slate-400 hover:duration-500'>{buttonText}</button>
        </motion.div>

         </motion.div>
   
         
  )
}

export default Card