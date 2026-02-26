import React, { useState } from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumbs'
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import { NavLink } from "react-router";
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'

const Cart = () => {
  const cartData = useSelector((state) => state.Products.cart)
  const subTotal = useSelector((state) => state.Products.subTotal)

  return (
    <>
      <Container >
        <BreadCrumbs />
        <div className=' py-6 px-10 shadow-md flex gap-50 justify-between'>
          <span className='w-50'>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
        </div>
        {
          cartData.map((item, idx) => {
            return (
              <CartItem
                id={item.id}
                price={item.price}
                title={item.title}
                imgSrc={item.thumbnail}
                key={idx}
                quantity={item.quan}
              />
            )
          })
        }

        <Flex className='justify-between pt-6 pb-20 cart'>
          <NavLink to="/shop" end> <button className='hover:bg-primary hover:text-white rounded-sm'> Return To Shop</button></NavLink>

         <button className='hover:bg-primary hover:text-white rounded-sm'>Update Cart </button>
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
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className='flex pb-4 justify-between border-b border-[#0000005d]'>
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div className='flex justify-between '>
              <p>Total</p>
              <span>${subTotal.toFixed(2)}</span>
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
