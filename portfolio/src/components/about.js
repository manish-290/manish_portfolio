import React from 'react';
import { ABOUT_TEXT } from '../constants/constant';
import aboutPic from '../assets/about.jpg';
import { motion } from "framer-motion";


const AboutMe = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1}}
       className=' my-20 text-center text-4xl text-white'>
        About <span className='text-neutral-500'>Me</span></motion.h1>

        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{x:0,opacity:1}}
            initial={{x:-100, opacity: 0 }}
            transition={{duration:0.5}}

             className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                <img
                 className='rounded-2xl ' src={aboutPic} height={250} width={350} alt="about portfolio text"/>
                </div>
            </motion.div>
            <motion.div
             whileInView={{x:0,opacity:1}}
             initial={{x:100, opacity: 0 }}
             transition={{duration:0.5}}
             className='w-full lg:w-1/2'>
                <div className='flex justify-center  lg:justify-start'>
                <p className='text-white my-2 py-6 max-w-xl font-light tracking-tighter'>
                {ABOUT_TEXT}
            </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default AboutMe;