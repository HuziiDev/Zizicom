import React from 'react'
import {motion} from 'framer-motion'
import collabImg from '../assets/collab.svg'

import Card from './Card'

const Services = () => {
  return (
    <motion.div className=' flex flex-col md:flex md:flex-row md:flex-wrap  md:gap-3 w-[90%] h-auto bg- mx-auto rounded-xl my-4'>
    <Card 
        image={collabImg}
        sumTitle="Collaborate"
        sumPara="Work collaboratively with supportive designers and create your perfect website"
        buttonText="Check our work"
    />
    <Card 
        image={collabImg}
        sumTitle="Collaborate"
        sumPara="Work collaboratively with supportive designers and create your perfect website"
        buttonText="Check our work"
    />
    <Card 
        image={collabImg}
        sumTitle="Collaborate"
        sumPara="Work collaboratively with supportive designers and create your perfect website"
        buttonText="Check our work"
    />
    </motion.div>
  )
}

export default Services