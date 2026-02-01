import React from 'react'

const Button = ({children,className}) => {
  return (
    <div>
      <button className={`${className} text-white font-medium font-pop py-2 px-6 lg:py-4 lg:px-12 cursor-pointer bg-primary rounded-sm`}>{children}</button>
    </div>
  )
}

export default Button
