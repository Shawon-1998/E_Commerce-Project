import React, { useState } from 'react'
import { Rate } from 'antd';
import Flex from './Flex';
import { VscCircleFilled } from "react-icons/vsc";
import logo1 from '../assets/icon-delivery.png'
import logo2 from '../assets/Icon-return.png'


const ProductDetailsCard = () => {

    const [incre, setIncre] = useState(0)
    const handleClick1 = () => {
        if (incre > 0) {
            setIncre(incre - 1)
        }
    }
    const handleClick2 = () => {
        setIncre(incre + 1)
    }


    return (
        <>
            <div className='ms-17.75 productCard'>
                <h2 className='text-2xl font-semibold'>Havic HV G-92 Gamepad</h2>
                <Flex className='my-4'>
                    <Rate allowHalf defaultValue="5" />
                    <p className='px-4'>(150 reviews)</p>
                    <p className='text-green-500 ps-4'>in stoke</p>
                </Flex>
                <h3 className='text-2xl'>$ 192</h3>
                <p className='w-75 my-6 text-sm'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr className='text-[#0000002f]' />
                <div>
                    <h3 className='flex gap-2 items-center my-6 text-xl'>Color <span className='flex'><VscCircleFilled className='text-green-500 text-3xl' />  <VscCircleFilled className='text-orange-500 text-3xl' /></span></h3>
                    <div className='flex gap-4 items-center'>
                        <label className='text-lg' htmlFor="text">Size:</label>
                        <button className='h-6 w-6 border border-[#00000085] rounded-sm'>Xs</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XXl</button>
                    </div>
                    <div className='flex pt-6 pb-10 '>
                        <button onClick={handleClick1} >-</button>
                        <p className='py-1 px-8.5'>{incre}</p>
                        <button onClick={handleClick2}>+</button>
                    </div>
                  <div className='border border-[#00000065] '>
                      <Flex className='items-center gap-4 pt-5 pb-3 ps-4 pe-12.75'>
                        <span className='w-10 h-10'>
                            <img src={logo1} alt="" />
                        </span>
                        <span>
                            <h3 className='font-medium mb-2'>Free Delivery</h3>
                            <h5 className='text-[12px] font-medium'>Enter your postal code for Delivery Availability</h5>
                        </span>
                    </Flex>
                     <hr className='text-[#00000063]' />
                    <Flex className='items-center gap-4 pt-5 pb-3 ps-4 pe-12.75'>
                        <span className='w-10 h-10'>
                            <img src={logo2} alt="" />
                        </span>
                        <span>
                            <h3 className='font-medium mb-2'>Return Delivery</h3>
                            <h5 className='text-[12px] font-medium'>Free 30 Days Delivery Returns. Details</h5>
                        </span>
                    </Flex>
                   
                  </div>

                </div>

            </div>
        </>
    )
}

export default ProductDetailsCard
