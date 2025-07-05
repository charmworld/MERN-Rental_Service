

import React, { useState} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import CarDetails from './pages/CarDetails';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Navbar from './components/Navbar';
import Bookings from './pages/Bookings';
import Footer from './components/Footer';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App