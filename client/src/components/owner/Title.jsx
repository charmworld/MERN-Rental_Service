
import React from 'react'

const Title = ({ title, subTitle}) => {
  return (
    
    <div className="bg-[#A9CCFF] p-6 rounded-xl text-black  shadow-md">
    <h1 className='font-medium text-3xl'>{title}</h1>
    <p className='text-sm md:text-base text-black-500/90 mt-2 max-w-156'>{subTitle}</p>
    </div>
  )
}

export default Title