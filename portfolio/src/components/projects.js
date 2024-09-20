import React from 'react';
import { PROJECTS } from '../constants/constant';
import { motion } from "framer-motion";







const Projects = () => {
  return (
    <div className='border-b border-neutral-700 pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
       className='text-4xl my-20 text-center  bg-gradient-to-b from-gray-900 via-gray-500 to-white text-transparent bg-clip-text '>Projects</motion.h1>
        <div>
            {
                PROJECTS.map((project,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{x:-100, opacity: 0 }}
                        transition={{duration:1}}
                         className='w-full lg:w-1/4'>
                            <img src={project.image} width={150} height={150}
                            className='mb-6 rounded-lg'
                             alt={project.title}/>
                        </motion.div>
                        <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{x:100, opacity: 0 }}
                        transition={{duration:1}}
                         className='w-full max-w-xl lg:w-3/4  '>
                            <h6 className='font-semibold mb-2'>{project.title}
                                
                            </h6>
                            <p className='tracking-tighter mb-4'>{project.description}</p>
                            {
                                project.technologies.map((tech,index)=>(
                                    <span key={index} className='mr-2 rounded bg-gradient-to-l from-gray-300 px-2 py-1 text-white font-medium text-sm'>{tech}</span>
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

export default Projects;