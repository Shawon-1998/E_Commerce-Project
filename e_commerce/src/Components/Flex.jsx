import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={` flex ${className} items-center`}>
      {children}
    </div>
  )
}

export default Flex
