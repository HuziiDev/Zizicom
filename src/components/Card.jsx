import React from 'react'
import {motion} from 'framer-motion'


const Card = ({image,sumTitle, sumPara, buttonText }) => {
  return (
    <motion.div className='card-container overflow-hidden  w-[90%] border md:w-[30%]   flex-shrink   shadow-2xl shadow-black mt-12 rounded-2xl  mx-auto'>
     <motion.div className="img-container  w-[50%] ml-40 h-atuo py-8">
        <img className='w-24 h-24 2xl:w-96' src={image} alt="" />
     </motion.div>
     <motion.div className="summary  2xl:ml-12 px-16">
        <h2 className='text-2xl 2xl:text-4xl text-white ml-20 font-bold '>{sumTitle}</h2>
        <p className='text-lg 2xl:text-2xl 2xl:mt-6 2xl:ml-12 w-96 pr-12 mt-4 text-slate-200'>{sumPara}</p>
     </motion.div>
     <motion.div className="button  w-[60%] 2xl:ml-24  mx-10 mt-8 ">
        <button className='p-[8px] 2xl:p-3 2xl:text-2xl bg-white font-semibold mb-8 ml-28 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-250  duration-300 hover:bg-white hover:border-2 hover:text-black hover:border-green-700 '>{buttonText}</button>
     </motion.div>
    
</motion.div>
  )
}

export default Card