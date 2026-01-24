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



const ProductPage = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(1)
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products)
                setLoading(0)
            });
    }, [])
    useEffect(() => {
        const uniqueCategory = [...new Set(products.map((item) => item.category))]
        setCategory(uniqueCategory)
    },
        [products])

    // console.log(products)

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
                            {
                                category.map((item,idx) => {
                                    return (
                                        <li key={idx} className='flex gap-10 lg:gap-0 lg:w-54.25 lg:justify-between cursor-pointer'> {item} </li>
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

export default ProductPage















