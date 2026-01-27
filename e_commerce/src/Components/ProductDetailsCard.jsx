import React from 'react'
import { Rate } from 'antd';
import Flex from './Flex';
import { VscCircleFilled } from "react-icons/vsc";

const ProductDetailsCard = () => {
    return (
        <>
            <div>
                <h2>Havic HV G-92 Gamepad</h2>
                <Flex>
                    <Rate allowHalf defaultValue="5" />
                    <p>(150 reviews)</p>
                    <p className='text-green-500'>in stoke</p>
                </Flex>
                <h3>$ 192</h3>
                <p className='w-75'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr className='text-[#0000002f]' />
            <div>
                <h3 className='flex gap-2 items-center text-xl'>Color <span className='flex'><VscCircleFilled className='text-green-500 text-3xl' />  <VscCircleFilled className='text-orange-500 text-3xl' /></span></h3>
            <div className='flex gap-2'>
              <label htmlFor="text">Size:</label>
              <button>Xs</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XXl</button>
            </div>

            </div>

            </div>
        </>
    )
}

export default ProductDetailsCard
