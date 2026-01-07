import React, { useState } from 'react'
import Flex from './Flex'
import logo from '../assets/logo.png'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";



const Nav = ({ className }) => {

  const [value, setValue] = useState(false)
  const [value1, setValue1] = useState(false)

  const handleClick = () => {
    setValue(!value)
  }
  const handleClick2 = () => {
    setValue1(!value1)
  }

  return (
    <>
      <nav className=' block pt-11.75 pb-5.75 border-[#0000003d] border-b font-pop'>
        <div className="container">
          <div className='flex lg:items-center'>
            <div className='w-[26%]'>
              <img src={logo} alt="" />
            </div>
            <div className='lg:flex items-center justify-between w-[74%]'>
              <div className='flex gap-20 lg:gap-47.5'>
                <ul className='lg:flex gap-6 lg:gap-12 font-normal'>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>About</li>
                  <li>Sign Up</li>
                </ul>
              </div>
              <Flex className='gap-6 lg:flex items-center hidden'>
                <Flex className='relative' >
                  <input type="text" placeholder='What are you looking for?' className='w-60.75 py-2.5 ps-4 bg-[#F5F5F5] rounded[4px] placeholder:text-xs outline-none' />
                  <HiMiniMagnifyingGlass className='absolute top-4 
            right-4 text-lg' />
                </Flex>
                <Flex className='flex gap-4 text-xl'>
                  <IoHeartOutline />
                  <IoCartOutline className='text-[24px] opacity-80' />
                </Flex>
              </Flex>
            </div>
              <FaBarsStaggered className='lg:hidden' />
          </div>
        </div>
      </nav>

      {/* <nav className='lg:hidden block lg:pt-11.75 py-5 lg:pb-5.75 border-[#0000003d] border-b  font-pop'>
        <div className="container">
          <img src={logo} alt="" className='mx-auto block' />

          <Flex className='justify-between pt-5 pb-2'>
            <TiThMenuOutline className={`${className} text-2xl`} onClick={handleClick} />
            <FaBox className={`${className} text-2xl`} onClick={handleClick2} />
          </Flex>


          <Flex className='  justify-between'>
            <div className=' flex  lg:gap-47.5'>
              {
                value ? <ul className=' ps-2 font-normal'>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>About</li>
                  <li>Sign Up</li>
                </ul> : value
              }
            </div>
            {
              value1 ? <div className=' flex-none'>
                <Flex className='relative ' >
                  <input type="text" placeholder='What are you looking for?' className=' py-2.5 ps-4 bg-[#F5F5F5] rounded[4px] placeholder:text-xs outline-none' />
                  <HiMiniMagnifyingGlass className='absolute top-4 
            right-4 text-lg' />
                </Flex>
                <Flex className='flex justify-center pt-3 gap-8 text-xl'>
                  <IoHeartOutline />
                  <IoCartOutline className='text-[24px] opacity-80' />
                </Flex>
              </div> : value1
            }
          </Flex>
        </div>
      </nav> */}
    </>
  )
}

export default Nav
