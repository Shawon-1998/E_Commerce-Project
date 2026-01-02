import React from 'react'
import SecHeading from './SecHeading'
import CardSec from './CardSec'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ExpOurProduct = () => {
  function SampleNextArrow(props) {
         const { onClick } = props;
         return (
             <div className='block absolute rounded-full p-3 bg-gray-100 right-5 -top-12' onClick={onClick} >
            <FaArrowRight />
             </div>
         );
     }
 
     function SamplePrevArrow(props) {
         const { onClick } = props;
         return (
             <div className='block absolute rounded-full p-3 bg-gray-100 right-17 -top-12' onClick={onClick} >
              <FaArrowLeft/>
             </div>
         );
     }


    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows:2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
           <div className="container">
                <div className='mt-37.5 mb-10'>
                    <SecHeading
                        title="Our Products"
                        heading='Explore Our Products'
                    />
                </div>

                <div className="slider-container">
                    <Slider {...settings} >
                            <CardSec
                                ImgSrc={item1}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item2}
                                productName='AK-900 Wired Keyboard'
                                price='960'
                                discountPrice='1160'
                                digit='75'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='IPS LCD Gaming Monitor'
                                price='370'
                                discountPrice='400'
                                digit='99'
                                  btn='Add to cart'
                            />
                              <CardSec
                                ImgSrc={item4}
                                productName='S-Series Comfort Chair '
                                price='375'
                                discountPrice='400'
                                digit='99'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item4}
                                productName='S-Series Comfort Chair '
                                price='375'
                                discountPrice='400'
                                digit='99'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                  btn='Add to cart'
                            />
                    </Slider>
                </div>
                <Button className='mb-15'>View All Products</Button>
                {/* <div  className='border border-[#00000013]'/> */}
           </div>
        </>
    )
}

export default ExpOurProduct
