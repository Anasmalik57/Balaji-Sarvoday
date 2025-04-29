import React, { useState } from "react";
import "./DownloadBrochureButton.css"; // Make sure this CSS is imported
import PlanForm from './PlanForm';  // Assuming you want to import PlanForm as well

const Site = () => {
  const [showForm, setShowForm] = useState(false);
  const [formKey, setFormKey] = useState(0);  // State to force re-mount of PlanForm

  const handleFormOpen = () => {
    setShowForm(true);
    setFormKey((prevKey) => prevKey + 1); // Change the key to force re-mount
  };

  return (
    <section id="site" className="pt-3 md:pr-4 md:pb-2 bg-gray-50 w-full lg:w-[78%]">
      <div className="bg-white p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Floor Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">

          {/* 1 BHK Card */}
          <div className="relative shadow-lg overflow-hidden group border">
            <img
              src="/1bhk.jpg"
              alt="1 BHK Floor Plan"
              className="w-full h-70 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-0 group-hover:h-full transition-all duration-500 ease-in-out"></div>

            {/* Hover Button */}
            <button 
              className="absolute inset-x-0 top-[-100%] text-white bg-black/75 text-lg w-[70%] ml-[15%] px-3 py-2 cursor-pointer group-hover:top-[40%] transition-all duration-700 ease-in-out z-10"
              onClick={handleFormOpen}  // Trigger form open on hover button click
            >
              Enquire Now
            </button>

            <button 
              className="relative w-full bg-gradient-to-r from-black to-green-700 text-white py-3 text-center text-xl font-semibold z-20 cursor-pointer"
              onClick={handleFormOpen} // Trigger form open on "1 BHK" button click
            >
              1 BHK
              <span className="metallic-shine"></span>
            </button>
          </div>

          {/* 2 BHK Card */}
          <div className="relative shadow-lg overflow-hidden border border-gray-200 group">
            <img
              src="/2bhk.jpg"
              alt="2 BHK Floor Plan"
              className="w-full h-70 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-0 group-hover:h-full transition-all duration-500 ease-in-out"></div>

            {/* Hover Button */}
            <button 
              className="absolute inset-x-0 top-[-100%] text-white bg-black/75 text-lg w-[70%] ml-[15%] px-3 py-2 cursor-pointer group-hover:top-[40%] transition-all duration-700 ease-in-out z-10"
              onClick={handleFormOpen}  // Trigger form open on hover button click
            >
              Enquire Now
            </button>

            <button
              className="relative w-full bg-gradient-to-r from-black to-green-700 text-white py-3 text-center text-xl cursor-pointer font-semibold z-20"
              onClick={handleFormOpen} // Trigger form open on "2 BHK" button click
            >
              2 BHK
              <span className="metallic-shine"></span>
            </button>
          </div>
          {/* 3 BHK Card */}
          <div className="relative shadow-lg overflow-hidden border border-gray-200 group">
            <img
              src="/3bhk.jpg"
              alt="2 BHK Floor Plan"
              className="w-full h-70 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-0 group-hover:h-full transition-all duration-500 ease-in-out"></div>

            {/* Hover Button */}
            <button 
              className="absolute inset-x-0 top-[-100%] text-white bg-black/75 text-lg w-[70%] ml-[15%] px-3 py-2 cursor-pointer group-hover:top-[40%] transition-all duration-700 ease-in-out z-10"
              onClick={handleFormOpen}  // Trigger form open on hover button click
            >
              Enquire Now
            </button>

            <button
              className="relative w-full bg-gradient-to-r from-black to-green-700 text-white py-3 text-center text-xl cursor-pointer font-semibold z-20"
              onClick={handleFormOpen} // Trigger form open on "2 BHK" button click
            >
              3 BHK
              <span className="metallic-shine"></span>
            </button>
          </div>

        </div>
      </div>

      {/* Modal Form */}
      {showForm && <PlanForm key={formKey} showForm={showForm} setShowForm={setShowForm} />}
    </section>
  );
};

export default Site;
