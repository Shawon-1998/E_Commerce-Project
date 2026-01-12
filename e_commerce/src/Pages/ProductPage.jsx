import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { VscCircleFilled } from "react-icons/vsc";
import CardSec from '../Components/CardSec';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flex from '../Components/Flex';

const ProductPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProducts(data.products));
    }, [])

    console.log(products)

    return (
        <>
            <Container>
                <div className='flex justify-between'>
                    <h3 className='font-pop text-xl font-bold text-[#262626]'>Shop by Category</h3>
                    <div className='flex justify-between mb-3.75'>
                        <div>
                            <label htmlFor="text"> Show: </label>
                            <select name="cars" id="cars" className='border border-[#D9D9D9] w-24.75 text-center'>
                                <option value="1">6</option>
                                <option value="2">10</option>
                                <option value="3">14</option>
                                <option value="4">20</option>
                                <option value="5">All</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Flex className="items-start">
                    <div className='w-[20%]'>
                        <ul className='pt-5 lg:pe-4.5  font-pop flex flex-col gap-4 '>
                            <li className='flex gap-10 lg:gap-0 lg:w-54.25 lg:justify-between'>Woman’s Fashion
                            </li>
                            <li className='flex lg:w-54.25 gap-17.5 lg:gap-0 lg:justify-between'>Men’s Fashion
                            </li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries &  </li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries &  </li>
                            <li>Health & Beauty</li>
                        </ul>
                        <ul className=' mt-10 myList'>
                            <h3 className='text-start font-pop'>Shop by Color</h3>
                            <li className='mt-3.75'><VscCircleFilled />Color 1</li>
                            <li className='py-4.5'><VscCircleFilled className='text-red-500' />Color 2</li>
                            <li ><VscCircleFilled className='text-green-400' />Color 3</li>
                        </ul>
                    </div>
                    <div className='w-[80%]'>
                        <div className='flex flex-wrap gap-y-5 justify-between'>
                            {
                                products.map((item) => {
                                    return (
                                        <CardSec
                                            ImgSrc={item.thumbnail}
                                            productName={item.title}
                                            price={item.price}
                                            discountPrice={Math.round((item.price-(item.price*item.discountPercentage)/100))}
                                            digit={item.reviews.length}
                                            rating={item.rating}
                                            discount={item.discountPercentage}
                                            btn='Add to cart'
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default ProductPage















