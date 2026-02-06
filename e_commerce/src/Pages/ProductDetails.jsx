import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumbs'
import axios from 'axios'
import { useParams } from "react-router";
import { Rate } from 'antd';;
import { VscCircleFilled } from "react-icons/vsc";
import Flex from '../Components/Flex'
import logo1 from '../assets/icon-delivery.png'
import logo2 from '../assets/Icon-return.png'
import Skeleton from '../Components/Skeleton'
import RelatedItems from '../Components/RelatedItems';


const ProductDetails = () => {
  const [products, setProducts] = useState([])
  const [productImg, setProductImg] = useState([])
  const [incre, setIncre] = useState(0)
  const [loading, setLoading] = useState(1)
  let { id } = useParams();

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
        setLoading(0)
        setProductImg(res.data.images)
      })
   
  }
  useEffect(() => {
    data()
  }, [])


  return (
    <>
      <Container>
        <BreadCrumbs />
        {
          !loading ?
          /* Custom class name (prduct) */
            <div className='my-15 product lg:flex justify-between'>
              <div className='flex lg:gap-7.5'>
                <div className='flex flex-col gap-4 '>
                  {
                    productImg.map((item) => {
                      return (
                        <img src={item} className='h-34.5 w-42.5' alt="" />
                      )
                    })
                  }
                </div>
                <div className=''>
                  <img src={products.thumbnail} alt="" />
                </div>
              </div>
              <div className='lg:ms-17.75 mx-3 lg:mx-0 mt-5 lg:mt-0'>
                <h2 className='text-2xl font-semibold'>{products.title}</h2>
                <Flex className='my-4'>
                  <Rate allowHalf defaultValue={products.rating } />
                  <p className='px-4'>({products.reviews ? products.reviews.length : null} reviews)</p>
                  <p className='text-green-500 ps-4'>in stoke</p>
                </Flex>
                <h3 className='text-2xl'>${products.price}</h3>
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
                    <Flex className='items-center gap-4 pt-5 pb-3 lg:ps-4 lg:pe-12.75'>
                      <span className='w-10 h-10'>
                        <img src={logo1} alt="" />
                      </span>
                      <div>
                        <h3 className='font-medium mb-2'>Free Delivery</h3>
                        <h5 className='text-[12px] font-medium'>Enter your postal code for Delivery Availability</h5>
                      </div>
                    </Flex>
                    <hr className='text-[#00000063]' />
                    <Flex className='items-center gap-4 pt-5 pb-3 lg:ps-4 lg:pe-12.75'>
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
            </div> :
            <div className="lg:flex flex-wrap justify-between animate-pulse">
              <div className="grid bg-gray-300 rounded-lg h-90 w-120 place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                  </path>
                </svg>
              </div>
              <div className="w-max Skeleton">
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
                <div className="block w-130 h-5 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
            </div>
        }

        {
          !loading ? <div> <RelatedItems /> </div> :
            <div className='flex justify-between'>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
        }
      </Container>
    </>
  )
}

export default ProductDetails
