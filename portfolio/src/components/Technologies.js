import React from 'react';
import {RiReactjsLine} from 'react-icons/ri';
import {FaNodeJs} from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMongodb} from 'react-icons/si';
import { animate, motion } from "framer-motion";

const iconVariants =(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1}}
       className='text-4xl   my-20  text-center  bg-gradient-to-b from-gray-900 via-gray-500 to-white text-transparent bg-clip-text '>Technologies</motion.h1>
    
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
     className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
       className='rounded-2xl border-4 border-neutral-600 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
      </motion.div>
      <motion.div
       variants={iconVariants(2)}
       initial="initial"
       animate="animate"
       className='rounded-2xl border-4 border-neutral-600 p-4'>
          <FaNodeJs className='text-7xl text-green-400'/>
      </motion.div>
      <motion.div
       variants={iconVariants(6)}
       initial="initial"
       animate="animate"
       className='rounded-2xl border-4 border-neutral-600 p-4'>
          <TbBrandNextjs className='text-7xl text-white'/>
      </motion.div>
      <motion.div
       variants={iconVariants(4)}
       initial="initial"
       animate="animate"
       className='rounded-2xl border-4 border-neutral-600 p-4'>
          <SiMongodb className='text-7xl text-green-400'/>
      </motion.div>
    </motion.div>
    </div>
  );
}

export default Technologies;