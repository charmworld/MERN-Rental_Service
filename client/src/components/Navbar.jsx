import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';


const Navbar = () => {
 
  const { setShowLogin, user, logout, isOwner, axios, setIsOwner } = useAppContext();


  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const changeRole = async ()=>{
    try {
      const {data} = await axios.post('/api/owner/change-role')
      if (data.success) {
        setIsOwner(true)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
       
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="bg-gradient-to-r from-[#A9CCFF] to-[#4EC906] w-full">
      <div
        className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
        text-gray-600 border-b border-borderColor relative transition-all`}
      >
        {/* Logo */}
        <Link to="/">
          <img src={assets.mylogoo} alt="logo" className="h-6" />
        </Link>

        {/* Navigation Links */}
        <div
          className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 
          max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row 
          items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all 
          duration-300 z-50   
          ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}
        >
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:underline text-sm"
              onClick={() => setOpen(false)} // Close on mobile click
            >
              {link.name}
            </Link>
          ))}

          {/* Search Bar */}
          <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56 bg-white">
            <input
              type="text"
              id="navbarSearch"
              name="navbarSearch"
              autoComplete="off"
              placeholder="Search cars"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            />
            <img src={assets.search_icon} alt="search" />
          </div>

          {/* Buttons */}
          <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
            <button
              onClick={() => isOwner ? navigate('/owner') : changeRole()}
          
              className="cursor-pointer"
            >
              {isOwner ? 'Dashboard' : 'List cars' }
            </button>
            <button
              onClick={() => {
                if (user) {
                   logout();
                    } else {
                     setShowLogin(true);
                     setOpen(false);
                    }
                  }}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-black transition-all text-white rounded-lg"
            >
             {user ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden cursor-pointer"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
