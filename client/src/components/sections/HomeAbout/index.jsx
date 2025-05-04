import React from "react";

const HomeAbout = () => {
  return (
    <div className="flex flex-col">
      <div className="pt-37.5 px-10 mx-36 flex items-center justify-center">
        <div className="flex flex-col items-start justify-start p-2.5">
          <span className="font-semibold mb-0.25">/ about us /</span>
          <h2 className=" text-6xl font-sora  mb-5">
            Expert ai consulting for
            <br />
            transformative business
            <br />
            solutions with Neuros
          </h2>
          <p className="font-semibold leading-7.5 mb-7.5">
            Artificial Intelligence refers to the development of computer
            systems that can perform tasks that <br /> would typically require
            human intelligence. It involves the creation of algorithms and
            models that
            <br />
            enable machines to learn, reason, perceive, and make decisions.
          </p>
          <p className="font-semibold leading-7.5 mb-14">
            There are generally two types of AI: Narrow or Weak AI, which is
            designed to perform specific tasks, and <br />
            General or Strong AI, which possesses human-level intelligence and
            can handle a wide range of tasks.
          </p>
          <a className=" border-2 border-ui-orange px-6 py-3.5 rounded-4xl text-sm font-bold hover:bg-ui-orange transition duration-300">
            <i className="ri-arrow-right-s-line"></i> Explore More
          </a>
        </div>
      </div>
      <div className="py-37.5 mx-36 not-md:mx-0 px-10">
        <div className="p-2.5 flex flex-wrap gap-35">
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-sora text-ui-gray text-[200px] not-md:text-[100px] relative">
              95%
              <span className=" text-[200px] not-md:text-[100px] text-ui-orange absolute top-2 left-2">
                95%
              </span>
              <p className="absolute text-4xl font-bold text-ui-white top-65">
                Customer Satisfaction
              </p>
            </h2>

            <p className="mt-3 font-semibold leading-7.5">
              Achieved a 95% customer satisfaction rate across
              <br />
              all AI solutions.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-sora  text-[200px] not-md:text-[100px] text-ui-gray relative">
              $10mil
              <span className=" text-[200px] not-md:text-[100px] text-ui-orange  absolute top-2 left-2">
                $10mil
              </span>
              <p className="absolute text-4xl font-bold text-ui-white top-65">
                Cost Savings
              </p>
            </h2>

            <p className="mt-3 font-semibold leading-7.5">
              Delivered over $10 million in cost savings for
              <br />
              clients through optimized AI solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="px-12.5">
        <div className="flex w-full bg-fixed bg-[url(./src/assets/about-bg.png)] rounded-4xl h-200 justify-center items-center">
          <img className="h-13" src="./src/assets/logo2.png" alt="" />
        </div>
      </div>
      <div className="flex items-end justify-end mt-37.5 px-10">
        <div className="mx-18 p-2.5">
          <h2 className=" font-sora text-8xl leading-26">
            <span className=" text-ui-orange">2,000 companies</span>
            <br />
            use Neuro to
            <br />
            power their
            <br />
            integrations
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center mt-25 p-2.5">
        <img
          className="h-14 px-3.75"
          src="./src/assets/HomePartners/partner1.png"
          alt=""
        />
        <img
          className="h-14 px-3.75"
          src="./src/assets/HomePartners/partner2.png"
          alt=""
        />
        <img
          className="h-14 px-3.75"
          src="./src/assets/HomePartners/partner3.png"
          alt=""
        />
        <img
          className="h-14 px-3.75"
          src="./src/assets/HomePartners/partner4.png"
          alt=""
        />
        <img
          className="h-14 px-3.75"
          src="./src/assets/HomePartners/partner5.png"
          alt=""
        />
        <img
          className="h-14 px-3.75"
          src="./src/assets/HomePartners/partner6.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeAbout;
