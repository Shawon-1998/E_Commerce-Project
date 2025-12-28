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


const BestSellingProduct = () => {
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",top:"-25px",right:"20px"}}
      onClick={onClick}
    />
  );
}



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
     className={className}
      style={{ ...style, display: "block", background: "gray",top:"-25px",left:"1100px"}}
      onClick={onClick}
    />
  );
}


    const settings = {
      
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
 
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
