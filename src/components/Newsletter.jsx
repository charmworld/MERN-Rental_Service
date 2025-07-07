import React from 'react'

const Newsletter = () => {
  return (
    <div className="px-2 md:px-2"> {/* Outer container handles spacing */}
      <div className="max-w-5xl mx-auto bg-[#A9CCFF] rounded-2xl shadow-lg 
      border border-gray-200 py-16 px-20 md:py-20 md:px-24 text-center">
        
        <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
        
        <p className="md:text-lg text-gray-700 pb-6">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts
        </p>
        
        <form className="flex items-center justify-between gap-x-4 max-w-2xl w-full h-12 mx-auto">
          <input
            
            className="border border-black h-full rounded-md px-3 text-gray-600 w-full"

            type="email"
            id="email"             
            name="email"           
            autoComplete="email" 
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="h-full px-6 text-white bg-primary hover:bg-primary-dull transition-all rounded-md border border-black"

            
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
