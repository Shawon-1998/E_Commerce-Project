import React from 'react'

const CatagoriesCards = ({ productName, imgSrc,className,details,productDetails}) => {
    return (
        <>
        <div className={`px-14.25 py-6.25 items-center text-center mx-auto text-black ${className}`} >
                <img src={imgSrc} alt="" className='block mx-auto' />
                <h3 className='font-medium mt-4 '>{productName}</h3>
                <h3 className='font-semibold mt-4 text-lg font-pop '>{productDetails}</h3>
                <p className="text-sm font-pop pt-2">{details}</p>
            </div>
        </>
    )
}

export default CatagoriesCards
