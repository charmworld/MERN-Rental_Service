

import React, { useState} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import CarDetails from './pages/CarDetails';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Navbar from './components/Navbar';
import Bookings from './pages/Bookings';
import Footer from './components/Footer';

import Layout from './pages/owner/Layout';
import Dashboard from './pages/owner/Dashboard';
import ManageBookings from './pages/owner/ManageBookings';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';


const App = () => {

  const {showLogin} = useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    <Toaster/>

       {showLogin && <Login />}
      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<Bookings/>}/>

        <Route path='/owner' element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path="add-car" element={<AddCar/>}/>
        <Route path="manage-cars" element={<ManageCars />}/>
        <Route path="manage-bookings" element={<ManageBookings/>}/>

        
        </Route>



      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App