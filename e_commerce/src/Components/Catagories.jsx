import React from 'react'
import SecHeading from './SecHeading'
import phone from '../assets/Category-CellPhone.svg'
import computer from '../assets/Category-Computer.svg'
import watch from '../assets/Category-SmartWatch.png'
import camera from '../assets/Category-Camera.png'
import headPhone from '../assets/Category-Headphone.png'
import gaming from '../assets/Category-Gamepad.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards'
import { CiCamera } from "react-icons/ci";



const Catagories = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", top: "-25px", right: "20px" }}
        onClick={onClick}
      />
    );
  }



  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", top: "-25px", left: "1100px" }}
        onClick={onClick}
      />
    );
  }
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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

        <div className="slider-container">
          <Slider {...settings} className='mb-15'>

            <div className=' hover:bg-primary ease-in duration-300'>
              <Cards
                imgSrc={phone}
                productName='phone'
              />
            </div>
            <div className=' hover:bg-primary ease-in duration-300'>

              <Cards
                imgSrc={computer}
                productName='Computers'
              />
            </div>
            <div className=' hover:bg-primary ease-in duration-300'>

              <Cards
                imgSrc={watch}
                productName='SmartWatch'
              />
            </div>
            <div className=' hover:bg-primary ease-in duration-300 px-14.25 py-6.25 items-center text-black'>
               <CiCamera className='text-6xl'/>
               <h3 className='font-medium mt-4 '>Camera</h3>
            
            </div>
            <div className=' hover:bg-primary ease-in duration-300'>

              <Cards
                imgSrc={headPhone}
                productName='HeadPhones'
              />
            </div>
            <div className=' hover:bg-primary ease-in duration-300'>

              <Cards
                imgSrc={gaming}
                productName='Gaming'
              />
            </div>
          </Slider>
           <div  className='border border-[#00000013]'/>
        </div>

      </div>

    </>
  )
}

export default Catagories
