import React, { useState } from 'react';

const API_BASE_URL = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000').replace(/\/$/, '');
const SEND_EMAIL_URL = API_BASE_URL.endsWith('/send-email') ? API_BASE_URL : `${API_BASE_URL}/send-email`;

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
    const sanitizedValue = name === 'contact' ? value.replace(/\D/g, '') : value;

    setMessage('');
    setIsError(false);
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setMessage(data.message || 'Message sent successfully!');
        setIsError(false);
        setFormData({ name: '', contact: '', email: '' });
      } else {
        setMessage(data.message || 'Failed to send. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Server error. Is the backend running?');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-12">
      <div className='max-w-2xl w-full text-center py-12 px-8 border border-slate-800 rounded-3xl shadow-2xl shadow-violet-500/10 bg-slate-900/50 backdrop-blur-xl'>
        <p className='font-bold text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400'>
          Let's Get in Touch!
        </p>
        <p className='text-slate-400 mb-10 text-lg'>
          Enter your details below, and I will contact you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-6'>
          <div className="w-full text-left">
            <label htmlFor="name" className='block text-sm font-medium mb-2 text-slate-300 ml-1'>Full Name</label>
            <input
              id='name'
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full p-4 rounded-xl bg-slate-950 text-white text-lg border border-slate-800 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 outline-none transition-all placeholder-slate-600'
              type="text"
              placeholder="e.g. John Doe"
              required
            />
          </div>
          <div className="w-full text-left">
            <label htmlFor="contact" className='block text-sm font-medium mb-2 text-slate-300 ml-1'>Contact Number</label>
            <input
              id='contact'
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className='w-full p-4 rounded-xl bg-slate-950 text-white text-lg border border-slate-800 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 outline-none transition-all placeholder-slate-600'
              type="text"
              inputMode='numeric'
              placeholder="e.g. 1234567890"
              required
            />
          </div>
          <div className="w-full text-left">
            <label htmlFor="email" className='block text-sm font-medium mb-2 text-slate-300 ml-1'>Email Address</label>
            <input
              id='email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full p-4 rounded-xl bg-slate-950 text-white text-lg border border-slate-800 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 outline-none transition-all placeholder-slate-600'
              type="email"
              placeholder="e.g. john@example.com"
              required
            />
          </div>
          <div className="w-full pt-4">
            <button
              type="submit"
              className='w-full py-4 font-bold text-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl transition-all text-white shadow-lg shadow-violet-500/25 transform hover:-translate-y-1'
            >
              Send Message
            </button>
          </div>
        </form>

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-lg font-medium ${isError ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
