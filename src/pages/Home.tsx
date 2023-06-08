import DishSlide from "../components/DishSlide";
import {motion} from 'framer-motion';

import React from 'react'

//class where home page main design is made
const Home = ({backendUrl}: {backendUrl: any}) => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        
        <DishSlide backendUrl={backendUrl}/>
    </motion.div>
  )
}

export default Home