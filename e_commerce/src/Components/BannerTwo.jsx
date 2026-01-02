import React from 'react'
import Jbl from '../assets/jbl.png'
import Button from './Button'
import CountDown from './CountDown'



const BannerTwo = () => {
  return (
   <>
    <div className="container">
        <div className='bg-[url(assets/bannerTwo.png)]'>
        <div className='py-17.25 ps-14 pe-12.5 lg:flex'>
            <div className=''>
              <h3 className='font-semibold text-secondary'>Categories</h3>
              <h1 className='w-110.75 lg:leading-15 leading-10 lg:text-5xl text-3xl font-semibold lg:py-8  py-4 text-white'>Enhance Your <span className='block'> Music Experience</span></h1>
              <CountDown />
              <button className='bg-secondary text-white font-medium font-pop lg:py-4 lg:px-12 px-6 block  py-2 cursor-pointer rounded-sm mt-10 mb-4 lg:mb-0'>
                Buy now
              </button>
            </div>
            <img src={Jbl} className='w-full' alt="" />
        </div>
    </div>
    </div>
   </>
  )
}

export default BannerTwo
