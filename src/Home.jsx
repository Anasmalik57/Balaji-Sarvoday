import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Site from "./Components/Site";
import Amenities from "./Components/Amenities";
import Gallery from "./Components/Gallery";
import Price from "./Components/Price";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import HeroForm from "./Components/PriceForm";
import QuoteForm from "./Components/QuoteForm";
import ProjectCardMobile from "./Components/ProjectCardMobile";

function Home() {
  return (
    <>
      <Header />
      <div className="pt-[50px]">
        <Hero />
        {/* <ProjectCardMobile /> */}
        <Price />
        <Site />
        <Amenities />
        <Gallery />
        <Location />
        <QuoteForm />
      </div>

      {/* <HeroForm /> */}
      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}

export default Home;
