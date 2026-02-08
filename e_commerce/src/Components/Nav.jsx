import React, { useState } from 'react'
import Flex from './Flex'
import logo from '../assets/logo.png'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { wishList } from '../slices/ProductSlice';
import Container from '../Components/Container'

const Nav = ({ className }) => {
  const Data = useSelector((state) => state.Products.cart)
  const DataWish = useSelector((state) => state.Products.wish)
  let navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart")
  }
  const handleWish = () => {
    navigate("/wishList")
  }

  return (
    <>
      <nav className=' block pt-11.75 pb-5.75 border-[#0000003d] border-b font-pop'>
        <div className="container">
          <div className='flex lg:items-center'>
            <div className='w-[26%]'>
              <NavLink to="/" end> <img src={logo} alt="" /></NavLink>
            </div>
            <div className='lg:flex items-center justify-between w-[74%]'>
              <div className='flex gap-20 lg:gap-47.5'>
                <ul className='lg:flex gap-6 lg:gap-12 font-normal'>
                  <NavLink to="/" end>Home</NavLink>
                  <li><NavLink to="Contact" end> Contact </NavLink></li>
                  <li><NavLink to="/" end>About</NavLink></li>
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
                  <div className='relative'>
                    <IoHeartOutline className='text-[24px] opacity-80 cursor-pointer' onClick={handleWish} />
                    <div className='absolute -top-1 -right-2 h-4 w-4 font-extralight bg-primary rounded-full flex items-center justify-center text-[10px] text-white'>
                      {DataWish.length}
                    </div>
                  </div>
                  <div className='relative'>
                    <IoCartOutline className='text-[24px] opacity-80 cursor-pointer' onClick={handleCart} />
                    <div className='absolute -top-1 -right-2 h-4 w-4 font-extralight bg-primary rounded-full flex items-center justify-center text-[10px] text-white'>
                      {Data.length}
                    </div>
                  </div>
                </Flex>
              </Flex>
            </div>
            <FaBarsStaggered className='lg:hidden' />
          </div>
        </div>
      </nav>

      <nav className=' block pt-11.75 pb-5.75 border-[#0000003d] border-b font-pop'>
        <Container>

          <div className='flex md:items-center justify-between'>
            <div className='w-[40%] md:w-[20%]'>
              <NavLink to="/" end> <img src={logo} alt="" /></NavLink>
            </div>
            <ul className='md:flex gap-6 lg:gap-12 font-normal'>
              <NavLink to="/" end>Home</NavLink>
              <li><NavLink to="Contact" end> Contact </NavLink></li>
              <li><NavLink to="/" end>About</NavLink></li>
              <li>Sign Up</li>
            </ul>

          </div>
          <Flex>
            <div className='relative' >
              <input type="text" placeholder='What are you looking for?' className=' w-50 md:w-55 lg:w-60.75 py-2.5 md:ps-4 ps-2 bg-[#F5F5F5] rounded[4px] placeholder:text-xs outline-none relative' />
              <HiMiniMagnifyingGlass className='absolute top-0 right-0 text-lg' />
            </div>
            <Flex className='flex gap-4 text-xl'>
              <div className='relative'>
                <IoHeartOutline className='text-[24px] opacity-80 cursor-pointer' onClick={handleWish} />
                <div className='absolute -top-1 -right-2 h-4 w-4 font-extralight bg-primary rounded-full flex items-center justify-center text-[10px] text-white'>
                  {DataWish.length}
                </div>
              </div>
              <div className='relative'>
                <IoCartOutline className='text-[24px] opacity-80 cursor-pointer' onClick={handleCart} />
                <div className='absolute -top-1 -right-2 h-4 w-4 font-extralight bg-primary rounded-full flex items-center justify-center text-[10px] text-white'>
                  {Data.length}
                </div>
              </div>
            </Flex>
          </Flex>


        </Container>
      </nav>
    </>
  )
}

export default Nav
