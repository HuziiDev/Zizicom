import React from 'react'
import { motion } from 'framer-motion';

import OurServiceCard from './OurServiceCard';

const OurServices = () => {
   const variants={
      initial:{
        opacity:0,
        y:100
      },
      animate:{
        opacity:1,
        y:0
      }
     }
    
  return (
    <div className='w-[80%] h-auto  mt-36 mx-auto '>
        <motion.div className="service-heading 2xl:ml-[3.8rem] xl:ml-[3rem] lg:ml-[2.8rem] md:ml-[2.8rem] sm:ml-[6rem]"
          variants={variants}
     initial="initial"
     whileInView="animate"
     viewport={{once:true}}
     transition={{ease:'easeInOut', duration:1}}
        
        >
            <h1 className='text-5xl text-gray-100 font-bold'>Services</h1>
            <h3 className='text-lg text-gray-500 mt-2'>Our services for clients</h3>
        </motion.div>
        <div className="card-service flex flex-col md:flex-row flex-wrap justify-center  w-[95%] gap-2 mx-auto my-24 ">
         <OurServiceCard
            title='Responsive Design'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolorem expedita nemo.'
            btn_text="Let's go"
         />
         <OurServiceCard
            title='Responsive Design'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolorem expedita nemo.'
            btn_text="Let's go"
         />
         <OurServiceCard
            title='Responsive Design'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolorem expedita nemo.'
            btn_text="Let's go"
         />
         <OurServiceCard
            title='Responsive Design'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolorem expedita nemo.'
            btn_text="Let's go"
         />
         <OurServiceCard
            title='Responsive Design'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolorem expedita nemo.'
            btn_text="Let's go"
         />
         <OurServiceCard
            title='Responsive Design'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolorem expedita nemo.'
            btn_text="Let's go"
         />
         
        </div>
    </div>
  )
}

export default OurServices