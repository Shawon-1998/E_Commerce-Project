import React from 'react'

import SecHeading from './SecHeading'
import phone from '../assets/Category-CellPhone.svg'
import computer from '../assets/Category-Computer.svg'
import watch from '../assets/Category-SmartWatch.png'
import headPhone from '../assets/Category-Headphone.png'
import gaming from '../assets/Category-Gamepad.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './CatagoriesCards'
import CatagoriesCards from './CatagoriesCards'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Catagories = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='block absolute cursor-pointer rounded-full p-3 lg:text-lg text-sm bg-gray-100 right-5 -top-12' onClick={onClick} >
        <FaArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='block absolute cursor-pointer rounded-full p-3 lg:text-lg text-sm bg-gray-100 right-17 -top-12' onClick={onClick} >
        <FaArrowLeft />
      </div>
    );
  }
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='container'>
        <div className='mt-37.5 mb-10'>
          <SecHeading
            title="Categories's"
            heading='Flash Browse By Category'
          />
        </div>
        {/* use custom css className cataroies  */}
        <div className="slider-container">
          <Slider {...settings} className='mb-15  '>

            <div>
              <CatagoriesCards className='catagories'
                imgSrc={phone}
                productName='phone'
              />
            </div>
            <div>
              <CatagoriesCards className='catagories'
                imgSrc={computer}
                productName='Computers'
              />
            </div>
            <div>
              <CatagoriesCards className='catagories'
                imgSrc={watch}
                productName='SmartWatch'
              />
            </div>
            <div>
              <CatagoriesCards className='catagories'
                imgSrc={headPhone}
                productName='HeadPhones'
              />
            </div>
            <div>
              <Cards className='catagories'
                imgSrc={gaming}
                productName='Gaming'
              />
            </div>
            <div>
              <CatagoriesCards className='catagories'
                imgSrc={watch}
                productName='SmartWatch'
              />
            </div>

            <div>
              <CatagoriesCards className='catagories'
                imgSrc={headPhone}
                productName='HeadPhones'
              />
            </div>
            <div>
              <CatagoriesCards className='catagories'
                imgSrc={gaming}
                productName='Gaming'
              />
            </div>
          </Slider>
          <div className='border border-[#00000013]' />
        </div>
      </div>
    </>
  )
}

export default Catagories
