
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <div className='bg-gradient-to-r from-[#4ec906] to-[#A9CCFF] px-6 md:px-16 lg:px-24 xl:px-32 mt-5  pt-10 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6
            border-borderColor border-b'>
                <div >
                    <img src={assets.mylogoo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-8- mt-3'>
                        Rent luxury and budget-friendly cars online with confidence. <br/>
                        Enjoy secure booking, verified drivers,  <br/>
                        and a fleet ready for every trip—business or leisure.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"> <img src={assets.facebook_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.instagram_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.twitter_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.gmail_logo} className='w-5 h-5' alt="" /> </a>
                        
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Company</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore Cars</a></li>
                        <li><a href="#">Host a Vehicle</a></li>
                        <li><a href="#">Insights</a></li>
                        <li><a href="#">Our Network</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>457 Holmes Drive</li>
                        <li>Los Angeles, CA 90028 </li>
                        <li>+1 468 9343333</li>
                        <li>st@urbantravel.com</li>
                    </ul>
                </div>

                

              {/* Bottom */} 
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Adepu Travel. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a>  </li>
                    <li> | </li>
                    <li><a href="#">Terms</a>  </li>
                    <li> | </li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer