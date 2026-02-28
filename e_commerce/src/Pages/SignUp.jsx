import React from 'react'
import Container from '../Components/Container'
import imgSrc from '../assets/SideImages.png'
import BreadCrumbs from '../Components/BreadCrumbs'
import Button from '../Components/Button'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const SignUp = () => {
    return (
        <>
         <Container>
           <BreadCrumbs />
            <div className='w-full md:flex items-center'>
                <div className='md:w-[60%]'>
                    <img src={imgSrc} alt="" />
                </div>
                <form className="max-w-md mx-auto">
                    <h2 className='text-4xl font-medium font-inter'>Create an account</h2>
                <p className='pt-6 pb-12 font-pop'>Enter your details below</p>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email or Phone Number</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                    </div>
                    <Button className='w-full'>Create Account</Button>
                    <div className='w-full border mt-4 mb-12 py-4 flex gap-3 items-center justify-center' >
                         <FcGoogle className='text-xl'/>  <span>Sign up with Google</span>
                    </div>
                    <div className='gap-2 flex justify-center'>
                        <span>Already have account?</span>
                     <NavLink to="/login" end><span>Log in</span></NavLink>
                    </div>
                </form>
            </div>
         </Container>
        </>
    )
}

export default SignUp
