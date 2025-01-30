import React from "react";
import Hero from "./Hero";
import HomeProperty from "./HomeProperty";
import Cities from "./Cities";
import WhyUs from "./WhyUs";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeProperty />
      <Cities />
      <WhyUs />
      <Reviews />
    </div>
  );
};

export default Home;
