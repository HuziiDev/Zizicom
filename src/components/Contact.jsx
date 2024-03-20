import React from 'react'
import { useEffect } from 'react'
import {motion , useMotionTemplate, useMotionValue,animate} from 'framer-motion'
const COLORS=['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
const Contact = () => {
  const colors= useMotionValue(COLORS[0])
  const backgroundImage= useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colors})`
  const border = useMotionTemplate`1px solid ${colors}`
  const boxShadow= useMotionTemplate`0px 4px 24px ${colors}`
  useEffect(() => {
    animate(colors, COLORS,{
      ease: 'easeInOut',
      duration:10,
      repeat:Infinity,
      repeatType:"mirror"
    })
  },[])
  return (
    <motion.div className='relative w-[90%] rounded-xl ml-16  h-auto mt-20 flex flex-col items-center'
   
     style={{backgroundImage}}>
        <motion.div className="curious pl-10 py-64  " >
            <h1 className='text-white text-[2.6rem] font-extrabold md:text-[3.5rem] md:ml-16'>Curious how we do it?</h1>
            <motion.button className='absolute px-24 text-white text-xl py-3 rounded-full mt-8 font-semibold bg-transparent md:px-36 md:ml-40' style={{border,boxShadow}}
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

export default Contact