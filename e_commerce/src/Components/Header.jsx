import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Flex from './Flex';

const Header = () => {
    return (
        <>
            <header className='bg-black  '>
                <div className="container">
                    <Flex className='text-sm py-3.75 text-[#FAFAFA] '>
                        <div className='w-[80%] flex justify-end gap-2'>
                            <p >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <a href="#" className='font-semibold '>ShopNow</a>
                        </div>
                        <Flex className='w-[20%] justify-end flex gap-1'>
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
