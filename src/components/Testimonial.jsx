
import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

    const testimonials = [
        {  
            name: "Einstein kell",
            location: "Denver, Colorado", 
            image: assets.testimonial_image_1,
            testimonial: "Smooth booking and top-quality cars made my trip hassle-free and enjoyable." 
        },
        {  
            name: "Jack kell",
            location: "Atlanta, Georgia", 
            image: assets.testimonial_image_2,
            testimonial: "Booking was quick and simple, and the car exceeded all my expectations! Loved every moment of the ride..."
        },
        {  
            name: "Luci kevin",
            location: "Houston, Texas", 
            image: assets.testimonial_image_1,
            testimonial: "Easy pickup, clean cars, and great value for money—highly recommend!" 
        },


    ];



  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
        <Title title="Hear From Our Happy Customers"
             subTitle="Real experiences from people who chose comfort, style, and peace of mind with our rental service."/>


            <div className="grid grid-cols-1 sm:grid-cols-2 
                            lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg
                    hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} 
                            alt={testimonial.name} />

                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon}
                                alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial