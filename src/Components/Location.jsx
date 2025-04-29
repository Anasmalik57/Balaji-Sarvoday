import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import DownloadForm from "./DownloadForm"; // Ensure to import the form component

const MapSection = () => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleOpenForm = () => {
    setShowForm(true); // Show the form when button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form when the modal close button is clicked
  };

  return (
    <section
      id="location"
      className="bg-gray-50 pt-3 md:pr-4 md:pb-4 w-full lg:w-[78%]"
    >
      <div className="bg-white p-10">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Location of Balaji Sarvoday
        </h2>

        {/* Map and Location Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left: Map View */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-center mb-4">Map View</h2>
            <div className="border rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4665.139495807776!2d73.10348499999999!3d19.220022800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79588a4684b47%3A0xbe28f3c4f8dd3d55!2sBalaji%20Sarvoday!5e1!3m2!1sen!2sin!4v1745903661811!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Right: Location Map Image */}
          <div className="hidden md:block">
            <h2 className="text-2xl  font-bold text-center mb-4">
              Location Map
            </h2>
            <div className="relative w-[250px] md:w-full group overflow-hidden md:h-[300px]">
              <div className="w-full h-[300px] border cursor-pointer flex justify-center">
                <img
                  src="/locate.jpg"
                  alt="Costing Details"
                  className="w-[300px] h-[297px] cursor-pointer"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-0 group-hover:h-full transition-all duration-500 ease-in-out"></div>
              <button
                className="absolute inset-x-0 top-[-100%] text-white border-1 bg-black/75 cursor-pointer text-lg w-[70%] ml-[15%] px-3 py-2 group-hover:top-[40%] transition-all duration-700 ease-in-out"
                onClick={handleOpenForm} // Open the form when clicked
              >
                Download Location Map
              </button>
            </div>
          </div>
        </div>

        {/* Landmarks List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6 text-black text-md font-medium">
          <p className="flex items-center-safe">
            <span>
              <MdOutlineLocationOn />
            </span>{" "}
            <span>Dombivli Railway Station - 1.5 KM</span>
          </p>
          <p className="flex items-center-safe">
            <span>
              <MdOutlineLocationOn />
            </span>{" "}
            <span>Thakurli Railway Station - 500 Metre</span>
          </p>
          <p className="flex items-center-safe">
            <span>
              <MdOutlineLocationOn />
            </span>{" "}
            <span>Model College - 800 Metre</span>
          </p>
          <p className="flex items-center-safe">
            <span>
              <MdOutlineLocationOn />
            </span>{" "}
            <span>Omkar International School - 200 Metre</span>
          </p>
          <p className="flex items-center-safe">
            <span>
              <MdOutlineLocationOn />
            </span>{" "}
            <span>Manjunath College - 600 Metre</span>
          </p>
        </div>
      </div>

      {/* Conditionally render the form modal if showForm is true */}
      {showForm && <DownloadForm handleClose={handleCloseForm} />}
    </section>
  );
};

export default MapSection;
