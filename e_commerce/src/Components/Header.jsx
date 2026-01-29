import React from 'react'
import Flex from './Flex';
import { NavLink } from "react-router";
const Header = () => {
    return (
        <>
            <header className='bg-black  lg:px-5 px-0 '>
                <div className="container">
                    <Flex className='text-sm py-3.75 flex  text-[#FAFAFA] '>
                        <div className='w-[77%] lg:flex font-pop justify-end font-normal text-sm gap-2 '>
                            <p className='lg:flex gap-2 '>Summer Sale For All Swim Suits
                                And Free Express Delivery - OFF 50%!
                                <NavLink className='font-semibold cursor-pointer' to="/shop" end>
                                    ShopNow
                                </NavLink> </p>
                        </div>
                        <Flex className='w-[23%] justify-end flex-none gap-1 '>
                            <select name="lang" id="lang" className='bg-black cursor-pointer text-white outline-none'>
                                <option value="">English</option>
                                <option value="">Bangla</option>
                            </select>

                        </Flex>
                    </Flex>
                </div>
            </header>
        </>
    )
}

export default Header
