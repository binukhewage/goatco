import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative w-full min-h-[90vh] bg-[#ffffff] flex items-center justify-center px-6 md:px-12 py-20'>
      
      {/* Background Subtle Text Line */}
      <div className='absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none'>
        <h2 className='text-[20vw] font-bold uppercase tracking-tighter'>
          goatcult 
        </h2>
      </div>

      <div className='max-w-7xl w-full grid grid-cols-12 gap-4 items-center'>
        
        {/* Left Column: Text Content */}
        <div className='col-span-12 lg:col-span-5 z-20 order-2 lg:order-1'>
          <div className='space-y-8'>
            <div className='inline-flex flex-col'>
               <span className='text-[10px] tracking-[0.5em] uppercase text-stone-400 mb-2'>Handcrafted in Sri Lanka</span>
               <h1 className='text-6xl md:text-8xl font-medium tracking-tight text-[#121212] leading-[0.9]'>
                Quiet <br />
                <span className='font-light italic text-stone-400'>Luxury.</span>
              </h1>
            </div>

            <p className='text-stone-500 text-sm md:text-base max-w-sm leading-relaxed font-light'>
              Experience the pinnacle of garment engineering. Our 2025 drop focuses on ultra-fine Merino wool and structural minimalism.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 pt-4'>
              <Link 
                to="/products" 
                className='bg-[#121212] text-white px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-stone-800 transition-colors duration-500 text-center'
              >
                Shop The Drop
              </Link>
              <Link 
                to="/collection" 
                className='border border-stone-200 px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-stone-50 transition-colors duration-500 text-center'
              >
                Lookbook
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fashion Asymmetric Image Grid */}
        <div className='col-span-12 lg:col-span-7 relative order-1 lg:order-2 mb-12 lg:mb-0'>
          <div className='relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-square overflow-hidden bg-stone-100'>
            <img 
              src={assets.fein} 
              alt="Model wearing premium essentials" 
              className='w-full h-full object-cover object-top scale-110'
            />
            {/* Overlay Gradient for Depth */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
          </div>
          
          {/* Floating 'Quality' Badge */}
          <div className='absolute -bottom-6 -left-6 md:-left-12 bg-white p-8 hidden md:block shadow-sm border border-stone-100'>
            <p className='text-[9px] tracking-[0.4em] uppercase text-stone-400 mb-1'>Material Detail</p>
            <p className='text-xs font-medium uppercase'>100% Organic Silk-Cotton Blend</p>
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default Hero;