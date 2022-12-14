import React from "react";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import Reviews from "../components/Reviews/Reviews";
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer";
const Home = () => {
    return(
      <>
      <Hero/>
      <Gallery/>
      <Reviews/>
      <Contact/>
      </>
    )
  };
  
  export default Home;