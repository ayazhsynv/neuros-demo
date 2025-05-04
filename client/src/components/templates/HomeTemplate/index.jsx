import React from "react";
import HomeHero from "../../sections/HomeHero";
import HomeAbout from "../../sections/HomeAbout";
import HomeServices from "../../sections/HomeServices";
import HomeTeam from "../../sections/HomeTeam";
import HomeReviews from "../../sections/HomeReviews";

const HomeTemplate = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeTeam />
      <HomeReviews />
    </div>
  );
};

export default HomeTemplate;
