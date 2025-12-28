import React from 'react'

import Flex from './Flex'
import { FaStar } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";


const CardSec = ({ productName, ImgSrc, price, discountPrice, digit, discount, btn }) => {
    return (
        <>
            <div className='w-67.5'>
                <div className='relative'>
                    <img src={ImgSrc} alt="" className='w-full' />
                    <div className='hover:hidden visible  '>
                        <h3 className='bg-primary px-3 py-1 text-[#fafafac0] absolute left-3 top-3 rounded-sm '>-{discount}%</h3>
                        <div className='flex flex-col gap-2 absolute top-3 right-3 '>
                            <IoHeartOutline className='bg-white rounded-full  h-6 w-6 text-lg ' />
                            <LuEye className='bg-white rounded-full  h-8 w-6  text-lg ' />
                        </div>
                        <button className='bg-black text-white block w-full py-2 px-21.75 font-pop'>{btn}</button>
                    </div>
                </div>
                <h3 className='font-medium mt-4 '>{productName}</h3>
                <Flex className='my-2 gap-3'>
                    <p className='text-primary '>${price}</p>
                    <p className='line-through'>${discountPrice}</p>
                </Flex>
                <Flex className=' gap-2'>
                    <Flex className='text-[#FFAD33]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </Flex>
                    <p>({digit})</p>
                </Flex>

            </div>
        </>
    )
}

export default CardSec
