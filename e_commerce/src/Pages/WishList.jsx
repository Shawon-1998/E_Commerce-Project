import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import Skeleton from '../Components/Skeleton'
import RelatedItems from '../Components/RelatedItems'
import { useSelector } from 'react-redux'
import Container from '../Components/Container'
import CardSec from '../Components/CardSec'



const WishList = () => {
  
  const all = useSelector((state) => state.Products.value)
  
  console.log(all)

     const [loading, setLoading] = useState(1)

     useEffect(()=>{
        setLoading(0)
     },
     [])

  return (
    <>
     <Container>
          <BreadCrumbs/>
         <div>{
          all.map((item)=>{
           return(
              <CardSec
              
              // props akare puro item gula pathiye dicchi jate ieta dispatch kora jay
              cart={item} 
              key={item.id}
              ImgSrc={item.thumbnail}
              productName={item.title}
              price={item.price}
              discountPrice={Math.round((item.price - (item.price * item.discountPercentage) / 100))}              
              rating={item.rating}
              discount={item.discountPercentage}
            />
           )
          })
          }</div>
       {
          !loading ? <div> <RelatedItems /> </div> :
            <div className='flex justify-between'>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
        }
    </Container>
    </>
  )
}

export default WishList
