import React, { useState } from 'react'
import { Rate } from 'antd';
import Flex from './Flex';
import { VscCircleFilled } from "react-icons/vsc";

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
                    <p>(150 reviews)</p>
                    <p className='text-green-500'>in stoke</p>
                </Flex>
                <h3 className='text-2xl'>$ 192</h3>
                <p className='w-75 my-6 text-sm'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr className='text-[#0000002f]' />
                <div>
                    <h3 className='flex gap-2 items-center text-xl'>Color <span className='flex'><VscCircleFilled className='text-green-500 text-3xl' />  <VscCircleFilled className='text-orange-500 text-3xl' /></span></h3>
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

                </div>

            </div>
        </>
    )
}

export default ProductDetailsCard
