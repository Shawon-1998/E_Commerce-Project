import React from 'react'
import { Rate } from 'antd';
import Flex from './Flex'
import { IoHeartOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router";

const CardSec = ({ productName, ImgSrc, price, rating, discountPrice,digit, discount, btn, className,id }) => {

    let navigate = useNavigate();

    const handleProductDetails = () => {
        navigate(`/Details/${id}`)
    }


    return (
        <>
            <div className='w-67.5 mx-auto group ' onClick={handleProductDetails}>
                <div className='relative overflow-hidden'>
                    <img src={ImgSrc} alt="" className='w-full' />
                    <div className=' '>
                        <h3 className={`bg-primary px-3 py-1 text-[#fafafac0] 
                        absolute left-3 top-3 rounded-sm ${className} block`}>-{discount}%</h3>
                        <div className='flex flex-col gap-2 absolute top-3 right-3 '>
                            <IoHeartOutline className='bg-white rounded-full  h-6 w-6 text-lg ' />
                            <LuEye className='bg-white rounded-full  h-8 w-6 
                             text-lg ' />
                        </div>
                    </div>
                    <button className='absolute bg-black text-white block w-full py-2 px-21.75 font-pop cursor-pointer -bottom-10 group-hover:bottom-0 ease-linear duration-400'>{btn}</button>
                </div>
                <h3 className='font-medium mt-4 '>{productName}</h3>
                <Flex className='my-2 gap-3'>
                    <p className='text-primary '>${discountPrice}</p>
                    <p >${price}</p>
                </Flex>
                <Flex className=' gap-2'>
                    <Rate allowHalf defaultValue={rating} />
                    <p>({digit})</p>
                </Flex>

            </div>
        </>
    )
}

export default CardSec
