
import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const NavbarOwner = () => {

    const {user} = useAppContext
  return (
    <div className='flex items-center justify-between px-6
    md:px-10 py-4 text-gray-500 border-b border-borderColor
    bg-gradient-to-r from-[#4EC906] to-[#A9CCFF]
    relative transition-all'>
        <Link to='/'>
        <img src={assets.mylogoo} alt="Logo" className="h-7"/>        
        </Link>
        <p>Welcome, {user?.name || "owner"}</p>

    </div>
  )
}

export default NavbarOwner