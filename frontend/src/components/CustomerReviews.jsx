import React from 'react';
import Title from './Title';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Shehara Madurawala',
      rating: 5,
      comment: 'The quality exceeded my expectations. The pieces I purchased have become my day to day fav. Absolutely stunning craftsmanship!',
    },
    {
      id: 2,
      name: 'Binuk Hewage',
      rating: 4,
      comment: 'Iconic designs that blend modern aesthetics with functionality. The delivery was prompt and packaging was eco-friendly.',
    },
    {
      id: 3,
      name: 'Ruhini Hettiarachchi',
      rating: 5,
      comment: 'The customer service was exceptional - they helped me choose the perfect items for my space. Great Product.',
    }
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        
        <div className='text-center mb-12 text-3xl'>
          <Title text1={'WHAT OUR'} text2={'CUSTOMERS SAY'}/>
          <p className='w-full sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2'>
            Hear from those who have experienced our products and service firsthand.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {reviews.map((review) => (
            <div 
              key={review.id}
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  {/* Initials Avatar */}
                  <div className='h-10 w-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold'>
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 leading-tight'>{review.name}</h4>
                    <div className='flex mt-1'>{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className='text-gray-600 italic text-sm leading-relaxed'>"{review.comment}"</p>
              </div>

              <div className='mt-6 pt-4 border-t border-gray-50 flex items-center justify-between'>
                <span className='text-[10px] uppercase tracking-widest text-gray-400 font-bold'>Verified Purchase</span>
                <span className='text-green-500'>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;