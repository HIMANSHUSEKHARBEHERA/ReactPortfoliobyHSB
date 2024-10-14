import React from 'react';

import java from './images/java.webp'
import html from './images/HTML.jpg.webp'
import css from './images/CSS.svg'
import js from './images/js.png'
import mdb from './images/mongodb.png'
import njs from './images/nodejs.png'
import react from './images/REACT.png'
import sql from './images/MySQL.wine.png'
import sap from './images/SAP.svg.png'
import photo from './images/photoshop.png'
const Skills = () => {
  return (
    <>
    <div className='shadow-gray-400 pb-9 pt-5 '>
        <h1 className='text-4xl md:text-center font-bold pt-5 ml-5'>SKILLS</h1>

        <div className='ml-20  mt-5 md:ml-52 mr-24 md:grid grid-cols-3 gap-4 '>
            <div className='rounded-md h-60 w-60 shadow-2xl'>
            <img src={java} alt="" className='' />
            </div>
            <div className='shadow-2xl rounded-md h-60 w-60' >
        <img src={html} alt="" className='h-60 w-80'  />
      </div>
      <div className='shadow-2xl rounded-md h-60 w-60'>
        <img src={css} alt="" className='h-60 w-60' />
      </div>
      <div className=' shadow-2xl  rounded-md h-60 w-60'>
        <img src={js} alt="" />
      </div>
      <div className='shadow-2xl  rounded-md h-60 w-60'>
        <img src={mdb} alt=""  />
      </div>
      <div className=' shadow-2xl  rounded-md h-60 w-60'>
        <img src={njs} alt="" />
      </div>
      <div className='shadow-2xl   rounded-md h-60 w-60'>
        <img src={react} alt="" className='h-60 w-60 ' />
      </div>
      <div className='shadow-2xl  rounded-md h-60 w-60'>
        <img src={sql} alt="" />
      </div>
      <div className='shadow-2xl  rounded-md h-60 w-60'>
        <img src={sap} alt="" />
      </div>
        </div>
    </div>
    </>
  );
}

export default Skills;
