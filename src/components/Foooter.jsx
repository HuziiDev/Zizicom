import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    const style = { color: "white", fontSize: "3rem",  }
  return (
    <div className='footer-container  w-full h-auto mt-40 bg-black'>
    <div className='outer w-full bg-green-700 h-1 mt-20 '></div>
    <div className="main-f-container flex flex-col md:flex md:flex-row md:justify-between pt-20 pb-20">

     <div className="copyright ml-16 md:ml-28">
     <h1 className=' text-zinc-600 text-2xl md:text-4xl'> &copy; Agency Name All rights reserved</h1>
     </div>
       
       
        <div className="socials flex mr-28 ml-32 mt-20 md:mt-0 gap-8">
           
            <FaSquareFacebook style={style} className='icon ' />
           <FaXTwitter style={style} className='icon' />
           <FaLinkedinIn style={style} className='icon' />
        
        </div>
        </div>
    </div>
  )
}

export default Footer