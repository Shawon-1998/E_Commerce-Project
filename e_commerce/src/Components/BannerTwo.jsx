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
              <h1 className='w-110.75 leading-15 text-5xl font-semibold py-8 text-white'>Enhance Your <span className='block'> Music Experience</span></h1>
              <CountDown />
              <button className='bg-secondary text-white font-medium font-pop py-4 px-12 cursor-pointer rounded-sm mt-10'>
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
