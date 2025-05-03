import React from "react";

const HomeHero = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-36.25 px-10 pt-18">
        <div className="flex flex-col items-center justify-center p-2.5 font-bold text-center  text-ui-white">
          <h1 className="text-[5rem] mb-6.25 leading-25">
            Connecting talents with the
            <br />
            Neuros startups agency
          </h1>
          <p className="text-md mb-6.75 leading-7.5">
            Our startup development services are designed to accelerate your
            journey from concept to
            <br />
            launch, providing you with the technical expertise and strategic
            guidance needed to succeed.
          </p>
          <div className="flex flex-row items-center justify-center gap-2.5">
            <button className="bg-ui-orange text-ui-white rounded-4xl px-10 py-5 text-sm">
              <i className="ri-arrow-right-s-line"></i> Discover
            </button>
            <button className="bg-ui-white text-ui-black rounded-4xl px-10 py-5 text-sm">
              <i className="ri-arrow-right-s-line"></i> Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="pt-25 px-3 flex flex-row flex-wrap items-end justify-center max-h-4xl">
        <div className="flex-1/5 p-2">
          <div className="bg-[url(./src/assets/HomeHero/hero1.png)] bg-cover rounded-4xl h-139 flex items-end">
            <div className="px-10 pb-8 font-bold text-2xl">
              Achievements
              <br />
              of our startup
            </div>
          </div>
        </div>
        <div className="flex-1/5 flex flex-col p-2">
          <div className="rounded-4xl relative overflow-hidden">
            <img
              src="./src/assets/HomeHero/hero2.png"
              className="rounded-4xl h-125 object-cover "
              alt=""
            />
            <div className="absolute top-59 left-23 rotate-270 font-bold text-ui-red text-9xl flex items-center justify-center">
              Neuro
            </div>
          </div>
          <div className="rounded-4xl bg-ui-red mt-4 px-9.5 pt-15 h-68.75">
            <h2 className="font-bold text-6xl mb-2">150K</h2>
            <p>Active users every day</p>
          </div>
        </div>
        <div className="flex-1/5 p-2">
          <div className="bg-[#CDD6DB] h-69 rounded-4xl flex flex-col justify-end overflow-hidden ">
            <img
              className="rounded-4xl object-contain "
              src="./src/assets/HomeHero/hero3.png"
              alt=""
            />
          </div>
          <div className="rounded-4xl overflow-hidden bg-[url(./src/assets/HomeHero/hero4.png)] bg-cover px-10 pb-11 h-94 mt-4 flex items-end">
            <h2 className="font-bold text-2xl">
              Professional <br /> team & tech
            </h2>
          </div>
        </div>
        <div className="flex-1/5 p-2">
          <div className=" rounded-4xl overflow-hidden h-125">
            <img
              className="h-full rounded-4xl object-cover"
              src="./src/assets/HomeHero/hero5.png"
              alt=""
            />
          </div>
          <div className="rounded-4xl overflow-hidden mt-4 h-57">
            <img
              className="rounded-4xl object-fill"
              src="./src/assets/HomeHero/hero6.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1/5 p-2">
          <div className=" bg-ui-red pt-11 pb-8 pr-7.5 pl-9.75 rounded-4xl h-141 flex flex-col justify-between">
            <h2 className=" text-2xl font-bold">
              Programming &
              <br />
              development
            </h2>
            <div>
              <img
                className=" object-cover h-45"
                src="./src/assets/HomeHero/hero7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-25">
        <div className="mx-32 px-12.5 py-2.5 flex justify-center gap-8 h-28">
          <div className="px-3.75 flex items-center justify-center">
            <img src="./src/assets/HomePartners/partner1.png" alt="" />
          </div>
          <div className="px-3.75 flex items-center justify-center">
            <img src="./src/assets/HomePartners/partner2.png" alt="" />
          </div>
          <div className="px-3.75 flex items-center justify-center">
            <img src="./src/assets/HomePartners/partner3.png" alt="" />
          </div>
          <div className="px-3.75 flex items-center justify-center">
            <img src="./src/assets/HomePartners/partner4.png" alt="" />
          </div>
          <div className="px-3.75 flex items-center justify-center">
            <img src="./src/assets/HomePartners/partner5.png" alt="" />
          </div>
          <div className="px-3.75 flex items-center justify-center">
            <img src="./src/assets/HomePartners/partner6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
