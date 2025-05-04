import React from "react";
import { Link } from "react-router-dom";

const HomeReviews = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-37.5">
        <div className="flex flex-col items-center justify-center m-2.5 px-5 pb-10">
          <img className="mb-6" src="./src/assets/stars.png" alt="" />
          <h3 className="px-75 text-6xl text-center font-sora ">
            User stories: hear what others love about our{" "}
            <span className="text-ui-orange">WordPress themes</span>!
          </h3>
        </div>
      </div>
      <div className="px-10">
        <div className="px-10 flex gap-5">
          <div className="flex flex-col items-center justify-center gap-5 p-2.5">
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 p-2.5">
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 p-2.5">
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 p-2.5">
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
            <div className="border max-w-100 border-ui-gray p-10 flex flex-col font-sora items-start justify-start rounded-4xl">
              <h4 className=" text-xl">manojchouh</h4>
              <img className="h-3 my-3" src="./src/assets/stars.png" alt="" />
              <p className="font-light leading-7.5 ">
                Nice theme with excellent support from the developers. All of my
                doubts and requests were fixed within a day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-18 px-10">
        <div className=" rounded-4xl bg-[url(./src/assets/explore.png)] bg-center pt-30 pb-25 mb-10">
          <div className="mx-26 px-10 flex justify-between items-end">
            <div>
              <h3 className="p-2.5 text-6xl font-sora leading-17 ">
                Drive efficiency
                <br />
                & performance with
                <br />
                Neural Networks
              </h3>
            </div>
            <div>
              <Link
                className=" border-2 rounded-4xl px-5 py-3 hover:border-ui-orange hover:bg-ui-orange transition duration-300 "
                to="#"
              >
                <i className="ri-arrow-right-s-line"></i> Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
