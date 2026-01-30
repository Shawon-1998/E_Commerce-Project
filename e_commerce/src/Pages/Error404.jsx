import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import Button from '../Components/Button'
import Container from '../Components/Container'

const Error404 = () => {
  return (
    <>
      <Container>
        <BreadCrumbs />
        <div className='py-35 font-inter text-center'>
          <h1 className='text-[110px] font-medium space-[3%]'>404 Not Found</h1>
          <p className='pt-10 pb-20'>Your visited page not found. You may go home page.</p>
          <Button className='font-inter'>
            Back to home page
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Error404
