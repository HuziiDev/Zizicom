import React from 'react'
import {motion} from 'framer-motion'

const Heading = () => {
  return (
    <motion.div className='Heading-main w-[90%] flex ml-20 mt-20 flex-shrink'>  
    <motion.div className='Heading-under mt-9 2xl:mt-10 md:w-[20%] md:mt-8 lg:mt-8 w-[30%] h-[0.15rem] bg-green-700'>
                     
    </motion.div>

    <h1 className='Heading-h1  w-[65%]  md:w-[75%] p-4 text-xl sm:text-lg md:text-[1.4rem] lg:text-[1.7rem] xl:text-3xl 2xl:text-4xl uppercase r text-slate-50'>Transforming Ideas into Digital Realities</h1>

    </motion.div>
  )
}

export default Heading