import React from 'react'
import CatagoriesCards from './CatagoriesCards'
import logo1 from '../assets/Services1.png'
import logo2 from '../assets/Services2.png'
import logo3 from '../assets/Services3.png'
import Flex from './Flex'


const Delivery = () => {
  return (
    <>
     <div className='lg:flex justify-center mt-34'>
         <CatagoriesCards 
      imgSrc={logo1}
       productDetails='FREE AND FAST DELIVERY'
      details='Free delivery for all orders over $140'
      />
      <CatagoriesCards 
      imgSrc={logo2}
      productDetails='24/7 CUSTOMER SERVICE'
      details='Friendly 24/7 customer support'
      />
      <CatagoriesCards 
      imgSrc={logo3}
      productDetails='MONEY BACK GUARANTEE'
      details='We return money within 30 days'
      />
     </div>
    </>
  )
}

export default Delivery
