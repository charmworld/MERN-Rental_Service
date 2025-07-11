import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Einstein Kell',
      location: 'Denver, Colorado',
      image: assets.testimonial_image_1,
      testimonial: 'Smooth booking and top-quality cars made my trip hassle-free and enjoyable.'
    },
    {
      name: 'Jack Cami',
      location: 'Atlanta, Georgia',
      image: assets.testimonial_image_2,
      testimonial: 'Booking was quick and simple, and the car exceeded all my expectations! Loved every moment of the ride...'
    },
    {
      name: 'Luci Kevin',
      location: 'Houston, Texas',
      image: assets.testimonial_image_1,
      testimonial: 'Easy pickup, clean cars, and great value for money—highly recommend!'
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
      className="py-28 px-6 md:px-16 lg:px-24 xl:px-44 mt-5 mb-5 ml-6 mr-6 pt-20 pb-10
      bg-gradient-to-r from-[#A9CCFF] to-[#4EC906] rounded-3xl"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title
          title="Hear From Our Happy Customers"
          subTitle="Real experiences from people who choose comfort, style, and peace of mind with our rental service."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: index * 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-xl transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="text-xl font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>

            <p className="text-gray-600 italic mt-4 font-light leading-relaxed">
              “{testimonial.testimonial}”
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonial
