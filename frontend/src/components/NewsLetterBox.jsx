import React, { useState } from 'react';
import axios from 'axios';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Use environment variables for the URL in a real project
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
      
      const response = await axios.post(`${API_URL}/api/subscribers/subscribe`, { 
        email: email.trim().toLowerCase() 
      });

      if (response.status === 201 || response.status === 200) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      }
    } catch (err) {
      // Handle specific error messages from the backend if available
      const message = err.response?.data?.message || 'Subscription failed. Please try again.';
      setError(message);
      console.error('Subscription Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center p-20 px-4">
      <p className="text-2xl font-medium text-gray-800">Subscribe Now & Get 10% Off</p>
      <p className="text-gray-400 mt-3 max-w-lg mx-auto">
        Join our style circle – be the first to know about new arrivals, exclusive offers, and fashion tips.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-0 mx-auto my-6 border"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-4 outline-none flex-1"
          required
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className={`w-full sm:w-auto bg-black text-white text-xs px-10 py-4 active:bg-gray-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>

      {/* Message Area */}
      <div className="h-6"> 
        {subscribed && (
          <p className="text-green-600 text-sm font-medium animate-fade-in">
            🎉 Thank you! Check your inbox for your discount code.
          </p>
        )}
        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default NewsLetterBox;