
import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
      
    <div className='flex flex-col md:flex-row md:items-start items-center
    justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#4ec906] to-[#A9cCFF] 
    max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Own a fancy set of wheels?</h2>
            <p className='mt-2'>Its easy: park less, earn more. List your ride today!</p>
            <p className='max-w-130'>Sit back and profit—insurance, verified drivers, 
                and secure payments are on us.</p>

            <button className='px-6 py-2 bg-black hover:bg-slate-100 transition-all
            text-primary rounded-lg text-sm mt-4 cursor-pointer'>Get listed... Start Earning...</button>
        </div>

        <img src={assets.banner_car_image} alt="car" className='max-h-45 mt-10' />
        

    </div>
  )
}

export default Banner