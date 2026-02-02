import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import Skeleton from '../Components/Skeleton'
import RelatedItems from '../Components/RelatedItems'
import { useSelector } from 'react-redux'
import Container from '../Components/Container'



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
