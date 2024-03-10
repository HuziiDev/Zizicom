import React from 'react'
import {motion} from 'framer-motion'


const Card = ({image,sumTitle, sumPara, buttonText }) => {
  return (
    <motion.div className='card-container max-w-sm   border-1 shadow-lg shadow-black border-white rounded-lg mt-4' >
        <motion.div className='img-container p-4 ml-40 w-full'>
            <img className='w-24 h-24 ' src={image} alt="" />
        </motion.div>
        <motion.div className='sum-title p-4 w-full ml-32'>
            <h2 className=' text-white text-3xl font-semibold'>{sumTitle}</h2>
        </motion.div>
        <motion.div className='sum-para p-4 w-3/4 ml-20'>
            <p className=' text-white  '>{sumPara}</p>
        </motion.div>
        <motion.div className='sum-btn p-4 ml-36 '>
            <button className=' bg-white px-3 py-2 rounded-xl font-semibold hover:transition-all hover:border-2 hover:border-green-700'>{buttonText}</button>
        </motion.div>

         </motion.div>
  )
}

export default Card