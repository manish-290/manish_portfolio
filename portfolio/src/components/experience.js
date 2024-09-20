import React from 'react';
import { EXPERIENCES } from '../constants/constant';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className='border-b border-neutral-700 pb-4'>
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1}}
       className='text-4xl   my-20  text-center  bg-gradient-to-b from-gray-900 via-gray-500 to-white text-transparent bg-clip-text '>Experience</motion.h1>
        <div>
            {
                EXPERIENCES.map((experience,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{x:-100, opacity: 0 }}
                        transition={{duration:1.5}}
                        className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-500'>{experience.year}</p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{x:100, opacity: 0 }}
                        transition={{duration:0.5}}
                        className='w-full max-w-xl lg:w-3/4 '>
                            <h6 className='font-semibold mb-2'>{experience.role}-
                                <span className='text-sm text-purple-200'>{experience.company}</span>
                            </h6>
                            <p className='tracking-tighter mb-4'>{experience.description}</p>
                            {
                                experience.technologies.map((tech,index)=>(
                                    <span key={index} className='mr-2  rounded bg-gradient-to-l from-gray-300 px-2 py-1 text-white'>{tech}</span>
                                ))
                            }

                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Experience;