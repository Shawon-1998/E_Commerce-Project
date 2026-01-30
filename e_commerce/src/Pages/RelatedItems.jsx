import React from 'react'
import SecHeading from '../Components/SecHeading'
import CardSec from '../Components/CardSec'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const RelatedItems= () => {
 
   const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
            <div className='container'>
                <div className='mt-37.5 mb-10 flex justify-between'>
                    <SecHeading     
                        title="Related Items"
                    />
                  
                </div>

                <div className="slider-container">
                    <Slider {...settings}>

                      
                            <CardSec
                                ImgSrc={item1}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                btn='Add to cart'
                                discount='40'
                                className=''
                        
                     />
                            <CardSec
                                ImgSrc={item2}
                                productName='AK-900 Wired Keyboard'
                                price='960'
                                discountPrice='1160'
                                digit='75'
                                btn='Add to cart'
                                discount='40'
                            />
                      
                            <CardSec
                                ImgSrc={item3}
                                productName='IPS LCD Gaming Monitor'
                                price='370'
                                discountPrice='400'
                                digit='99'
                                btn='Add to cart'
                                discount='35'
                            />
                       
                            <CardSec
                                ImgSrc={item4}
                                productName='S-Series Comfort Chair '
                                price='375'
                                discountPrice='400'
                                digit='99' 
                                btn='Add to cart'  
                                discount='30'                         />
                        
                        <div className='mb-35'>
                            <CardSec
                                ImgSrc={item3}
                                productName='HAVIT HV-G92 Gamepad'
                                price='120'
                                discountPrice='160'
                                digit='88'
                                btn='Add to cart'
                                discount='25'
                            />
                        </div>
                    </Slider>
                </div>
              
            </div>

        </>
    )
}

export default RelatedItems
