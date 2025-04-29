import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import logo from "/logo.jpeg";

import callbackIcon from '/call.png';
import siteVisitIcon from '/site.png';
import priceIcon from '/price.png';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consent: false,
  });

  const countryCodes = [
    { name: 'India', code: '+91' },
    { name: 'United States', code: '+1' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Canada', code: '+1' },
    { name: 'Australia', code: '+61' },
    { name: 'Germany', code: '+49' },
    { name: 'Singapore', code: '+65' },
    { name: 'South Africa', code: '+27' },
    { name: 'New Zealand', code: '+64' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showForm) {
      const timer = setTimeout(() => setShowForm(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showForm]);

  const handleClose = () => setShowForm(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been sent");

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      consent: false,
    });
    setSelectedCountryCode('+91');
  };

  const promises = [
    { icon: callbackIcon, text: 'Instant Call Back' },
    { icon: siteVisitIcon, text: 'Free Site Visit' },
    { icon: priceIcon, text: 'Unmatched Price' },
  ];

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 max-h-screen">
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-md shadow-lg flex flex-row gap-4 animate-fade-in">
        <div className="absolute top-0 w-full text-white flex justify-end p-6 rounded-t-md">
          <button className="text-black text-2xl hover:text-red-600" onClick={handleClose}>
            <IoClose />
          </button>
        </div>

        <div className="p-8 w-[30%] bg-gray-100 rounded-l-lg space-y-8">
          <h2 className="text-2xl font-semibold text-center mt-5">We Promise</h2>
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <img src={promise.icon} alt={promise.text} className="h-12 w-12 object-contain" />
              <span className="text-md font-medium text-black">{promise.text}</span>
            </div>
          ))}
        </div>

        <div className="p-8 w-[70%]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <img src={logo} alt="Balaji Kanha" className="mt-1 mx-auto h-15 mb-2" />
              <h3 className="text-lg font-semibold">
                Register Here And Avail The <span className="text-red-600">Best Offers!!</span>
              </h3>
            </div>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-2 py-2 border-b text-gray-500 text-lg focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-2 border-b text-gray-500 text-lg focus:outline-none"
              required
            />

            <div className="flex gap-2">
              <select
                className="w-1/3 px-2 py-2 border-b text-gray-900 text-lg focus:outline-none"
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                required
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-2/3 px-4 py-2 border-b text-gray-500 text-lg focus:outline-none"
                required
              />
            </div>

            <div className="text-xs">
              <label className="inline-flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <span className='text-[10px]'>
                  I Consent to The Processing of Provided Data According to
                  <a href="https://policies.google.com/privacy" className="text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{' '}
                  <a href="https://policies.google.com/privacy" className="text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">
                    | Terms & Conditions,
                  </a>{' '}
                  I Authorize Balaji Sarvoday Advisors and its representatives to Call, SMS, Email or WhatsApp Me About Its Products and Offers. This Consent Overrides Any Registration For DNC/NDNC.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button type="submit" className="relative text-white bg-gradient-to-r from-black to-green-600 font-bold py-2 px-6 rounded-lg overflow-hidden metallic-shine-wrapper">
                <span className="z-10 relative">Send Now</span>
                <span className="metallic-shine absolute inset-0" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
