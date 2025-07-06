import React, { useState } from 'react';
import axios from 'axios';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/subscribers/subscribe', { email });
      if (response.status === 201 || response.status === 200) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        setError('Subscription failed. Please try again.');
      }
    } catch (err) {
      setError('Subscription failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="text-center pb-20">
      <p className="text-2xl font-medium text-gray-800">Subscribe Now & Get 10% Off</p>
      <p className="text-gray-400 mt-3">
        Join our style circle – be the first to know about new arrivals, exclusive offers, and fashion tips tailored just for you.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:flex-1 outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">
          Subscribe
        </button>
      </form>

      {subscribed && (
        <p className="text-green-600 mt-2 text-sm">Thank you for subscribing!</p>
      )}

      {error && (
        <p className="text-red-600 mt-2 text-sm">{error}</p>
      )}
    </div>
  );
};

export default NewsLetterBox;
