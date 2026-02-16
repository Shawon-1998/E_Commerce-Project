import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Button from '../Components/Button'

const Contact = () => {
    return (
        <>
            <Container>
                <BreadCrumbs />
            <Flex className='items-start gap-15.25'>
                 <div className='pt-10 px-8.75 pb-12.75 w-[28%] contact shadow-xl'>
                    <Flex className='gap-4'>
                        <span className='h-10 w-10 rounded-full hover:text-white bg-primary items-center justify-center flex'>
                            <BsTelephone />
                        </span>
                        <h3 className='font-medium font-pop'>Call to Us</h3>
                    </Flex>
                    <p className='mt-6 mb-4 w-65.5'>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
              <hr className='text-[#0000005d] my-8'/>
                <div className='font-pop'>
                    <Flex className='gap-4'>
                        <span className='h-10 w-10 rounded-full hover:text-white bg-primary items-center justify-center flex'>
                            <CiMail />
                        </span>
                        <h3 className='font-medium'>Write To US</h3>
                    </Flex>
                    <p className='mt-6  w-65.5'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='my-4'>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
               </div>
               <div className='w-[72%]'>
                  <form className='Input flex gap-4 ' action="">
                    <input id='text' name='text' type="text" placeholder='Your Name' />
                    <input id='email' name='email' type="email" placeholder='Your Email'/>
                    <input id='tele' name='tele' type="tele" placeholder='Your Phone Number' />
                  </form>
                  <form action="">
                    <input id='text' name='text' type="text" placeholder='Your Name' className='w-full boder border-[#0000005d] rounded-sm bg-[#00000011] ps-3.25 pt-3.25 pb-42.5 my-8 outline-0'/>
                  </form>
                 <div className='flex justify-end text-white'> 
                     <Button> Send Massage</Button>
                 </div>
               </div>
            </Flex>

            </Container>

        </>
    )
}

export default Contact
