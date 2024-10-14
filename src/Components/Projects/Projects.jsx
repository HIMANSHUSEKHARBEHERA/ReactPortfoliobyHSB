import React from 'react';
import tt from '../images/TourTravels.png'
import vds from '../images/VDS1.jpg'
import Ec from '../images/Ecommerce.png'
import SWP from '../images/SwimmingPool.png'
const Projects = () => {
  return (
    <>
    
    <div>
        <h1 className='md:text-center text-4xl pt-5 pb-2 pl-5 font-bold'>PROJECTS</h1>
        <div className='md:flex md:gap-2 ml-24 mr-24 pt-5 pb-5 '>
            <div className='pt-4'>
                <img src={tt} alt="" className='rounded-md shadow-md' />
                <h1 className='text-center mt-2'>Tour and Travels Online Bookings </h1>
            </div>
            <div className='pt-4'>
                <img src={vds} alt="" className='rounded-md shadow-md' />
                <h1 className='text-center mt-2'>Village Developement System</h1>
            </div>
            <div className='pt-4'>
                <img src={Ec} alt="" className='rounded-md shadow-md' />
                <h1 className='text-center mt-2'>E-Commerce</h1>
            </div>
            <div className='pt-4'>
                <img src={SWP} alt="" className='rounded-md shadow-md' />
                <h1 className='text-center mt-2'>Swimming Pool Bookings</h1>
            </div>
        </div>
        </div>
        </>
  );
}

export default Projects;
