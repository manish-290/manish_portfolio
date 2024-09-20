import React from 'react';
import { HERO_CONTENT } from '../constants/constant';
import profilePhoto from '../assets/manish.jpg';
import { motion } from "framer-motion"

const containerMotion = (delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  },
  
})

const HeroName = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 '>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                initial='hidden'
                 animate='visible'
                 variants={containerMotion(0)}
                  className='pb-16 text-6xl bg-gradient-to-r from-blue-600 to-white text-transparent bg-clip-text font-thin tracking-tight lg:text-8xl lg:mt-16 animate-gradient '>Manish Paudel</motion.h1>
                
                {/* styles: */}
                
                
                
                <motion.span 
                 initial='hidden'
                 animate='visible'
                 variants={containerMotion(0.5)}
                 className='text-3xl font-bold  tracking-tight  bg-gradient-to-t py-1 drop-shadow-white px-2 from-gray-600  '>Full Stack Developer</motion.span>
                <motion.p 
                initial='hidden'
                animate='visible'
                variants={containerMotion(1)}
                className='my-2 py-6 max-w-xl font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
            </div>
            
        </div>
        {/* //for image */}
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
             src={profilePhoto} className='rounded-lg  drop-shadow-white' alt ="manish profile photo" height={250} width={350}/>
            </div>
        </div>
      </div>

       {/* Adding Inline Style for Gradient Animation */}
       <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 0%;
            }
          }

          .animate-gradient {
            background-size: 50% 200%;
            animation: gradientMove 3s ease infinite;
          }
        `}
      </style>
    </div>
  );
}

export default HeroName;