import React from 'react'
import SecHeading from './SecHeading'
import Flex from './Flex'
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'
import frame4 from '../assets/Frame4.png'
import { NavLink } from "react-router";
import NewArrivalCard from './NewArrivalCard'
const NewArrival = () => {
  return (
    <>
      <div className="container ">
        <SecHeading
          title="Featured"
          heading='New Arrival'
          className=' text-center block mx-auto mb-5 lg:mb-15'
          className2='justify-center '
        />
        <div className='lg:gap-7.5 flex gap-4 items-center text-white group'>
          <div className='w-[50%] bg-[url(assets/Frame1.png)] bg-no-repeat bg-center bg-cover'>
             <NewArrivalCard
                className='pt-111.5 ps-8 pb-8'
                className2='py-4 w-60.5 text-sm font-pop leading-5.25 font-normal'
                productName='PlayStation 5'
                description='Black and White version of the PS5 coming out on sale.'
              />
          </div>
          <div className='w-[50%] '>
            <div className=' bg-[url(assets/Frame2.png)] bg-no-repeat bg-center bg-cover w-full'>
              <NewArrivalCard
                className='pt-34.5 pb-6.5 ps-6 '
                className2='py-4 w-60.5 text-sm font-pop leading-5.25 font-normal'
                productName='Women’s Collections'
                description='Featured woman collections that give you another vibe.'
              />
            </div>
            <div className='flex pt-4 lg:pt-8 lg:gap-7.5  gap-4'>
              <div className=' bg-[url(assets/Frame3.png)] bg-no-repeat bg-center bg-cover w-full'>
                <NewArrivalCard
                  className='pt-43.75 pb-6.5 ps-6 '
                  productName='Speakers'
                  className2='py-2 w-60.5'
                  description='Amazon wireless speakers'
                />
              </div>
              <div className=' bg-[url(assets/Frame4.png)] bg-no-repeat bg-center bg-cover w-full'>
                <NewArrivalCard
                  className='pt-43.75 pb-6.5 ps-6 group-hover:block hidden'
                  productName='Perfume'
                   className2='py-2 w-60.5'
                  description='GUCCI INTENSE OUD EDP'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewArrival
