import React, { useState, useEffect } from "react";
import { FaHome, FaBars, FaTimes, FaCoins, FaSitemap } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { IoMdPhotos } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    const offset = 50; // Adjust this to match your header height (in pixels)

    // Delay scroll slightly to ensure section is in DOM
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionPosition =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: "smooth",
        });
      }

      // Close menu after navigation (only on mobile)
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    }, 100);
  };

  const observeSections = () => {
    const sections = [
      "hero",
      "price",
      "site",
      "amenities",
      "gallery",
      "location",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    const cleanupObserver = observeSections();

    const sections = [
      "hero",
      "price",
      "site",
      "amenities",
      "gallery",
      "location",
    ];
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.7) {
          setActiveSection(id);
          break;
        }
      }
    }

    return cleanupObserver;
  }, []);

  return (
    <div className="w-full lg:w-[78%] fixed top-0 left-0 z-70">
      <div className=" lg:h-15 flex flex-wrap md:flex-nowrap bg-white shadow-md">
        {/* Logo Section */}
        <div className="w-full md:w-1/6 bg-white items-center border-r border-gray-300 flex md:flex-col md:flex-row md:items-center md:justify-center relative">
          <a href="https://www.sslifespaces.in/" target="_blank" className="md:block">
            <img
              src="/logo1.jpg"
              alt="Logo1"
              className="w-[100px]"
            />
          </a>

          <span className="hidden md:block text-2xl font-extralight text-gray-300 mx-2">
            |
          </span>

          <div className="flex md:hidden w-full ml-[17%] md:py-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="object-contain h-20 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="object-contain h-20 w-auto"
            />
          </div>

          <div className="md:hidden absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="text-2xl border px-3 py-2 rounded-md text-gray-700 border-gray-200"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          className={`w-full md:w-[5/6] flex md:flex-nowrap flex-wrap md:justify-center transition-all duration-500 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <div
            onClick={() => scrollToSection("hero")}
            className={`w-full md:w-[11%] px-4 py-2 border-r flex justify-center items-center cursor-pointer ${
              activeSection === "hero"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <span className=" md:text-xl">
              <FaHome />
            </span>
          </div>

          <div
            onClick={() => scrollToSection("price")}
            className={`w-full md:w-[15%] px-4 py-2 border-r flex justify-center items-center cursor-pointer ${
              activeSection === "price"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <span className="text-lg md:text-xl">
              <FaCoins />
            </span>
            <p className="px-1 text-lg md:text-md">Price</p>
          </div>

          <div
            onClick={() => scrollToSection("site")}
            className={`w-full md:w-[24%] px-4 py-2 border-r flex justify-center items-center cursor-pointer ${
              activeSection === "site"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <span className="text-lg md:text-xl">
              <FaSitemap />
            </span>
            <p className="px-1 text-lg md:text-md">Site & Floor Plan</p>
          </div>

          <div
            onClick={() => scrollToSection("amenities")}
            className={`w-full md:w-[18%] px-4 py-2 border-r flex justify-center items-center cursor-pointer ${
              activeSection === "amenities"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <span className="text-lg md:text-xl">
              <FiWifi />
            </span>
            <p className="px-1 text-lg md:text-md">Amenities</p>
          </div>

          <div
            onClick={() => scrollToSection("gallery")}
            className={`w-full md:w-[16%] px-4 py-2 border-r flex justify-center items-center cursor-pointer ${
              activeSection === "gallery"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <span className="text-lg md:text-xl">
              <IoMdPhotos />
            </span>
            <p className="px-1 text-lg md:text-md">Gallery</p>
          </div>

          <div
            onClick={() => scrollToSection("location")}
            className={`w-full md:w-[16%] px-4 py-2 flex justify-center items-center cursor-pointer ${
              activeSection === "location"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <span className="text-lg md:text-xl">
              <FaMapLocationDot />
            </span>
            <p className="px-1 text-lg md:text-md">Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
