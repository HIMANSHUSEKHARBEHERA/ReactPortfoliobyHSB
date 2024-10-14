import React,{ useEffect, useRef } from 'react';
import Typed from 'typed.js'
import image from '../assets/Pdf.jpg'
import pdf from '../Components/Pdf/resume.pdf'
const Home = () => {
    const typedRef = useRef(null);
    useEffect (() => {
      const options = {
        strings: ["Welcome to my world","I'm Himanshu Sekhar","Fullstack Developer","Java Developer","ABAP Developer"],
        typespeed:50,
        backspeed:50,
        loop:true
      }
      const typed = new Typed(typedRef.current, options)
      return () => {
        typed.destroy();
      };
    }, [])
  return (
   <>
   <div className=' justify-center'>
    <div className='md:flex gap-10 md:gap-16 md:mt-10 '>
        <div className='max-w-auto md:w-2/6 md:ml-40 md:mt-36 text-center justify-center text-4xl md:rounded-3xl bg-orange-400  md:h-60 md:w-2/3  pt-5'>
        <h1 ref={typedRef} className='md:ml-10  md:mt-10'></h1>
        <div className='md:mt-5 pb-5 '>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning md:ml-10 text-black text-xl border-solid border-2 border-black hover:bg-orange-600 rounded-md">Download Resume</a>
        </div>
        </div>
        <div className='pt-2 pl-20  md:ml-36 md:mt-20'>
        <img src={image} alt='' className='text-center justify-center rounded-lg md:rounded-full max-h-96  md:w-72 md:mr-40  shadow-sky-400 '/>
        </div>
    </div>
   </div>
   </>
  );
}

export default Home;
