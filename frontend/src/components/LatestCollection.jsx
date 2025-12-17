import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        if (products && products.length > 0) {
            // High-end collections feel more exclusive with fewer, better-presented items
            setLatestProducts(products.slice(0, 6))
        }
    }, [products]) 

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                
                {/* Section Header: Minimalist & Clean */}
                <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
                    <div className='max-w-xl'>
                        <div className='flex items-center gap-2 mb-4'>
                            <span className='w-8 h-[1px] bg-stone-300'></span>
                            <p className='text-[10px] tracking-[0.4em] uppercase text-stone-400 font-medium'>
                                New Season 2025
                            </p>
                        </div>
                        <h2 className='text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight'>
                            Curated <span className='italic font-serif text-stone-400'>Arrivals</span>
                        </h2>
                    </div>
                    
                    <Link 
                        to='/products' 
                        className='group relative py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-800 self-start'
                    >
                        View All Pieces
                        <span className='absolute bottom-0 left-0 w-full h-[1px] bg-stone-800 transition-transform duration-500 transform scale-x-100 group-hover:scale-x-0 origin-right'></span>
                        <span className='absolute bottom-0 left-0 w-full h-[1px] bg-stone-800 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left'></span>
                    </Link>
                </div>
                
                {/* Modern Editorial Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-20'>
                    {latestProducts.map((item, index) => (
                        <div 
                            key={item._id} 
                            className={`transition-all duration-700 ${
                                // Adds a slight staggered vertical offset to the middle column for an editorial feel
                                index === 1 || index === 4 ? 'md:translate-y-12' : ''
                            }`}
                        >
                            <ProductItem 
                                id={item._id} 
                                image={item.image} 
                                name={item.name} 
                                price={item.price}
                                // Note: Ensure ProductItem handles internal styling, 
                                // or wrap it in a div that controls the aspect ratio
                            />
                        </div>
                    ))}
                </div>

                {/* Subtle Branding Bottom Accent */}
                <div className='mt-32 flex flex-col items-center'>
                    <div className='w-[1px] h-20 bg-gradient-to-b from-stone-200 to-transparent'></div>
                </div>
            </div>
        </section>
    )
}

export default LatestCollection;