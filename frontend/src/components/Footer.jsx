import React from 'react'
import { assets } from '../assets/assets'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 mt-20'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            
            {/* Brand Section */}
            <div>
                <img src={assets.logo} alt="GOAT Logo" className='mb-5 w-32 md:w-40' />
                <p className='w-full md:w-4/5 text-gray-600 leading-relaxed'>
                    G.O.A.T is more than just a streetwear brand — it’s a tribute to legends. 
                    Our designs celebrate the icons who’ve shaped music, sports, art, and culture. 
                    Every piece is a wearable statement of greatness.
                </p>
            </div>

            {/* Navigation Section */}
            <div>
                <p className='text-lg font-bold mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <Link to="/" className='hover:text-black transition-colors'>Home</Link>
                    <Link to="/contact" className='hover:text-black transition-colors'>Contact Us</Link>
                    <Link to="/delivery" className='hover:text-black transition-colors'>Delivery</Link>
                    <Link to="/privacy" className='hover:text-black transition-colors'>Privacy Policy</Link>
                    <Link to="/size-chart" className='hover:text-black transition-colors'>Size Charts</Link>
                </ul>
            </div>

            {/* Contact Section */}
            <div>
                <p className='text-lg font-bold mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-3 text-gray-600'>
                    <li className='flex items-center gap-3'>
                        <Phone className='w-4 text-black'/>
                        <a href="tel:+94775102585" className='hover:underline'>+94 77 510 2585</a>
                    </li>
                    <li className='flex items-center gap-3'>
                        <Mail className='w-4 text-black'/>
                        <a href="mailto:goatco.2024@gmail.com" className='hover:underline'>goatco.2024@gmail.com</a>
                    </li>
                    <li className='flex items-center gap-3'>
                        <MapPin className='w-4 text-black'/>
                        <span>Colombo, Sri Lanka</span>
                    </li>
                </ul>

                {/* Social Media Links */}
                <div className='flex gap-5 pt-8'>
                    <a 
                        href="https://www.instagram.com/_goatco" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Visit our Instagram"
                        className='text-gray-600 hover:text-pink-600 transition-colors'
                    >
                        <Instagram className='w-6'/>
                    </a>
                    <a 
                        href="https://www.facebook.com/share/..." 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Visit our Facebook"
                        className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                        <Facebook className='w-6'/>
                    </a>
                </div>
            </div>

        </div>

        {/* Copyright Section */}
        <div className='border-t border-gray-100'>
            <p className='py-6 text-xs sm:text-sm text-center text-gray-500'>
                Copyright 2025 © goatco.com - All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer