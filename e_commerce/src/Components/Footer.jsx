import React from 'react'
import Flex from './Flex'
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <>


      <footer className="text-white mt-32.5 bg-black ">
        <div className="mx-auto w-full container pb-15 pt-20 ">
          <div className="flex flex-col lg:flex-row mx-auto justify-between items-center lg:items-start ">
            <div className="mb-6 md:mb-0">
                <h2 className=' text-2xl font-bold'>Exclusive</h2>
                <h2 className='font-medium font-pop text-xl py-6'>Subscribe</h2>
                <p className='w-65.75 mb-7.5'>Get 10% off your first order</p>
                <Flex className='relative' >
                  <input type="email" placeholder='Enter your email' className='w-60.75 py-2.5 ps-4  rounded[4px] rounded-sm text-white border border-white' />
                  <VscSend
                    className='absolute top-4 right-12 lg:right-8 text-lg' />
                </Flex>
            
            </div>
           <div className='lg:flex lg:gap-20'>
             <ul className='leading-10 '>
              <h2 className='font-medium font-pop text-xl pb-6'>Support</h2>
              <li className='w-43.75 leading-7'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
            <ul className='leading-10'>
              <h2 className='font-medium font-pop text-xl pb-6'>Account</h2>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
            <ul className='leading-10 '>
              <h2 className='font-medium font-pop text-xl pb-6'>Quick Link</h2>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>

            </ul>
            <ul className='leading-10 '>
              <h2 className='font-medium font-pop text-xl pb-6'>Download App</h2>
              <li>Documentation</li>
              <li>License</li>
              <li>Changelog</li>
            </ul>
           </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
