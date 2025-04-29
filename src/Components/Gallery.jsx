import React, { useEffect, useRef, useState } from 'react';

const gallery = [
  { image: "/b1.jpg" },
  { image: "/b2.jpg" },
  { image: "/b3.jpg" },
  { image: "/b4.jpg" },
  { image: "/b5.jpg" },
  { image: "/b6.jpg" },
];

// Break into groups of 2 for mobile frame
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Gallery = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = chunkArray(gallery, 2); // each frame: 2 vertical items

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
    <div id="gallery" className="pt-3 md:pr-4 md:pb-4 bg-gray-50 w-full lg:w-[78%]">
      <div className='p-6 md:p-10 bg-white'>
        <h2 className="text-2xl font-semibold mb-6">Gallery of Balaji Sarvoday</h2>

        {/* Mobile View: Horizontal scroll frames with 2 vertical cards each */}
        <div className="sm:hidden overflow-hidden" ref={scrollRef}>
          <div className="flex transition-transform duration-500 ease-in-out w-full">
            {slides.map((group, slideIdx) => (
              <div key={slideIdx} className="min-w-full px-4 py-2 box-border">
                <div className="flex flex-col gap-4">
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full relative rounded-xl overflow-hidden shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={`Gallery image ${slideIdx * 2 + idx + 1}`}
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-90 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
