import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const FeaturedSection = () => {
  const navigate = useNavigate()
  const { cars } = useAppContext()

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      {/* Promo Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center space-x-2 max-w-md py-2.5 mb-10 rounded-lg font-medium 
        text-sm text-white text-center bg-gradient-to-r from-[#4ec906] to-[#A9cCFF]"
      >
        <p>
          Get 20% OFF on Your First <span className="underline cursor-pointer">Ride!</span>
        </p>
      </motion.div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title
          title="Our Featured Fleet"
          subTitle="Explore our top-rated vehicles selected for comfort and style."
        />
      </motion.div>

      {/* Car Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full'>
        {cars.slice(0, 6).map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigate('/cars')
          scrollTo(0, 0)
        }}
        className="flex items-center justify-center gap-3 px-10 py-5 rounded-xl cursor-pointer mt-16
         text-white text-xl font-bold bg-gradient-to-r from-[#A9CCFF] to-[#4EC906]
          shadow-[0_0_15px_#A9CCFF] hover:shadow-[0_0_25px_#4EC906] transition-all duration-300"
      >
        Discover Premium Rides
        <motion.img
          src={assets.arrow_icon}
          alt="arrow"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.button>





    </div>
  )
}

export default FeaturedSection;
