import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const { pickupDate, setPickupDate, returnDate, setReturnDate } = useAppContext();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/cars?pickupLocation=${pickupLocation}&pickupDate=${pickupDate}&returnDate=${returnDate}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center"
    >


      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <span className="text-black">Experience </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9CCFF] to-[#4EC906]">
          Luxury
        </span>{' '}
        <span className="text-black">on Wheels</span>
      </motion.h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-start md:items-center justify-between 
        p-6 rounded-lg md:rounded-full w-full max-w-2xl md:bg-gradient-to-r md:from-[#4EC906] md:to-[#A9CCFF]
        bg-white border border-black shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
          {/* Location */}
          <div>
            <select
              id="pickup-location"
              name="pickupLocation"
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation || 'Select location'}
            </p>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pick up date</label>
            <input
              type="date"
              id="pickup-date"
              name="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return date</label>
            <input
              type="date"
              id="return-date"
              name="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={pickupDate || new Date().toISOString().split('T')[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={!pickupLocation || !pickupDate || !returnDate}
          className={`flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 text-white rounded-full cursor-pointer
            ${!pickupLocation || !pickupDate || !returnDate
              ? 'bg-white cursor-not-allowed'
              : 'bg-primary hover:bg-primary-dull'}`}
        >
          <img src={assets.search_icon} alt="search" className="brightness-100" />
        </button>
      </form>

      {/* Animated Car Image */}
      <motion.img
        src={assets.main_car}
        alt="car"
        className="max-h-72"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default Hero;
