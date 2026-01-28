import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import ProductDetails1 from '../assets/ProductDetails/ProductDetails1.png'
import ProductDetails2 from '../assets/ProductDetails/ProductDetails2.png'
import ProductDetails3 from '../assets/ProductDetails/ProductDetails3.png'
import ProductDetails4 from '../assets/ProductDetails/ProductDetails4.png'
import ProductDetails5 from '../assets/ProductDetails/ProductDetails5.png'
import RelatedItems from './RelatedItems'

import BreadCrumbs from '../Components/BreadCrumbs'
import axios from 'axios'
import { useParams } from "react-router";
import { Rate } from 'antd';;
import { VscCircleFilled } from "react-icons/vsc";
import Flex from '../Components/Flex'
import logo1 from '../assets/icon-delivery.png'
import logo2 from '../assets/Icon-return.png'


const ProductDetails = () => {
  const [products, setProducts] = useState([])
  const [productImg, setProductImg] = useState([])
  const [incre, setIncre] = useState(0)
  let {id} = useParams();
  
   const handleClick1 = () => {
    if (incre > 0) {
      setIncre(incre - 1)
    }
  }
  const handleClick2 = () => {
    setIncre(incre + 1)
  }

  async function data() {
    await axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducts(res.data)
        setProductImg(res.data.images)
      })
      console.log(productImg)
  }
  useEffect(() =>{ 
    data()
  }, [])


  return (
    <>
      <Container>
        <BreadCrumbs />
        {/* Custom class name (prduct) */}

        <div className='my-15 product flex justify-between'>
          <div className='flex gap-7.5'>
            <div className='flex flex-col gap-4 '>
            {
              productImg.map((item)=>{
                 return( 
                   <img src={item} className='h-34.5 w-42.5' alt="" />
                  )
              })
            }
            </div>
            <div className=''>
              <img src={products.thumbnail} alt="" />
            </div>
          </div>
             <div className='ms-17.75'>
                <h2 className='text-2xl font-semibold'>{products.title}</h2>
                <Flex className='my-4'>
                    <Rate allowHalf defaultValue="5" />
                    <p className='px-4'>(150 reviews)</p>
                    <p className='text-green-500 ps-4'>in stoke</p>
                </Flex>
                <h3 className='text-2xl'>$ {products.price}</h3>
                <p className='w-75 my-6 text-sm'>{products.description}</p>
                <hr className='text-[#0000002f]' />
                <div>
                    <h3 className='flex gap-2 items-center my-6 text-xl'>Color <span className='flex'><VscCircleFilled className='text-green-500 text-3xl' />  <VscCircleFilled className='text-orange-500 text-3xl' /></span></h3>
                    <div className='flex gap-4 items-center  productCard'>
                        <label className='text-lg' htmlFor="text">Size:</label>
                        <button>Xs</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XXl</button>
                    </div>
                    <div className='flex pt-6 pb-10 productCard'>
                        <button onClick={handleClick1} >-</button>
                        {/* custom card classname */}
                        <p className='py-1 px-8.5 Card'>{incre}</p>
                        <button onClick={handleClick2}>+</button>
                    </div>
                  <div className='border border-[#00000065] '>
                      <Flex className='items-center gap-4 pt-5 pb-3 ps-4 pe-12.75'>
                        <span className='w-10 h-10'>
                            <img src={logo1} alt="" />
                        </span>
                        <span>
                            <h3 className='font-medium mb-2'>Free Delivery</h3>
                            <h5 className='text-[12px] font-medium'>Enter your postal code for Delivery Availability</h5>
                        </span>
                    </Flex>
                     <hr className='text-[#00000063]' />
                    <Flex className='items-center gap-4 pt-5 pb-3 ps-4 pe-12.75'>
                        <span className='w-10 h-10'>
                            <img src={logo2} alt="" />
                        </span>
                        <span>
                            <h3 className='font-medium mb-2'>Return Delivery</h3>
                            <h5 className='text-[12px] font-medium'>Free 30 Days Delivery Returns. Details</h5>
                        </span>
                    </Flex>
                  
                  </div>

                </div>

            </div>
        </div>
        <div>
          <RelatedItems />
        </div>
      </Container>
    </>
  )
}

export default ProductDetails
