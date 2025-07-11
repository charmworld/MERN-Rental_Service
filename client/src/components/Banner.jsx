import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col md:flex-row md:items-start items-center
      justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#4ec906] to-[#A9cCFF] 
      max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden"
    >

      {/* Left Text Block */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="text-white"
      >
        <h2 className="text-3xl font-semibold">Own a fancy set of wheels?</h2>
        <p className="mt-2">It's easy: park less, earn more. List your ride today!</p>
        <p className="max-w-130">Sit back and profit—insurance, verified drivers, and secure payments are on us.</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 mt-4 bg-black hover:bg-slate-100 transition-all
          text-primary rounded-lg text-sm font-medium cursor-pointer shadow-md"
        >
          Get listed... Start Earning...
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src={assets.banner_car_image}
        alt="car"
        className="max-h-45 mt-10"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.6 }}
      />

    </motion.div>
  )
}

export default Banner
