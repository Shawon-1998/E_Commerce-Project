import React from 'react'

const Cards = ({ productName, imgSrc}) => {
    return (
        <>
        <div className='px-14.25 py-6.25 text-center text-black' >
                <img src={imgSrc} alt="" className='block mx-auto' />
                <h3 className='font-medium mt-4 '>{productName}</h3>
            </div>
        </>
    )
}

export default Cards
