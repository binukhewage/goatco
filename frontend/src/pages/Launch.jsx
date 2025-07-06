import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Instagram, Facebook } from 'lucide-react';
import axios from 'axios';

const Launch = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/subscribers/subscribe', {email: email,});

      if (response.status === 201 || response.status === 200) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Main Content */}
      <div className="w-full max-w-md mx-auto text-center px-4 sm:px-6">
        {/* Logo */}
        <img 
          src={assets.glogo}
          alt="Luxury Brand" 
          className="w-20 sm:w-24 md:w-28 h-auto mx-auto mb-6 sm:mb-8"
        />
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest uppercase mb-2">
          Elevating Elegance
        </h1>
        <p className="text-sm sm:text-md tracking-wider text-gray-500 mb-6 sm:mb-8">
          Launching Soon.
        </p>
        
        {/* Divider */}
        <div className="w-12 h-px bg-black mx-auto my-4 sm:my-6"></div>
        
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
          Be the first to know about our drop dates and exclusive offers.
        </p>
        
        {/* Newsletter Form */}
        {subscribed ? (
          <div className="bg-gray-50 p-4 text-black w-full max-w-xs mx-auto mb-6 sm:mb-8 text-xs sm:text-sm">
            Thank you for subscribing!
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 text-xs sm:text-sm outline-none border border-gray-200 focus:border-black transition-all"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-4 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
            >
              Notify Me
            </button>
          </form>
        )}
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 my-6 sm:my-8">
          <a href="https://www.instagram.com/_goatco/" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://www.facebook.com/share/1AxAopvAmK/?mibextid=wwXIfr" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>      
        </div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-xxs xs:text-xs text-gray-500 tracking-widest px-2">
        © {new Date().getFullYear()} G.O.A.T. All rights reserved.
      </footer>
    </div>
  );
};

export default Launch;