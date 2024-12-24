import React from 'react'
import { Main_CONTENT } from '.'
import profilePic from '../assets/RJJ.png';
import {motion} from 'framer-motion'


const container = (delay)=>({
   hidden: {x: -100, opacity: 0},
    visible:{ x: 0,
   opacity: 1,
   transition: {duration:0.8 , delay: delay
   }
   },
})

function mainsection() {
  return (
    <div className='border-b border-neutral-900 pb-5 lg:mb-45'>
      
        <div className='flex flex-wrap'>
       
            <div className='w-full lg:w-1/2'>
           
            <div className='flex flex-col items-center lg:items-start mt-10 ml-9'>
                <motion.h1 
                variants={container(0)} 
                initial='hidden'
                animate ='visible'
                className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl'>RAJASHREE NAIR</motion.h1>
                <motion.span variants={container(0.5)} 
                initial='hidden'
                animate ='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                 bg-clip-text text-3xl tracking-tight text-transparent'>
                MERN FULL STACK DEVELOPER</motion.span>
              <motion.p variants={container(1)} 
                initial='hidden'
                animate ='visible' className='my-2 max-w-xl py-6 font-light Georgia sm:text-1xl'>
                   {Main_CONTENT}
                  
              </motion.p>
              <motion.button variants={container(1)} 
                initial='hidden'
                animate ='visible' 
                whileHover={{ scale: 1.1 }} // Zoom in effect on hover
                whileTap={{ scale: 0.95 }} // Zoom out effect on click
                transition={{ duration: 0.3 }} // Smooth transition for scaling
               className='btnresume bg-purple-1000 hover:bg-purple-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2'>
                <a href="/Rajashree_Portfolio/public/assets/projects/Rajashree-NairResume.pdf">SEE MY RESUME</a></motion.button>
            </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center mt-10'>
            <motion.img 
            initial={{x: 100 ,opacity: 0}}
            animate = {{x: 0,opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            
            className= "lg:w-1/2 m-15 w-400 ml-10"src={profilePic} alt="Rajashree Nair" />

          </div>

          </div>


        </div>
      
    </div>
  )
}

export default mainsection
