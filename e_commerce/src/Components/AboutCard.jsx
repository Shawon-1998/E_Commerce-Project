import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";


const AboutCard = ({imgSrc,title,description}) => {
  return (
    <>
      <div className='px-5 md:px-0 md:w-92.5'>
       <div className='bg-[#F5F5F5] rounded-sm'>
         <img className='w-full' src={imgSrc} alt="" />
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
