import React, { useState } from "react";
import BannerImage from "/banner_4.jpg";
import "./DownloadBrochureButton.css";
import { HiDownload } from "react-icons/hi";
import DownloadForm from "./DownloadForm";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";

const OverviewSection = ({ showMore, setShowMore, openForm }) => (
  <section className="shadow-sm md:pt-4 md:pr-4 md:pb-4" id="hero">
    <div className="bg-white p-10 shadow-md ">
      <h1 className="text-primary font-medium text-[24px] md:text-4xl capitalize mb-4">
        Welcome to Balaji Sarvoday
      </h1>
      <p className="text-[16px] text-black md:text-md mb-4 text-justify">
        Be enchanted by the high rise of a MAJESTIC FAÇADE as you drive into the
        PRISTINE AMBIENCES of Balaji Sarvoday. Lifting you further are modern
        ELEVATORS READY to transport you to your apartment at express speed.
      </p>
      <p className="text-md mb-4">
        {showMore && (
          <span className="block">
            Entering your SPACIOUSLY AIRY HOME is a feeling best experienced
            than described. Awaiting your senses is a TASTEFULLY DESIGNED
            KITCHEN, A ROOMY LIVING AREA, SLEEP-CENTRIC BEDROOMS AND
            IDEAS-FRIENDLY BATHROOMS. And this is just the beginning of your
            Balaji Sarvoday wish-list.
          </span>
        )}
        <button
          className="text-blue-500 underline mt-2 cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read less" : "Read more"}
        </button>
      </p>

      {/* Download Brochure Button */}
      <button
        className="relative overflow-hidden inline-flex items-center gap-2 px-13 py-2 md:py-3 text-md font-semibold text-white bg-gradient-to-r from-gray-900 to-green-600 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
        onClick={openForm}
      >
        <HiDownload className="w-6 h-6 bounce-icon z-10" />
        <span className="z-10">Download Brochure</span>
        <div className="metallic-shine absolute inset-0 pointer-events-none" />
      </button>

      {/* Mobile-only Buttons and Image Below Download Brochure */}
      <div className="lg:hidden mt-4 flex flex-col items-center gap-3">
        <img
          src="/free-site-visit.png" // Make sure this path is correct
          alt="Free Site Visit"
          className="w-[80%] mx-auto mt-2"
        />

        <button
          className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-white text-sm bg-gradient-to-r from-black to-green-600 rounded-md shadow-md w-[90%]"
          onClick={() => alert("Book a Free Site Visit!")} // Replace with actual functionality
        >
          <span className="z-10">Book A Free Site Visit</span>
          <span className="metallic-shine absolute inset-0" />
        </button>

        {/* Mobile Image */}
      </div>
    </div>
  </section>
);

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative w-full lg:w-[78%] overflow-hidden bg-white flex flex-col justify-start items-center">
      {/* Banner image wrapper with relative position for overlay */}
      <div className="relative w-full">
        {/* Show ProjectCard only on large screens */}
        <div className="hidden md:block absolute top-4 left-4 z-50">
          <ProjectCard />
        </div>

        {/* Banner Image */}
        <img src={BannerImage} alt="Banner" className="w-full object-cover" />
      <div className="md:hidden p-3">
          <ProjectCardMobile />
        </div>
      </div>

      {/* Overview Section */}
      <OverviewSection
        showMore={showMore}
        setShowMore={setShowMore}
        openForm={handleFormToggle}
      />

      {/* Download Form */}
      {showForm && <DownloadForm handleClose={handleCloseForm} />}
    </div>
  );
}

export default Hero;
