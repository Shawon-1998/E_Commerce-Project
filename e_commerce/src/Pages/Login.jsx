import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import Container from '../Components/Container'
import Button from '../Components/Button'
import imgSrc from '../assets/SideImages.png'

const Login = () => {
  return (
    <>
               <Container>
           <BreadCrumbs />
            <div className='w-full flex items-center'>
                <div className='w-[60%]'>
                    <img src={imgSrc} alt="" />
                </div>
                <form className="max-w-md mx-auto">
                    <h2 className='text-4xl font-medium font-inter'>Log in to Exclusive</h2>
                <p className='pt-6 pb-12 font-pop'>Enter your details below</p>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email or Phone Number</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                    </div>
                    <div className='flex justify-between items-center'>
                    <Button className='w-full'>Login</Button>
                     <p className='text-primary font-pop '>Forget Password?</p>
                    </div>          
                </form>
            </div>
         </Container>
    </>
  )
}

export default Login
