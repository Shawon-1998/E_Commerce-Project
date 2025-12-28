import React from 'react'

const Button = ({children,className}) => {
  return (
    <div>
      <button className={`${className}text-white font-medium font-pop py-4 px-12 cursor-pointer bg-primary rounded-sm block mx-auto mt-9.25 mb-15`}>{children}</button>
    </div>
  )
}

export default Button
