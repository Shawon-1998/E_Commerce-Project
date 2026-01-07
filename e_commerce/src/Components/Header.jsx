import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Flex from './Flex';

const Header = () => {
    return (
        <>
            <header className='bg-black  lg:px-5 px-0 '>
                <div className="container">
                    <Flex className='text-sm py-3.75 flex  text-[#FAFAFA] '>
                        <div className='w-[77%] lg:flex font-pop justify-end font-normal text-sm gap-2 '>
                            <p className='lg:flex gap-2 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className='font-semibold '>ShopNow</a></p>        
                        </div>
                        <Flex className='w-[23%] justify-end flex-none gap-1 '>
                            <select name="cars" id="cars" className='bg-black text-white outline-none'>
                            <option value="volvo">English</option>
                            <option value="saab">Bangla</option>
                        </select>

                        </Flex>
                    </Flex>
                </div>
            </header>
        </>
    )
}

export default Header
