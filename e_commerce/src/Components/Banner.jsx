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
         responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
        appendDots: dots => (
      <div className='text-primary ' >
        <ul className='m-0 '> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className='bg-gray-500 lg:w-3.5 lg:h-3.5 h-2 w-2 
      rounded-full absolute bottom-9 lg:bottom-12  lg:right-46 md:right-36 xlright-26 ' />
     
    )
    };
    

    return (
        <>
                <div className="container">
                    <div className=' lg:flex gap-12.25 '>
                        <ul className='pt-10 lg:pe-4.5  font-pop flex flex-col gap-4 border-r border-[#00000028]'>
                            <li className='flex gap-10 lg:gap-0 lg:w-54.25 lg:justify-between'>Woman’s Fashion <MdOutlineKeyboardArrowRight className='text-xl'/>
                            </li>
                            <li className='flex lg:w-54.25 gap-17.5 lg:gap-0 lg:justify-between'>Men’s Fashion <MdOutlineKeyboardArrowRight className='text-xl'/>
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
                    </div>
                </div>
        </>
    )
}

export default Banner
