import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { VscCircleFilled } from "react-icons/vsc";
import CardSec from '../Components/CardSec';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProduct(data.products));
    }, [])

    console.log(product)

    return (
        <>
            <Container>
                
               <li className='list-none flex gap-2 mt-20 mb-12.5 text-[#00000080]'><p>Home</p>/<p>Shop</p></li>

                <div className='flex justify-between mb-7.5'>
                    <h3 className='text-start font-pop'>Shop by Category</h3>
                    <div>
                        <label htmlFor="text"> Show: </label>
                        <select name="cars" id="cars" className='border border-[#D9D9D9] w-24.75 text-center'>
                            <option value="volvo">6</option>
                            <option value="saab">10</option>
                            <option value="mercedes">14</option>
                            <option value="audi">20</option>
                            <option value="audi">All</option>
                        </select>
                    </div>
                </div>
                <div className=' lg:flex  gap-12.25  '>
                    <div>
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
                    <div className='flex flex-wrap justify-between'>
                        {
                            product.map((item) => {
                                return (
                                    <CardSec
                                        ImgSrc={item.images}
                                        productName={item.Essence}
                                        price={item.price}
                                        discountPrice='1160'
                                        digit='75'
                                        discount={item.discountPercentage}
                                        btn='Add to cart'
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            </Container>
        </>
    )
}

export default ProductPage
