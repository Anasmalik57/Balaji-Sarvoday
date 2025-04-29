import React, { useEffect, useRef, useState } from 'react';

const amenities = [
  { name: "Video Door Phone", image: "/video_door_phone.jpeg" },
  { name: "Gymansium", image: "/gymansium.jpg" },
  { name: "Swimming Pool", image: "/kidsplayarea.jpg" },
  { name: "Kids Play Area", image: "/swimmingpool.webp" },
  { name: "Garden", image: "/garden.jpg" },
  { name: "CCTV Surveillance", image: "/cctv.webp" },
];

// Break into groups of 2 for mobile frame
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Amenities = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = chunkArray(amenities, 2); // each frame: 2 vertical items

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const width = container.offsetWidth;
      container.scrollTo({
        left: width * currentSlide,
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <div id="amenities" className="pt-3 md:pr-4 md:pb-4 bg-gray-50 w-full lg:w-[78%]">
      <div className='p-6 md:p-10 bg-white'>
        <h2 className="text-2xl font-semibold mb-6">Amenities Of Balaji Sarvoday</h2>

        {/* Mobile View: Horizontal scroll frames with 2 vertical cards each */}
        <div className="sm:hidden overflow-hidden" ref={scrollRef}>
          <div className="flex transition-transform duration-500 ease-in-out w-full">
            {slides.map((group, slideIdx) => (
              <div key={slideIdx} className="min-w-full px-4 py-2 box-border">
                <div className="flex flex-col gap-4">
                  {group.map((item, idx) => (
                    <div key={idx} className="w-full relative rounded-xl overflow-hidden shadow-md">
                      <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
                      <div className="absolute bottom-3 left-2 right-2 h-8 bg-gradient-to-r from-black/70 via-black/40 to-transparent px-3 flex items-center">
                        <span className="text-white text-sm font-semibold">{item.name.toUpperCase()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full lg:h-65 xl:h-70 object-cover"
              />
              <div className="absolute bottom-3 left-4 w-full h-8 bg-gradient-to-r from-black/70 via-black/40 to-transparent px-3 font-bold flex items-center">
                <span className="text-white text-md font-semibold">{item.name.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-green-700 md:hidden hover:bg-green-800 text-white px-6 py-2 rounded-md shadow-md">
            Download Amenities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
