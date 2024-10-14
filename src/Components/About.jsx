import React from 'react';
import boy from './images/Boy.avif'
const About = () => {
  return (
    <>
    <div>
        <h1 className='md:text-2xl md:text-center text-4xl ml-5 font-bold pt-5 pb-2'>ABOUT</h1>
        <div className='md:flex gap-96  md:ml-5 md:pt-5 pb-5 '>
            <div className='md:ml-24 pt-5 '>
                <img src={boy} alt=""  className='md:h-fit  h-80 w-20 min-w-max rounded-br-3xl md:shadow-2xl ml-10 '/>

            </div>
            <div className=' ml-4 mr-2 md:ml-60 md:mr-60'>
                <h1 className='md:text-2xl text-4xl font-bold'>Full Stack Developer!</h1>
                <p className='md:text-justify text-xl mt-5'>I am a skilled web designer with over 3 years of experience in the industry. My passion lies in creating captivating website designs and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of<span className='text-amber-200'>Reactjs </span> and Java</p>
            <button className='btn border-solid-2 text-2xl mt-4 hover:bg-orange-600 rounded-full border-orange-600 border-x-4 '>Hire me </button>
            </div>
        </div>
    </div>
    </>
  );
}

export default About;
