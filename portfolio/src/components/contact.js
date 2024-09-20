import React from 'react';
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CONTACT } from '../constants/constant';
import { motion } from "framer-motion";






const Contact = () => {
  return (
    <div className='border-b border-neutral-800 pb-20'>
      <motion.h3
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
       className='text-2xl font-bold text-center my-10'>Get in Touch!</motion.h3>
      <div className='text-center tracking-tighter'>
      <motion.p
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
       className='my-4'>{CONTACT.address}</motion.p> 
      <a href='www.gmail.com' className='border-b'>
        <motion.div
        whileInView={{opacity:1,x:0,y:0}}
        initial={{opacity:0,x:100,y:-100}}
        transition={{duration:1}}
         className='flex items-center justify-center hover:underline'><MdOutlineAttachEmail className='text-xl mr-2 '/>{CONTACT.email}</motion.div></a>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className='flex items-center justify-center'><IoMdCall />{CONTACT.phoneNo}
        </motion.div>
     
      </div>
    </div>
  );
}

export default Contact;