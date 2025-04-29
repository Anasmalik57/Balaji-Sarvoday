import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-50 pt-3 md:pr-2 w-full lg:w-[78%]">
      <div className="text-black pt-2">
        <div className=" mx-auto space-y-6">
          {/* SS Life Spaces Section */}
          <div className="bg-white pl-11 pr-11 pb-11 pt-6 shadow-sm md:mr-2 ">
            <div className="flex text-center justify-center h-20 ">
              <img src="/logo1.jpg" alt="" className="w-28 h-20 " />
            </div>
            <div className=" flex flex-col justify-center items-center md:items-start">
              <h2 className="text-2xl font-semibold text-black mb-2">
                SS Life Spaces
              </h2>
              <p className="text-lg text-justify">
                SS Life Spaces is celebrating its 25th anniversary, a milestone
                marked by the happiness of over 2000 families who have made our
                lifespace their home. Our journey has been defined by a
                commitment to delivering affordable luxury through innovative
                residential complexes across Dombivli, Kalyan, and Thakurli.
                These projects have not just provided homes but have redefined
                lifestyles, offering top-tier wellness facilities and creating
                vibrant communities that resonate with modern living ideals.
              </p>

              <h3 className="font-semibold text-black mt-8 text-xl">
                RERA Information
              </h3>
              <div className="flex flex-col gap-2  items-center md:items-start">
                <img
                  src="/kanhaqrcode.jpg" // Replace with actual QR image path
                  alt="QR Code"
                  className="w-20 h-24 mt-4 object-contain "
                />
                <span className="flex flex-col md:flex-row items-center">
                  <h1 className="text-xl">Balaji Sarvoday MahaRERA - </h1>
                  <strong className="text-black font-bold ml-2 text-xl">
                    P51700047811
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* About Bellamaison */}
          <div className="bg-white p-11 shadow-sm space-y-2 md:mr-2">
            <div className=" md:flex justify-between">
              <h3 className="text-2xl font-semibold pb-4 text-black ">
                About Bellamaison Realty
              </h3>
              <div className=" w-46 h-9 ml-10 bg-black rounded-md">
                <img src="/logo3.webp" alt="logo" className=" h-full w-full" />
              </div>
            </div>

            <p className="text-lg pb-1 font-[450] text-slate-800">
              Bellamaison Realty is a Marketing Consultant and channel partner
              based out of Mumbai.
            </p>
            <p className="text-lg font-[450] text-slate-800">
              The group is working towards its goal to provide marketing and
              sales services to real estate developers. It is also working
              toward its goal to serve customers by providing them the best
              available support.
            </p>
            <p className="pt-3">
              <span className="text-[15px] ">Bellamaison Realty Rera - </span>
              <span className="text-[15px]">A031332400291</span>
            </p>
          </div>

          {/* Disclaimer (unchanged) */}
          <div className="bg-gray-50 shadow-md p-4 md:pl-13 md:pb-13 md:mb-5">
            <div className="text-xs text-gray-500 mt-2 pb-6">
              <p className="md:pt-8 md:pr-6 text-xs text-black/80 text-justify">
                <strong className="text-xs text-black">Disclaimer: </strong>{" "}
                Experience a lavish lifestyle at Balaji Sarvoday, a fabulous
                residential project in Thakurli by SS Lifespaces. It offers
                spacious 1, 2, and 3 BHK flats with sleek interiors for a cosy
                lifestyle. World-class amenities such as a clubhouse, swimming
                pool, gym, indoor game zone, multipurpose court, & more bring
                leisure & fitness right near home.
              </p>
              <br />
              <p className="md:pt-0 md:pr-6 text-xs text-black/80 text-justify">
                Based near lush greens as well as good social infrastructure -
                the project is close to top-notch education, healthcare, and
                entertainment. These landmarks include Icon Hospital, Metro
                Junction Mall, Orchids The International School, & K V
                Pendharkar College. Moreover, you also get quick travel times
                via the Kalyan Shil Road & Thakurli Station - both within 5
                minutes of the project. Overall - Balaji Sarvoday offers you a
                peaceful lifestyle amid the serene, green landscapes of
                Thakurli.
              </p>
            </div>

            {/* Line separator between disclaimer and footer */}
            <hr className="border-t border-gray-300 my-4" />

            {/* Footer Bottom Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-md text-gray-500 mt-2 text-sm md:text-[16px]">
              <span className="text-black">Copyright © 2024 </span>
              <a href="#" className="hover:underline">
                {" "}
                | Terms & Conditions{" "}
              </a>
              <a href="#" className="hover:underline">
                {" "}
                | Privacy Policy |{" "}
              </a>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
