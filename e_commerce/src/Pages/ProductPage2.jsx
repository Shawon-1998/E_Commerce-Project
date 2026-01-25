import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { VscCircleFilled } from "react-icons/vsc";
import CardSec from '../Components/CardSec';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flex from '../Components/Flex';
import BreadCrumbs from '../Components/BreadCrumbs';
import Paginate from '../Components/Paginate';
import Skeleton from '../Components/Skeleton';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { allProducts } from '../slices/ProductSlice';

const ProductPage2 = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(1)
    const [category, setCategory] = useState([])
    const dispatch =useDispatch()

    async function data() {
        await axios.get('https://dummyjson.com/products')
            .then((res) => {
                // console.log(res.data.products)
                setProducts(res.data.products)
                setLoading(0)
                dispatch(allProducts(res.data.products))
            })
    }

    useEffect(() => {
        data()
    },
        [])
    useEffect(() => {
        const uniqueCateg = [...new Set(products.map((item) => item.category))]
        setCategory(uniqueCateg)
    },
        [products])

    const handleFilter = (item) => {
        const filterProduct = products.filter((filterItem) => {
            return (
                filterItem.category === item
            )
        })
        setProducts(filterProduct)
    }

    return (
        <>
            <Container>
                <BreadCrumbs className='pt-20 pb-12.5' />

                <div className='flex justify-between'>
                    <h3 className='font-pop text-xl font-bold text-[#262626]'>Shop by Category</h3>
                    <div className='flex justify-between mb-3.75'>
                        <div>
                            <label htmlFor="text"> Show: </label>
                            <select name="item" id="item" className='border cursor-pointer border-[#D9D9D9] w-24.75 text-center'>
                                <option value="1">6</option>
                                <option value="2">12</option>
                                <option value="3">18</option>
                                <option value="4">24</option>
                                <option value="5">All</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Flex className="items-start">
                    <div className='w-[20%]'>
                        <ul className='pt-5 lg:pe-4.5  font-pop flex flex-col gap-4 '>
                            {
                                category.map((item, idx) => {
                                    return (
                                        <li key={idx} onClick={() => { handleFilter(item) }} className='flex gap-10 lg:gap-0 lg:w-54.25 lg:justify-between cursor-pointer'> {item} </li>
                                    )
                                })
                            }

                        </ul>
                        <ul className=' mt-10 myList'>
                            <h3 className='text-start font-pop'>Shop by Color</h3>
                            <li className='mt-3.75'><VscCircleFilled />Color 1</li>
                            <li className='py-4.5'><VscCircleFilled className='text-red-500' />Color 2</li>
                            <li ><VscCircleFilled className='text-green-400' />Color 3</li>
                        </ul>
                    </div>
                    <div className='w-[80%]'>
                        <div className='flex flex-wrap gap-5 justify-between relative'>
                            {/* {
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
                            } */}

                            {
                                !loading ? <Paginate itemsPerPage={6} product={products} /> :
                                    <>
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                    </>
                            }
                        </div>
                    </div>
                </Flex>
            </Container >
        </>
    )
}

export default ProductPage2















