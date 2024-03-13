import React from 'react'

import {motion} from 'framer-motion'
import collabImg from '../assets/collab.svg'

import Card from './Card'

const Services = () => {
  return (
         <motion.div className='w-[90%]  h-auto flex flex-wrap mx-auto overflow-hidden gap-3 2xl:gap-12 justify-center items-center'
      >
  



        
                <Card
          image={collabImg}
          sumTitle="Collaborate"
          sumPara="Work collaboratively with supportive designers and create your perfect website."
          buttonText="Check out"
            />
          <Card
          image={collabImg}
          sumTitle="Collaborate"
          sumPara="Work collaboratively with supportive designers and create your perfect website."
          buttonText="Check out"
            />
          <Card
          image={collabImg}
          sumTitle="Collaborate"
          sumPara="Work collaboratively with supportive designers and create your perfect website."
          buttonText="Check out"
            />
        

         </motion.div>
  )
}

export default Services