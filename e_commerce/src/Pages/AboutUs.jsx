import React from 'react'
import Container from '../Components/Container'
import BreadCrumbs from '../Components/BreadCrumbs';
import imgSrc from '../assets/SideImage.png'
import Flex from '../Components/Flex';
import CatagoriesCards from '../Components/CatagoriesCards';
import Delivery from '../Components/Delivery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
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
      <div className='bg-gray-500 lg:w-3.5 lg:h-3.5 h-2 w-2 rounded-full absolute bottom-9 lg:bottom-0  lg:right-46 md:right-36 right-26  ' />
     
    )
    };
    
    return (
        <>
            <Container>
                <BreadCrumbs />
                <section>
                <Flex className='gap-18.75'>
                <div className='w-126.25'>
                    <h1 className='text-[54px] font-semibold font-inter'>
                        Our Story
                    </h1>
                    <p className='pt-10 pb-6 font-pop'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='font-pop'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div>
                    <img src={imgSrc} alt="" />
                </div>
                </Flex>        
                </section>

                 <CatagoriesCards />
                 <section>
                       <div className='w-full pt-10'>
                           <Slider {...settings} className='Banner '>
                            
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                            <div>
                            <img src={imgSrc} alt="" />
                            </div>
                       
                          
                           
                        </Slider>
                     </div>
                 </section>
                 <Delivery />
            </Container>
        </>
    )
}

export default AboutUs
