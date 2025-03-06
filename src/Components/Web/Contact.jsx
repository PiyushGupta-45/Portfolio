import React, { useState } from 'react';

const Contact = () => {
  const [contact, setContact] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setContact(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      <div className='max-w-3xl w-full text-center py-10 border-2 border-amber-700 rounded-lg shadow-lg'>
        <p className='font-medium text-3xl mb-6'>
          Enter Your Details here so that our team can contact you as soon as possible
        </p>
        <div className='flex flex-col items-center space-y-6'>
          <div className="w-full">
            <label htmlFor="name" className='block text-lg mb-2'>Enter Your Name Here:</label>
            <input className='w-full p-3 rounded-lg bg-gray-800 text-white text-lg' id='name' type="text" placeholder="Enter Here" />
          </div>
          <div className="w-full">
            <label htmlFor="contact" className='block text-lg mb-2'>Enter Your Contact Number Here:</label>
            <input
              className='w-full p-3 rounded-lg bg-gray-800 text-white text-lg'
              id='contact'
              type="text"
              inputMode='numeric'
              value={contact}
              onChange={handleContactChange}
              placeholder="Enter Here"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className='block text-lg mb-2'>Enter Your Email-id Here:</label>
            <input className='w-full p-3 rounded-lg bg-gray-800 text-white text-lg' id='email' type="text" placeholder="Enter Here" />
          </div>
          <div className="w-full">
            <button className='w-full py-3 font-semibold text-lg bg-purple-600 hover:bg-purple-700 rounded-lg transition-all text-white'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
