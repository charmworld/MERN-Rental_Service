import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import  AppProvider  from './context/AppContext.jsx'
import { MotionConfig } from 'framer-motion' // ✅ Correct



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <AppProvider>
      <MotionConfig viewport={{once: true}}>
        <App />
      </MotionConfig>
    </AppProvider>
    </BrowserRouter>
  
)
