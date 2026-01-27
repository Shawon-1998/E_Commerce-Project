import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import ProductDetails1 from '../assets/ProductDetails/ProductDetails1.png'
import ProductDetails2 from '../assets/ProductDetails/ProductDetails2.png'
import ProductDetails3 from '../assets/ProductDetails/ProductDetails3.png'
import ProductDetails4 from '../assets/ProductDetails/ProductDetails4.png'
import ProductDetails5 from '../assets/ProductDetails/ProductDetails5.png'
import ProductDetailsCard from '../Components/ProductDetailsCard'
import BestSellingProduct from '../Components/BestSellingProduct'



const ProductDetails = () => {
  const [products, setProducts] = useState([])

        useEffect(() => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then((data) => {
                    setProducts(data.products)
                 
                });
        }, [])

  return (
    <>   
       <Container>
        {/* Custom class name (prduct) */}
         <div className='my-15 product flex'> 
           <div className='flex gap-7.5'>
              <div className='flex flex-col gap-4 '>
                  <img src={ProductDetails1}  alt="" />
                  <img src={ProductDetails2}  alt="" />
                  <img src={ProductDetails3}  alt="" />
                  <img src={ProductDetails4}  alt="" />
              </div>
            <div className=''>
                <img src={ProductDetails5}  alt="" />
            </div>
           </div>
            <div>
               <ProductDetailsCard />
            </div>
         </div>
            <div>
              <BestSellingProduct />
            </div>
       </Container>
    </>
  )
}

export default ProductDetails
