'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: null, message: '' });
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus({ type: 'success', message: 'Thank you! We will reach out soon.' });
      setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 sm:p-8 border border-gray-100 max-w-lg"
    >
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Your Name:"
        className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email:"
        className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Your Phone Number:"
        className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        placeholder="Your Message:"
        className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-red-700 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-sm hover:bg-red-800 transition-colors text-xs sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'SUBMIT NOW'}
      </button>
      {status.message && (
        <p
          className={`mt-4 text-xs sm:text-sm ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
