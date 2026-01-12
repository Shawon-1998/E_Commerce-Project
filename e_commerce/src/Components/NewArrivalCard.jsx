import React from 'react'
import { NavLink } from "react-router";
const NewArrivalCard = ({ productName, description, className, className2 }) => {
  return (
    <>
      <div className={`${className} `}>
        <h2 className='text-2xl font-semibold font-pop'>{productName}</h2>
        <p className={`${className2}`}>{description}</p>
        <NavLink className='font-pop font-medium' to="/shop" end>Shop Now</NavLink>
      </div>
      </>
  )
}

export default NewArrivalCard
