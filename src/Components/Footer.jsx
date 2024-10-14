import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  return (
   <>
   <div>
   <div className=' pt-5 md:pt-10 h-4/6 bg-sky-500  rounded-ee-full '>
   <div className='ml-20 md:flex gap-28 md:ml-80 md:pt-20 pb-10'>
    <div>
        <h1>CUSTOMER</h1>
        <li><a href="#">BUYER</a></li>
        <li><a href="#">SUPPLIER</a></li>
    </div>
    <div>
        <h1>COMPANY</h1>
        <li><a href="">About us</a></li>
       <li><a href="">Careers</a></li>
        <li><a href="">Contact us</a></li>
    </div>
    <div className=''>
        <h1>FURTHER INFORMATION</h1>
       <li> <a href="">Terms and Conditions</a></li>
        <li><a href="">Privacy Policy</a></li>
    </div>
    <div>
        <h1>FOLLOW US</h1>
        <div className='flex gap-1'>
            <div>
                <a href=""><FaFacebookSquare /></a>
            </div>
            <div>
                <a href=""><FaInstagram /></a>
            </div>
            <div>
                <a href=""><FaLinkedin /></a>
            </div>
            <div>
                <a href=""><IoLogoGithub /></a>
            </div>
        </div>
    </div>
   </div>
   <div className='pb-5'>
    <h1 className='text-center '>@2024 HIMANSHU SEKHAR  | ALL RIGHTS RESERVED.</h1>
   </div>
   </div>
   </div>
   
   </>
  );
}

export default Footer;
