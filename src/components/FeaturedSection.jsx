
import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6
    md:px-16 lg:px-24 xl:px-32'>

        <div className="w-full flex items-center justify-center space-x-2 max-w-md py-2.5 mb-10 rounded-lg font-medium 
         text-sm text-white text-center bg-gradient-to-r from-[#4ec906] to-[#A9cCFF]">
        <p>
          Get 20% OFF on Your First <span className="underline cursor-pointer">Ride!</span>
        </p>
        
      </div>

        <div>
            <Title title='Our Featured Fleet ' 
                   subTitle='Explore our top-rated vehicles selected for comfort and style.'/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {
                dummyCarData.slice(0,6).map((car)=> (
                    <div key={car._id}>
                        <CarCard car={car}/>
                        </div>
                ))
            }
        </div>

        <button onClick={() => { navigate('/cars'); scrollTo(0,0)}}
        className='flex items-center justify-center gap-2 px-6 py-2
        border border-black hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
           Discover Premium Rides <img src={assets.arrow_icon} alt="arrow" />

        </button>


    </div>
  )
}

export default FeaturedSection