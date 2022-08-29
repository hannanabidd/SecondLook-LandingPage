import React from "react";
import About from "../Components/AboutUs/About";
import Chooseus from "../Components/ChooseUs/Chooseus";
import Contact from "../Components/ContactUs/Contact";
import Faqs from "../Components/Faqs/Faqs";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Ortho from "../Components/Orthopedic/Ortho";
import OurTeam from "../Components/OurTeam/OurTeam";
import Section1 from "../Components/Section1/Section1";
import Services from "../Components/Services/Services";
import Working from "../Components/Steps/Working";

function LandingPage() {
  return (
    <>
      <Header />
      <Navbar />
      <Section1 />
      <Services />
      <Working />
      <Ortho />
      <Chooseus />
      <About />
      <Faqs />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
