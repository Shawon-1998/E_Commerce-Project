import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";


const AboutCard = ({imgSrc,title,description}) => {
  return (
    <>
      <div className=' '>
       <div className='bg-[#F5F5F5] rounded-sm'>
         <img className='w-92.5 px-16.75 pt-9.75' src={imgSrc} alt="" />
       </div>
         <h3 className='text-[32px] pt-8 pb-2'>{title}</h3>
         <p className='pb-4'>{description}</p>
         <div className='flex gap-4 '>
            <CiTwitter />
            <FaInstagram />
            <RiLinkedinLine />
         </div>
      </div>
    </>
  )
}

export default AboutCard
