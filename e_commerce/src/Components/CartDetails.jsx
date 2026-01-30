import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CartDetails = ({ className, price, product, subTotal, quantity, imgSrc }) => {

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
        
            <div className={`py-6 px-10 mb-10 shadow-md flex justify-between ${className}`}>
                <div>{product}</div>
                <div>${price}</div>
                <div className='items-center flex gap-2 py-1.5 px-3 border'>
                    {incre}
                    <div className=' grid '>
                        <button onClick={handleClick2} className='Block'><IoIosArrowUp /></button>
                        <button onClick={handleClick1} className='Block'><IoIosArrowDown /></button>
                    </div>
                </div>
                <div>${subTotal}</div>
            </div>


        </>
    )
}

export default CartDetails
