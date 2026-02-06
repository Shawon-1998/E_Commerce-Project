import React, { useState } from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumbs'
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from 'react-redux'

const Cart = () => {
  const Data = useSelector((state) => state.Products.cart)
  const [value, setValue] = useState(0)
  console.log(Data)


  const handleProductDecrement = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }
  const handleProductIncrement = () => {
    setValue(value + 1)
  }
  return (
    <>
      <Container >
        <BreadCrumbs />
        <div className='py-6 px-10 shadow-md flex justify-between'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
        </div>


        {
          Data.map((item,idx) => {
            return (
              <div  key={idx} className='py-6 px-10 my-10 shadow-md flex justify-between '>
                <div className='flex gap-2 items-center'><img className='w-10 h-10' src={item.thumbnail} alt="" />{item.title}</div>
                <div>${item.price}</div>
                <div className='items-center flex gap-2 py-1.5 px-3 border'>
                  {value}
                  <div className=' grid '>
                    <button onClick={handleProductIncrement} className='Block'><IoIosArrowUp /></button>
                    <button onClick={handleProductDecrement} className='Block'><IoIosArrowDown /></button>
                  </div>
                </div>
                <div>${item.price}</div>
              </div>
            )
          })
        }

        <Flex className='justify-between pt-6 pb-20 cart'>
          <button className='hover:bg-primary hover:text-white rounded-sm'>Return To Shop</button>
          <button className='hover:bg-primary hover:text-white rounded-sm'>Update Cart</button>
        </Flex>

        <Flex className='justify-between items-start'>
          <form className='flex gap-4' action="">
            <input type="text" placeholder='Coupon Code' className='py-3.75 placeholder:ps-6  w-75 border outline-0 rounded-sm' />
            <Button className=''>Apply Coupon</Button>
          </form>
          <div className='w-117.5 rounded-sm border px-6 mb-35'>
            <h2 className='text-lg font-medium pt-8'>Cart total</h2>
            <div className='flex justify-between pt-6 pb-4 border-b border-[#0000005d]'>
              <p>subTotal</p>
              <span>${ }</span>
            </div>
            <div className='flex pb-4 justify-between border-b border-[#0000005d]'>
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div className='flex justify-between '>
              <p>Total</p>
              <span>${ }</span>
            </div>
            <div className='mt-8 mb-12 text-center'>
              <Button> Procees to checkout </Button>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default Cart
