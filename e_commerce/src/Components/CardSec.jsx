import React from 'react'
import { Rate } from 'antd';
import Flex from './Flex'
import { IoHeartOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { cartData, removeWishReducer, wishList } from '../slices/ProductSlice';
import { Bounce, toast } from 'react-toastify';


const CardSec = ({ productName, ImgSrc, price, rating, discountPrice, digit, discount, className, id, cart,remove,className1 }) => {
    
    const wishProducts = useSelector((state) => state.Products.wish)
    const cartProducts = useSelector((state) => state.Products.cart)

     const notify = () =>toast.success('Successfully added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const handleProductDetails = () => {
        navigate(`/Details/${id}`)
    }
    const handleCart = () => {
         cartProducts.find((findItem) => (findItem.id== id)) ? 
         dispatch(!cartData(cart)) : dispatch(cartData(cart)) 
        notify()
    }
    const handleWish = () => {
       wishProducts.find((findItem) => (findItem.id== id)) ? 
       dispatch(!wishList(cart)) : dispatch(wishList(cart))
       notify()
    }
     const handleRemove=()=>{
         dispatch(removeWishReducer(id))
     }

    return (
        <>
         <div>
            
         </div>
            <div className='w-67.5 mx-auto group relative'>
                <div className='relative overflow-hidden'>
                    <img src={ImgSrc} alt="" className='w-full cursor-pointer' onClick={handleProductDetails} />
                    <div className=' '>
                        <h3 className={`bg-primary px-3 py-1 text-[#fafafac0] 
                        absolute left-3 top-3 rounded-sm ${className1} block`}>-{discount}%</h3>
                        <div className='flex flex-col gap-2 absolute top-3 right-3 '>
                            <IoHeartOutline className='bg-white rounded-full  h-6 w-6 text-lg cursor-pointer' onClick={handleWish} />
                            <LuEye className='bg-white rounded-full  h-6 w-6 
                             text-lg ' />
                        </div>
                    </div>
                    <button onClick={handleCart} className='absolute bg-black text-white block w-full py-2 px-21.75 font-pop cursor-pointer -bottom-10 group-hover:bottom-0 ease-linear duration-400'> Add to cart</button>
                </div>
                 <span className={`${className} w-4 h-4 text-xs  text-white absolute top-0 -left-5 rounded-full items-center flex justify-center cursor-pointer`} onClick={handleRemove}>{remove}</span>
                <h3 className='font-medium mt-4 '>{productName}</h3>
                <Flex className='my-2 gap-3'>
                    <p className='text-primary '>${discountPrice}</p>
                    <p >${price}</p>
                </Flex>
                <Flex className=' gap-2'>
                    <Rate allowHalf defaultValue={rating} />
                    <p>({digit})</p>
                </Flex>
            </div>
        </>
    )
}

export default CardSec
