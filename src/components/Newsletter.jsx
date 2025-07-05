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
        
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 mx-auto">
          <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full 
            rounded-r-none px-3 text-gray-600"
            type="text"
            placeholder="Enter your email id"
            required
          />
          <button
            type="submit"
            className="md:px-10 px-6 h-full text-white bg-primary hover:bg-primary-dull 
            transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
