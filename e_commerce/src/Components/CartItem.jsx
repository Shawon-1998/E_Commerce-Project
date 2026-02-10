import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CartItem = ({ price, imgSrc, title, Subprice, id }) => {
  const [value, setValue] = useState(0)
  const handleProductDecrement = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }
  const handleProductIncrement = () => {
    setValue(value + 1)
  }
  const handleRemove =()=>{
       
  }
  return (
    <>
      <div className='py-6 px-10 my-10 shadow-md flex gap-50 justify-between'>
        <div className='flex gap-2 items-center w-50 relative'>
          <div className='w-4 h-4 text-xs bg-primary absolute top-0 left-0 rounded-full items-center flex justify-center text-white' onClick={handleRemove}>X</div>
          <img className='w-20 h-12 ' src={imgSrc} alt="" />{title}</div>
        <div>${price}</div>
        <span className='items-center flex gap-2 py-1.5 px-3 border'>
          {value}
          <span className=' grid '>
            <button onClick={handleProductIncrement} className='Block'><IoIosArrowUp /></button>
            <button onClick={handleProductDecrement} className='Block'><IoIosArrowDown /></button>
          </span>
        </span>
        <div>${Subprice}</div>
      </div>
    </>
  )
}

export default CartItem
