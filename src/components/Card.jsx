import React from 'react'
import {motion} from 'framer-motion'


const Card = ({image,sumTitle, sumPara, buttonText }) => {
  return (
    <motion.div className='card-container overflow-hidden  w-[90%] border md:w-[30%] shadow-2xl shadow-black mt-12 rounded-2xl  mx-auto'>
     <motion.div className="img-container  w-[50%] mx-auto py-8">
        <img className='w-24 h-24 ml-12' src={image} alt="" />
     </motion.div>
     <motion.div className="summary w-[320px]  ">
        <h2 className='text-2xl  2xl:text-4xl text-white ml-32 font-bold '>{sumTitle}</h2>
        <p className='text-lg lg:text-base lg:ml-3  ml-12 w-96 pr-12 mt-4 text-slate-200'>{sumPara}</p>
     </motion.div>
     <motion.div className="button  w-[60%]   mx-10 mt-8 ">
        <button className='px-1 py-2 lg:px-1  lg:py-1 ml-24 2xl:px-2 2xl:py-2 bg-white font-semibold mb-8  rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-250  duration-300 hover:bg-white hover:border-2 hover:text-black hover:border-green-700 '>{buttonText}</button>
     </motion.div>
    
</motion.div>
  )
}

export default Card