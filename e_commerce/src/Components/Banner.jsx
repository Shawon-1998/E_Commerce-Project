import React from 'react'
import Flex from './Flex'
import banner from '../assets/banner.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
      <div
        style={{
        color:"#DB4444"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className='bg-gray-500 w-3.5 h-3.5 rounded-full' >
       
      </div>
    )
    };

    return (
        <>
                <div className="container">
                    <Flex className=' gap-12.25 '>
                        <ul className='pt-10 pe-4.5  font-pop flex flex-col gap-4 border-r border-[#00000028]'>
                            <li className='flex  w-54.25 justify-between'>Woman’s Fashion <MdOutlineKeyboardArrowRight className='text-xl'/>
                            </li>
                            <li className='flex w-54.25 justify-between'>Men’s Fashion <MdOutlineKeyboardArrowRight className='text-xl'/>
                            </li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries &  </li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries &  </li>
                            <li>Health & Beauty</li>
                        </ul>
                     <div className='w-full pt-10'>
                           <Slider {...settings} >
                            <div>
                            <img src={banner} alt="" />
                            </div>
                            <div> 
                                  <img src={banner} alt="" />
                            </div>
                            <div> 
                                  <img src={banner} alt="" />
                            </div>
                            <div> 
                                  <img src={banner} alt="" />
                            </div>
                            <div> 
                                  <img src={banner} alt="" />
                            </div>
                        </Slider>
                     </div>
                    </Flex>
                </div>
        </>
    )
}

export default Banner
