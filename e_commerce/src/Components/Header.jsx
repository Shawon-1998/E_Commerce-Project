import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Flex from './Flex';

const Header = () => {
    return (
        <>
            <header className='bg-black  lg:px-5 px-0 '>
                <div className="container">
                    <Flex className='text-sm py-3.75 flex  text-[#FAFAFA] '>
                        <div className='w-[80%] lg:flex  justify-end gap-2 leading-8 lg:leading-0'>
                            <p >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <a href="#" className='font-semibold '>ShopNow</a>
                        </div>
                        <Flex className='w-[20%] justify-end flex-none gap-1'>
                            <p>English</p>
                            <p className='text-lg'><MdKeyboardArrowDown /></p>
                        </Flex>
                    </Flex>
                </div>
            </header>
        </>
    )
}

export default Header
