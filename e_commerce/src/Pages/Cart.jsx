import React from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumbs'
import CartDetails from '../Components/CartDetails'
import cartItem from '../assets/CartItems.png'

const Cart = () => {
  return (
    <>
      <Container>
         <BreadCrumbs />
         <CartDetails
         imgSrc={{cartItem}}
          product='Lcd Monitor'
          price='1160'
         
          subTotal='SubTotal'
         />
      </Container>
    </>
  )
}

export default Cart
