import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import logo from "/logo.jpeg";

// Icon images
import callbackIcon from '/call.png';
import siteVisitIcon from '/site.png';
import priceIcon from '/price.png';

const PriceForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    if (submitted) {
      setFormData({ name: '', email: '', countryCode: '+91', phone: '' });
    }
    setShowForm(false);
  };

  const promises = [
    { icon: callbackIcon, text: 'Instant Call Back' },
    { icon: siteVisitIcon, text: 'Free Site Visit' },
    { icon: priceIcon, text: 'Unmatched Price' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfvlkDfG7MCVGPIU7chKZmS_OaIjNjpWmU2SYyPVgxglLBtNg/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.1781869431", formData.name);         // Full Name
    formBody.append("entry.377831199", formData.email);          // Email
    formBody.append("entry.183978529", formData.countryCode);    // Country Code
    formBody.append("entry.1348877516", formData.phone);         // Phone Number

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    setSubmitted(true);

    setTimeout(() => {
      setShowForm(true);
      setFormData({ name: '', email: '', countryCode: '+91', phone: '' });
      setSubmitted(false);
    }, 2500);
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 max-h-screen">
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-md shadow-lg flex flex-row gap-4">
        
        {/* Close Button */}
        <div className="absolute top-0 w-full bg-black text-white flex justify-end p-4 md:p-6 rounded-t-md">
          <h1 className="text-white flex-1 text-center text-3xl font-semibold">Price</h1>
          <button className="text-white text-2xl hover:text-red-600" onClick={handleClose}>
            <IoClose />
          </button>
        </div>

        {/* Left Side */}
        <div className="hidden md:block p-8 w-[30%] bg-gray-100 rounded-l-md mt-20 space-y-8">
          <h2 className="text-2xl font-semibold text-center">We Promise</h2>
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <img src={promise.icon} alt={promise.text} className="h-12 w-12 object-contain" />
              <span className="text-md font-medium text-black">{promise.text}</span>
            </div>
          ))}
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:w-[70%]">
          {submitted ? (
            <div className="text-center mt-16">
              <h3 className="text-xl font-semibold text-green-600">Your response has been recorded!</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center">
                <img src={logo} alt="Balaji Kanha" className="mt-18 mx-auto h-12 mb-2" />
                <h3 className="text-lg font-semibold">
                  Register Here And Avail The <span className="text-red-600">Best Offers!!</span>
                </h3>
              </div>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
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
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-1/3 px-2 py-2 border-b text-gray-900 text-lg focus:outline-none"
                  required
                >
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+971">Dubai (+971)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+81">Japan (+81)</option>
                  <option value="+49">Germany (+49)</option>
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
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className='text-[10px]'>
                    I Consent to The Processing of Provided Data According to
                    <a href="https://policies.google.com/privacy" className="text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    <a href="https://policies.google.com/privacy" className="text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">
                      | Terms & Conditions,
                    </a>
                    I Authorize Balaji Sarvoday Advisors and its representatives to Call, SMS, Email or WhatsApp Me About Its Products and Offers. This Consent Overrides Any Registration For DNC/NDNC.
                  </span>
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="relative text-white bg-gradient-to-r from-black to-green-600 font-bold py-2 px-19 md:px-6 rounded-lg overflow-hidden">
                  <span className="z-10 relative">Send Now</span>
                  <span className="metallic-shine"></span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
