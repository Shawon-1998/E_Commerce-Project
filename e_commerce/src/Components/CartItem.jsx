import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { useDispatch } from 'react-redux';
import { removeCartReducer } from '../slices/ProductSlice';
import { toast,Bounce } from 'react-toastify';

const CartItem = ({ price, imgSrc, title, Subprice, id }) => {
  const dispatch = useDispatch()
  const [productCount, setProductCount] = useState(0)
  
    const notify = () =>  toast.error('product been removed', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
    
  const handleProductDecrement = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1)
    }
  }
  const handleProductIncrement = () => {
    setProductCount(productCount + 1)
  }
  const handleRemove = () => {
    dispatch(removeCartReducer(id))
       notify()
  }
  return (
    <>
      <div className=' py-6 px-10 my-10 shadow-md flex gap-50 justify-between items-center'>
        <div className='flex gap-2 items-center w-50 '>
          <div className='relative flex items-center gap-2' >
            <span className='w-4 h-4 text-xs bg-primary text-white absolute top-0 -left-2 rounded-full items-center flex justify-center cursor-pointer' onClick={handleRemove}>X</span>
            <img className='w-20 h-12' src={imgSrc} alt="product" />{title}</div>
        </div>
        <div>${price}</div>
        <div className='items-center flex gap-2 py-1.5 px-3 border'>
          {productCount}
          <span className=' grid '>
            <button onClick={handleProductIncrement} className='Block'><IoIosArrowUp /></button>
            <button onClick={handleProductDecrement} className='Block'><IoIosArrowDown /></button>
          </span>
        </div>
        <div>${Subprice}</div>
      </div>
    </>
  )
}

export default CartItem
