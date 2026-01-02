import React from 'react'
import SecHeading from './SecHeading'
import Flex from './Flex'
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'
import frame4 from '../assets/Frame4.png'
const NewArrival = () => {
  return (
    <>
     <div className="container">
         <SecHeading 
        title="Featured"
        heading='New Arrival'
        className=' text-center justify-center mb-15'
      />
      <Flex  className='lg:gap-7.5 gap-4 items-center'>
        <div className='w-[50%]'>
           <img src={frame1} className='w-full' alt="" />
        </div>
        <div className='w-[50%] '>
              <img src={frame2} className='w-full' alt="" />
            <div className='flex pt-4 lg:pt-8 lg:gap-7.5 gap-4'>
                 <img src={frame3} className='w-[50%]' alt="" />
                  <img src={frame4} className='w-[50%]' alt="" />
            </div>
       
        </div>
     </Flex>
      </div>
    </>
  )
}

export default NewArrival
