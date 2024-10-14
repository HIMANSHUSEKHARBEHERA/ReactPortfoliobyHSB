import React from 'react';
import { GrPersonalComputer } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

const Services = () => {
  return (
   <>
   <div>
    <h1 className='md:text-center text-4xl font-bold pt-5 pb-5 pl-5'>SERVICES</h1>
    <div className='md:flex md:gap-10 md:ml-52 '>
        <div className='bg-white rounded-lg h-80 w-80 shadow-2xl md:ml-0 ml-20 md:mt-5'>
            <div className='ml-28'>
            <a className='text-7xl ml-10'><GrPersonalComputer /></a>
            <div className='mr-32'>
            <h1  className='text-4xl'>Mern Stack</h1>
            </div>
            </div>
        </div>
        <div className='bg-white rounded-lg h-80 w-80 shadow-2xl ml-20 mt-5'>
            < div className='ml-28 '>
            <a className='text-7xl ml-10'><FaReact /></a>
            <div className='mr-32'>
            <h1  className='text-4xl'>ReactJS </h1>
            </div>
            </div>
        </div>
        <div className='bg-white rounded-lg h-80 w-80  shadow-2xl ml-20 mt-5'>
            <div className='ml-28'>
            <a href="" className='text-7xl ml-10'><FaJava /></a>
            <div className='mr-32'>
            <h1  className='text-4xl'>Java</h1>
            </div>
            </div>
        </div>

    </div>
   </div>
   </>
  );
}

export default Services;
