import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "contact" ? value.replace(/\D/g, '') : value;

    // Clear message when user starts editing
    setMessage('');
    setIsError(false);

    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://email-builder-1-qs1o.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('✅ Your message has been sent successfully!');
        setIsError(false);
        setFormData({ name: '', contact: '', email: '' });
      } else {
        setMessage('❌ Failed to send. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Server error. Is the backend running?');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <div className='max-w-2xl w-full text-center py-10 px-8 border border-gray-700 rounded-2xl shadow-xl bg-gray-800'>
        <p className='font-semibold text-3xl mb-6 text-violet-500'>
          Let's Get in Touch!
        </p>
        <p className='text-gray-300 mb-8'>
          Enter your details below, I will contact you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-6'>
          <div className="w-full">
            <label htmlFor="name" className='block text-lg mb-2 text-gray-200'>Enter Your Name:</label>
            <input
              id='name'
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 rounded-lg bg-gray-700 text-white text-lg outline-none focus:ring-2 focus:ring-violet-500'
              type="text"
              placeholder="Enter Here"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="contact" className='block text-lg mb-2 text-gray-200'>Enter Your Contact Number:</label>
            <input
              id='contact'
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className='w-full p-3 rounded-lg bg-gray-700 text-white text-lg outline-none focus:ring-2 focus:ring-violet-500'
              type="text"
              inputMode='numeric'
              placeholder="Enter Here"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className='block text-lg mb-2 text-gray-200'>Enter Your Email:</label>
            <input
              id='email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 rounded-lg bg-gray-700 text-white text-lg outline-none focus:ring-2 focus:ring-violet-500'
              type="email"
              placeholder="Enter Here"
              required
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className='w-full py-3 font-semibold text-lg bg-violet-600 hover:bg-violet-700 rounded-lg transition-all text-white shadow-md'
            >
              Submit
            </button>
          </div>
        </form>

        {message && (
          <p className={`mt-4 text-lg ${isError ? 'text-red-400' : 'text-green-400'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
