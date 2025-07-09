
import React, { useEffect } from 'react'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import NavbarOwner from '../../components/owner/NavbarOwner'
import { useAppContext } from '../../context/AppContext'


const Layout = () => {

  const {isOwner} = useAppContext();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  },[isOwner])

  return (
    <div className='flex flex-col'>
        <NavbarOwner />
        <div className='flex'>
            <Sidebar/>
            <Outlet />
        </div>

    </div>
  )
}

export default Layout;