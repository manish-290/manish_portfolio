import React from 'react';
import profileLogo from '../assets/profileLogo.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='mb-20  flex items-center justify-between py-6 px-5'> 
       <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-bold text-3xl text-transparent bg-gradient-to-b from-slate-300 bg-clip-text'>MP</h1>
            {/* <img className='mx-2 w-10' src={profileLogo} alt='logo'/> */}
        </div> 

        <div className='m-8 flex text-2xl items-center justify-center gap-4'>
            <a 
            href="https://www.linkedin.com/in/manish-paudel-8798541a9/"
            target='_blank' rel='noopener noreferrer'>
              <FaLinkedin/>
              </a>

              <a 
            href="https://github.com/manish-290"
            target='_blank' rel='noopener noreferrer'>
              <FaGithub/>
              </a>

              <a 
            href="https://x.com/ManishCr3ator"
            target='_blank' rel='noopener noreferrer'>
              <FaSquareXTwitter/>
              </a>

              <a 
            href="https://www.instagram.com/themanish517/"
            target='_blank' rel='noopener noreferrer'>
              <FaInstagram/>
              </a>

        </div>
    </nav>
  );
}

export default Navbar;