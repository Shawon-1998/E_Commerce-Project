import React from 'react'
import Flex from './Flex'

const SecHeading = ({title,heading}) => {
  return (
    <>
      <div className="container">
        <Flex className='gap-4 mb-6'>
            <div className='border-l-20 py-5 rounded-sm border-primary '/>
          <h5 className='font-semibold font-pop  text-primary'>{title}</h5>
      </Flex>
        <h2 className='font-semibold text-5xl'>{heading}</h2>
      </div>
    </>
  )
}

export default SecHeading
