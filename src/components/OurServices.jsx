import React from 'react'

import OurServiceCard from './OurServiceCard';

const OurServices = () => {
    
  return (
    <div className='w-[80%] h-auto  mt-36 mx-auto '>
        <div className="service-heading mx-44">
            <h1 className='text-5xl text-gray-100 font-bold'>Services</h1>
            <h3 className='text-lg text-gray-500 mt-2'>Our services for clients</h3>
        </div>
        <div className="card-service flex flex-col md:flex-row flex-wrap  w-[85%] gap-2 mx-auto my-24 ">
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