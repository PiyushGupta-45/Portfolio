import React, { useState } from 'react';

const Contact = () => {
  const [contact, setContact] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setContact(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <div className='max-w-2xl w-full text-center py-10 px-8 border border-gray-700 rounded-2xl shadow-xl bg-gray-800'>
        <p className='font-semibold text-3xl mb-6 text-purple-400'>
          Let's Get in Touch!
        </p>
        <p className='text-gray-300 mb-8'>
          Enter your details below, and our team will contact you as soon as possible.
        </p>
        <div className='flex flex-col items-center space-y-6'>
          <div className="w-full">
            <label htmlFor="name" className='block text-lg mb-2 text-gray-200'>Enter Your Name:</label>
            <input className='w-full p-3 rounded-lg bg-gray-700 text-white text-lg outline-none focus:ring-2 focus:ring-purple-500' id='name' type="text" placeholder="Enter Here" />
          </div>
          <div className="w-full">
            <label htmlFor="contact" className='block text-lg mb-2 text-gray-200'>Enter Your Contact Number:</label>
            <input
              className='w-full p-3 rounded-lg bg-gray-700 text-white text-lg outline-none focus:ring-2 focus:ring-purple-500'
              id='contact'
              type="text"
              inputMode='numeric'
              value={contact}
              onChange={handleContactChange}
              placeholder="Enter Here"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className='block text-lg mb-2 text-gray-200'>Enter Your Email:</label>
            <input className='w-full p-3 rounded-lg bg-gray-700 text-white text-lg outline-none focus:ring-2 focus:ring-purple-500' id='email' type="text" placeholder="Enter Here" />
          </div>
          <div className="w-full">
            <button className='w-full py-3 font-semibold text-lg bg-purple-600 hover:bg-purple-700 rounded-lg transition-all text-white shadow-md'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
