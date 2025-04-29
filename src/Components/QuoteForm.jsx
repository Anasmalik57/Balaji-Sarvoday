import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import logo from '/free-site-visit.png'; // adjust path if needed
import CallBackForm from './CallBackForm'; // Import the CallBackForm component
import VisitForm from './VisitForm'; // Import the VisitForm component

const QuoteForm = () => {
  const [showCallBackForm, setShowCallBackForm] = useState(false); // State to manage the form visibility
  const [showVisitForm, setShowVisitForm] = useState(false); // State to manage the VisitForm visibility

  // Function to handle the button click and show the callback form
  const handleInstantCallBackClick = () => {
    setShowCallBackForm((prev) => !prev); // Toggle the form visibility
  };

  // Function to handle the button click and show the visit form
  const handleBookSiteVisitClick = () => {
    setShowVisitForm((prev) => !prev); // Toggle the VisitForm visibility
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Show success message using JavaScript's alert
    alert('Your request has been sent! We will get back to you soon.');

    // Reset the form fields after showing the alert
    event.target.reset();
  };

  return (
    <div className="fixed top-0 right-0 w-[22%] lg:w-[22%] md:w-[30%] sm:w-[50%] h-full bg-white shadow-lg z-50 overflow-y-auto hidden lg:block">
      {/* Instant Call Back Button */}
      <div className="flex justify-center bg-gray-100 h-12 p-2 mb-2">
        <button
          className="relative inline-flex items-center gap-2 px-4 py-2 text-lg text-white bg-gradient-to-r from-black to-green-600 rounded-md shadow-lg overflow-hidden w-[80%]"
          onClick={handleInstantCallBackClick} // Add onClick to show or hide the form
        >
          <PhoneCall className="w-5 h-5 z-10" />
          <span className="z-10">Instant Call Back</span>
          <span className="metallic-shine absolute inset-0" />
        </button>
      </div>

      {/* Heading */}
      <div className="text-center mb-2">
        <h3 className="text-lg font-bold">Get The Best Quote</h3>
      </div>

      {/* Conditionally render the CallBackForm */}
      {showCallBackForm && <CallBackForm />}

      {/* Google Form (modified to prevent page reload and show success message) */}
      <form
        onSubmit={handleFormSubmit} // Handle form submission in React
        className="space-y-1 pr-2 pl-2"
      >
        <input
          type="text"
          name="entry.YOUR_FULLNAME_ENTRY_ID"
          placeholder="Full Name"
          className="w-full px-2 py-2 border-b text-gray-500 text-md focus:outline-none"
          required
        />

        <input
          type="email"
          name="entry.YOUR_EMAIL_ENTRY_ID"
          placeholder="Email Address"
          className="w-full px-2 py-2 border-b text-gray-500 text-md focus:outline-none"
          required
        />

        {/* Country Code + Phone Number */}
        <div className="flex gap-2">
          <select
            name="entry.YOUR_COUNTRYCODE_ENTRY_ID"
            className="w-1/3 px-2 py-2 border-b text-gray-900 text-md focus:outline-none"
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
            name="entry.YOUR_PHONE_ENTRY_ID"
            placeholder="Phone Number"
            className="w-2/3 px-4 py-2 border-b text-gray-500 text-md focus:outline-none"
            required
          />
        </div>

        {/* Consent */}
        <label className="text-[10px] text-gray-600 flex items-start gap-2">
          <input type="checkbox" className="mt-1" required />
          <span>
            I Consent To The Processing of Provided Data According To{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Privacy Policy
            </a>{" "}
            | 
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Terms & Conditions
            </a>
            . I Authorize Balaji Sarvoday Advisors and its representatives to Call, SMS, Email or WhatsApp Me About Its Products and Offers. This Consent Overrides Any Registration For DNC/NDNC.
          </span>
        </label>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center gap-2 px-4 py-3 text-xl font-medium text-white bg-gradient-to-r from-black to-green-600 rounded-md shadow-lg overflow-hidden h-10 w-[60%]"
          >
            <span className="z-10">Get It Now</span>
            <span className="metallic-shine absolute inset-0" />
          </button>
        </div>
      </form>

      {/* Image */}
      <div className="mt-6">
        <img src={logo} alt="Balaji Kanha" className="mx-auto h-37 mb-2" />
      </div>

      {/* Free Site Visit Button */}
      <div className="flex justify-center">
        <button
          className="relative inline-flex items-center justify-center gap-2 px-1 py-2 text-xl font-medium text-white bg-gradient-to-r from-black to-green-600 rounded-md shadow-lg overflow-hidden w-[77%] mt-4"
          onClick={handleBookSiteVisitClick} // Add onClick to show or hide the form
        >
          <span className="z-10">Book A Free Site Visit</span>
          <span className="metallic-shine absolute inset-0" />
        </button>
      </div>

      {/* Conditionally render the VisitForm */}
      {showVisitForm && <VisitForm />}
    </div>
  );
};

export default QuoteForm;
