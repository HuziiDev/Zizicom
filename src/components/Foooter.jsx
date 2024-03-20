import React from 'react'
import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue ,animate} from 'framer-motion';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const COLORS=['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
const Footer = () => {
  const colors= useMotionValue(COLORS[0])
  const backgroundImage= useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colors})`
    const border = useMotionTemplate`1px solid ${colors}`
  const boxShadow= useMotionTemplate`0px 4px 24px ${colors}`
  




    const style = { color: "white", fontSize: "3rem",  }

    useEffect(() => {
      animate(colors, COLORS,{
        ease: 'easeInOut',
        duration:10,
        repeat:Infinity,
        repeatType:"mirror"
      })
    },[])
  return (
    <motion.div className='footer-container  w-full h-auto mt-40 '
    style={{backgroundImage}}
    >
   
    <motion.div className="main-f-container flex flex-col md:flex md:flex-row md:justify-between pt-20 pb-20">

     <motion.div className="copyright ml-16 md:ml-28">
     <h1 className=' text-zinc-600 text-2xl md:text-4xl'> &copy; Agency Name All rights reserved</h1>
     </motion.div>
       
       
        <motion.div className="socials flex mr-28 ml-32 mt-20 md:mt-0 gap-8">
           
            <FaSquareFacebook style={style} className='icon ' />
           <FaXTwitter style={style} className='icon' />
           <FaLinkedinIn style={style} className='icon' />
        
        </motion.div>
        </motion.div>
        <motion.div className="curious pb-44 pt-12 ml-96 2xl:ml-[27rem] md:ml-[8rem] sm:ml-[10rem]" >
            <h1 className='text-white text-[2.6rem]  font-extrabold md:text-[3rem] md:ml-16'>Curious how we do it?</h1>
            <motion.button className='curious-btn absolute px-24 text-white text-xl py-3 rounded-full mt-8 font-semibold bg-transparent sm:ml-20 md:px-24 md:ml-40' style={{border,boxShadow}}
             whileHover={{scale:1.015}}
            whileTap={{
              scale:0.985
              }}  
     >Contact us
     </motion.button>
        </motion.div>
    </motion.div>
  )
}

export default Footer