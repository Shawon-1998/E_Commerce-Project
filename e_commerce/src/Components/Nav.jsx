import React from 'react'
import Flex from './Flex'
import logo from '../assets/logo.png'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";



const Nav = () => {
  return (
    <>
      <nav className='pt-11.75 pb-5.75 border-[#0000003d] border-b  font-pop'>
        <div className="container">
          <Flex className='justify-between'>
            <img src={logo} alt="" />
            <ul className='flex gap-12 font-normal'>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
            <Flex className='gap-6 items-center'>
              <Flex className='relative' >
                <input type="text" placeholder='What are you looking for?' className='w-60.75 py-2.5 ps-4 bg-[#F5F5F5] rounded[4px] placeholder:text-xs outline-none' />
                <HiMiniMagnifyingGlass className='absolute top-4 
            right-4 text-lg' />
              </Flex>
              <Flex className='gap-4 text-xl'>
                <IoHeartOutline />
                <IoCartOutline className='text-[24px] opacity-80' />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </nav>
    </>
  )
}

export default Nav
