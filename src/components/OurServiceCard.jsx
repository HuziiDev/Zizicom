import React from 'react'
import { motion } from 'framer-motion'
import { GoPencil } from "react-icons/go";
const OurServiceCard = ({ title, content, btn_text }) => {

  const variants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }



  const style = { color: "white", fontSize: "2.5rem", }
  return (
    <motion.div className="first-card w-full bg-gradient-to-r sm:mx-auto from-slate-900 to-slate-700  border-zinc-700 border-[0.1px]  rounded-lg lg:w-[30%] xl:w-[30%] md:w-[40%] sm:w-[70%] shadow-md shadow-white"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 1 }}



    >

      <motion.div className="card-content mx-8 my-7">
        <span> <GoPencil style={style} /> </span>
        <h2 className='text-[1.3rem] mt-4 text-white font-bold'>{title}</h2>
        <p className='text-sm mt-4 text-gray-500'>{content}</p>
        <motion.button className='font-semibold mt-8 text-white  text-xl bg-transparent rounded-3xl px-4 py-1 border-[0.1px] border-zinc-700 hover:bg-white hover:text-black '
          whileHover={{ scale: 1.2 }}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          whileTap={{ scale: 0.9 }}



        >{btn_text} <span className='text-xl'>→</span>   </motion.button>


      </motion.div>
      <motion.div className='w-full h-1 bg-white'></motion.div>

    </motion.div>
  )
}

export default OurServiceCard