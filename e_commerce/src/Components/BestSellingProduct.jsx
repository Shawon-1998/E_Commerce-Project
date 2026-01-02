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
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const BestSellingProduct = () => {
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
        
     infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
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
                        title="This Month"
                        heading='Best Selling Products Sales'
                    />
                </div>

                <div className="slider-container">
                    <Slider {...settings}>

                        <div>
                            <CardSec
                                ImgSrc={item1}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                            />
                        </div>
                        <div>
                            <CardSec
                                ImgSrc={item2}
                                productName='AK-900 Wired Keyboard'
                                price='960'
                                discountPrice='1160'
                                digit='75'
                            />
                        </div>
                        <div>
                            <CardSec
                                ImgSrc={item3}
                                productName='IPS LCD Gaming Monitor'
                                price='370'
                                discountPrice='400'
                                digit='99'
                            />
                        </div>
                        <div>
                            <CardSec
                                ImgSrc={item4}
                                productName='S-Series Comfort Chair '
                                price='375'
                                discountPrice='400'
                                digit='99'
                            />
                        </div>
                        <div className='mb-35'>
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                            />
                        </div>
                    </Slider>
                </div>
              
            </div>

        </>
    )
}

export default BestSellingProduct
