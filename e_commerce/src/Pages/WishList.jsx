import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import Skeleton from '../Components/Skeleton'
import RelatedItems from '../Components/RelatedItems'
import Container from '../Components/Container'
import { useSelector } from 'react-redux'
import CardSec from '../Components/CardSec'

const WishList = () => {
  const wishData = useSelector((state) => state.Products.wish)
  const [loading, setLoading] = useState(1)
  useEffect(() => {
    setLoading(0)
  },
    [])

  return (
    <>
      <Container>
        <BreadCrumbs />
        <div className='flex flex-wrap gap-y-5'> {
          wishData.map((item,idx) => {
            return (
              <CardSec
                id={item.id}
                remove="X"
                className='bg-primary'
                // props akare puro item gula pathiye dicchi jate eita dispatch kora jay
                allProduct={item}
                key={idx}
                ImgSrc={item.thumbnail}
                productName={item.title}
                price={item.price}
                discountPrice={Math.round((item.price - (item.price * item.discountPercentage) / 100))}
                digit={item.reviews.length}
                rating={item.rating}
                discount={item.discountPercentage}
              />
            )
          })
        } </div>
        
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
