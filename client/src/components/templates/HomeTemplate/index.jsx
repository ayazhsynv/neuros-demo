import React from "react";
import HomeHero from "../../sections/HomeHero";
import HomeAbout from "../../sections/HomeAbout";
import HomeService from "../../sections/HomeServices";

const HomeTemplate = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeService />
    </div>
  );
};

export default HomeTemplate;
