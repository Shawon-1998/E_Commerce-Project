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
import Container from '../Components/Container'
import { FaShoppingBasket } from "react-icons/fa";
import { FiUser } from "react-icons/fi";


 const Nav = ({ className }) => {
  const Data = useSelector((state) => state.Products.cart)
  const DataWish = useSelector((state) => state.Products.wish)
  const [change, setChange] = useState(false)
  const [shopping, setShopping] = useState(false)
  let navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart")
  }
  const handleWish = () => {
    navigate("/wishList")
  }

  const handleToggle = () => {
    setChange(!change)
  }
  const handleShopping = () => {
    setShopping(!shopping)
  }
  return (
    <>

      <nav className=' pt-11.75 pb-5.75 border-[#0000003d] border-b font-pop '>
        <Container>
          <div className='flex md:items-center justify-between '>
            <div className=''>
              <NavLink to="/" end> <img src={logo} alt="" /></NavLink>
            </div>
            <div className='md:flex gap-5 relative md:items-center justify-between'>
              <ul className={` ${change ? "block" : "hidden"} md:flex bg-black text-white md:bg-transparent md:text-black gap-6  lg:gap-12 font-normal md:static absolute top-5 left-20 py-3 px-3 hover:transition-all rounded-sm leading-10 `}>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="Contact" end> Contact </NavLink></li>
                <li><NavLink to="/About" end>About</NavLink></li>
                <li>Sign Up</li>
              </ul>
              <div className={`md:flex ${shopping ? "block" : "hidden"} `}>
                <div className='relative md:ms-0 md:me-2 lg:ms-34 lg:me-6' >
                  <input id='text' name='text' type="text" placeholder='What are you looking for?' className=' w-50 md:w-45 lg:w-60.75 md:py-2.5 lg:placeholder:text-[12px] md:ps-4 ps-2 bg-[#F5F5F5] rounded[4px] md:placeholder:text-[10px] placeholder:text-xs outline-none relative' />
                  <HiMiniMagnifyingGlass className='absolute top-1 md:top-4 right-4 text-lg' />
                </div>
                <Flex className='flex gap-4 text-xl mt-3 '>
                  <div className='relative'>
                    <IoHeartOutline className='text-[24px] opacity-80 cursor-pointer' onClick={handleWish} />
                    <div className='absolute -top-1 -right-2 h-4 w-4 font-medium bg-primary rounded-full flex items-center justify-center text-[10px] text-white'>
                      {DataWish.length}
                    </div>
                  </div>
                  <div className='relative'>
                    <IoCartOutline className='text-[24px] opacity-80 cursor-pointer' onClick={handleCart} />
                    <div className='absolute -top-1 -right-2 h-4 w-4 font-medium bg-primary rounded-full flex items-center justify-center text-[10px] text-white'>
                      {Data.length}
                    </div>
                  </div>
                  <div className='relative'>
                    <FiUser />
                  </div>
                </Flex>
              </div>
            </div>

            <FaShoppingBasket className='md:hidden' onClick={handleShopping} />
            <FaBarsStaggered className='md:hidden' onClick={handleToggle} />

          </div>
        </Container>
      </nav>
    </>
  )
}

export default Nav
