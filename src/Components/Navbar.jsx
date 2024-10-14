import React, { useState } from 'react';
import hb from './images/HB.png'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  console.log(isMenuOpen)
  const NavItems = (
    <>
      <li>
        <a href="/" className='text-2xl'>HOME</a>
      </li>
      <li>
        <a href="/about" className='text-2xl ml-4'>ABOUT</a>
      </li>
      <li>
        <a href="/projects" className='text-2xl ml-4'>PROJECTS</a>
      </li>
      <li>
        <a href="/services" className='text-2xl ml-4'>SERVICES</a>
      </li>
      <li>
        <a href="/contact" className='text-2xl ml-4'>CONTACT</a>
      </li>
    </>

  );
  return (
    <>
      <div className='sticky shadow-2xl p-4'>


        <div className='flex items-center justify-between '>
<div className='md:hidden'>
<img src={hb} alt="" className='h-10 w-10 ml-5 object-cover bg-blend-overlay rounded-lg' />
</div>
          <div className=''>
            <h1 className='text-pretty font-bold font-sans'>HIMANSHU S BEHERA</h1>
          </div>
          <div className='md:hidden'>
            <button className='text-white ' onClick={toggleMenu}>
              <svg
                fill='none'
                stroke='black'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                className='h-6 w-6'

              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>

              </svg>
            </button>
          </div>
          <div className='hidden md:flex space-x-4'>
            <ul >
              <li className='flex gap-5 mr-10'>
                {NavItems}
              </li>
            </ul>
          </div>
        </div>
        {isMenuOpen ? (
          <div className='flex-col text-center justify-center  md:hidden '>
            <a href="" className='mt-4 ml-96 text-right border-spacing-2 border-x-2'> X </a>
            <ul className='mt-0' >
             <li>
                <a href="/" className='text-2xl hover:text-yellow-300'>HOME</a>
              </li>
              <hr />
              <li >
                <a href="/about" className='text-2xl  ml-4 hover:text-yellow-300'>ABOUT</a>
              </li>
              <hr />
              <li>
                <a href="/projects" className='text-2xl ml-4  hover:text-yellow-300'>PROJECTS</a>
              </li>
              <hr />
              <li>
                <a href="/services" className='text-2xl ml-4  hover:text-yellow-300'>SERVICES</a>
              </li>
              <hr />
              <li>
                <a href="/contact" className='text-2xl ml-4  hover:text-yellow-300'>CONTACT</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
