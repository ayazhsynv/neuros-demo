import React from "react";
import { Link } from "react-router-dom";

const HomeTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-37.5 flex flex-wrap">
        <div className="max-w-150 flex flex-col items-start justify-start p-5">
          <div className="mb-8.5">
            <h6 className="font-semibold mb-0.5">/ team /</h6>
            <h2 className="font-sora text-6xl leading-17">
              The Neural Network
              <br />
              experts : uniting
              <br />
              talent for intelligent
              <br />
              solutions
            </h2>
          </div>
          <div className="flex flex-col items-start justify-start mb-12">
            <h3 className="font-sora font-semibold text-8xl text-ui-gray relative mb-4">
              250+
              <p className="absolute text-ui-red top-1 left-1">250+</p>
            </h3>
            <p className=" text-xl">Awesome team members</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <Link
              className="px-5 py-3 border border-ui-orange hover:bg-ui-orange transition duration-300 rounded-4xl"
              to="#"
            >
              <i className="ri-arrow-right-s-line"></i> More About
            </Link>
          </div>
        </div>
        <div className=" p-5">
          <div className="mt-13 flex">
            <div className="p-5 gap-7 flex flex-col">
              <div className="border border-ui-gray rounded-4xl flex flex-col items-start font-sora justify-start">
                <div className="relative overflow-hidden rounded-4xl">
                  <img
                    className=" object-cover w-75 h-75 rounded-4xl"
                    src="./src/assets/HomeTeam/team1.png"
                    alt=""
                  />
                  <div className="absolute top-35 left-38">
                    <h3 className="font-sora font-semibold text-7xl rotate-270">
                      Neural
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-12 pb-11 px-9">
                  <Link className="mb-3 text-xl" to="#">
                    Alan Begham
                  </Link>
                  <p className=" text-sm text-ui-gray-light">/ CEO Neuro /</p>
                </div>
              </div>
              <div className="border border-ui-gray rounded-4xl flex flex-col items-start font-sora justify-start">
                <div className="relative overflow-hidden rounded-4xl">
                  <img
                    className=" object-cover w-75 h-75 rounded-4xl"
                    src="./src/assets/HomeTeam/team1.png"
                    alt=""
                  />
                  <div className="absolute top-35 left-38">
                    <h3 className="font-sora font-semibold text-7xl rotate-270">
                      Neural
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-12 pb-11 px-9">
                  <Link className="mb-3 text-xl" to="#">
                    Alan Begham
                  </Link>
                  <p className=" text-sm text-ui-gray-light">/ CEO Neuro /</p>
                </div>
              </div>
            </div>
            <div className="p-5 mt-16 gap-7 flex flex-col">
              <div className="border border-ui-gray rounded-4xl flex flex-col items-start font-sora justify-start">
                <div className="relative overflow-hidden rounded-4xl">
                  <img
                    className=" object-cover w-75 h-75 rounded-4xl"
                    src="./src/assets/HomeTeam/team1.png"
                    alt=""
                  />
                  <div className="absolute top-35 left-38">
                    <h3 className="font-sora font-semibold text-7xl rotate-270">
                      Neural
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-12 pb-11 px-9">
                  <Link className="mb-3 text-xl" to="#">
                    Alan Begham
                  </Link>
                  <p className=" text-sm text-ui-gray-light">/ CEO Neuro /</p>
                </div>
              </div>
              <div className="border border-ui-gray rounded-4xl flex flex-col items-start font-sora justify-start">
                <div className="relative overflow-hidden rounded-4xl">
                  <img
                    className=" object-cover w-75 h-75 rounded-4xl"
                    src="./src/assets/HomeTeam/team1.png"
                    alt=""
                  />
                  <div className="absolute top-35 left-38">
                    <h3 className="font-sora font-semibold text-7xl rotate-270">
                      Neural
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-12 pb-11 px-9">
                  <Link className="mb-3 text-xl" to="#">
                    Alan Begham
                  </Link>
                  <p className=" text-sm text-ui-gray-light">/ CEO Neuro /</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
