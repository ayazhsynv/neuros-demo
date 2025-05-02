import React from "react";
import { Link } from "react-router-dom";
import styles from "./UiHeader.module.css";

const UiHeader = () => {
  return (
    <header>
      <div className="mx-10 my-4.5 h-[101px]  border-ui-gray border rounded-3xl flex items-center justify-between not-2xl:hidden">
        <div className="flex-1/6 max-w-42 max-h-full mx-3.75 my-5 flex items-center justify-between">
          <div className="mx-5">
            <i className="ri-function-line text-3xl"></i>
          </div>
          <div>
            <Link>
              <img
                className="h-6.25"
                src="../../src/assets/logo.png"
                alt="Neuros"
              />
            </Link>
          </div>
        </div>
        <div className="flex-4/6">
          <ul className="flex items-center justify-center gap-4.25 font-bold">
            <li className={styles.navhome}>
              <Link
                className=" text-ui-black bg-ui-white rounded-4xl px-4.5 py-2"
                to="/"
              >
                Home <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
              <div className={styles.navhome_dropdown}>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Artificial Intelligence</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Neural Networks</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">AI Agency</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Image Generator</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Voice Generator</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Chatbot</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">AI Solutions</Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">AI Marketing</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">AI Startup</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Vision</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">AI Consulting</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Video Voiceovover</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">AI Software / SaaS</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Science Lab</Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Creative Bureau</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">IT Services</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Business</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Gadget</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Application</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Light Version</Link>
                  </li>
                </ul>
                <div className="flex flex-col w-49  overflow-hidden">
                  <img
                    className=" w-full rounded-md object-cover "
                    src="src/assets/home-nav-light.png"
                    alt=""
                  />
                  <p className=" text-md font-bold">Light Version</p>
                </div>
              </div>
            </li>
            <li className={styles.navhome}>
              <Link
                className="px-4.5 py-2 hover:bg-ui-orange transition duration-300 rounded-4xl"
                to="#"
              >
                Pages <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
              <div className={styles.navhome_dropdown}>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">About</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Team</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Projects</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Careers</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Case Studies</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Pricing Plans</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Gallery Grid</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Gallery Masonry</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">FAQ</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Typography</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="/404">404 Page</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navhome}>
              <Link
                className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl"
                to="#"
              >
                Services <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
              <div className={styles.navhome_dropdown}>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Services Page</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Service Single</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navhome}>
              <Link
                className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl"
                to="#"
              >
                Shop <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
              <div className={styles.navhome_dropdown}>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Products List</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Product Single</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Cart</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Checkout</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Account</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navhome}>
              <Link
                className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl"
                to="/blog"
              >
                Blog <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
              <div className={styles.navhome_dropdown}>
                <ul className="flex flex-col gap-5 w-42.5 ">
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Blog Classic</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Blog Grid</Link>
                  </li>
                  <li className="hover:text-ui-orange transition duration-300">
                    <Link to="#">Blog Single</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl">
              <Link to="#">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1/6 mx-3.75 my-5 flex items-center justify-end">
          <div className="mr-5">
            <button className=" cursor-pointer hover:text-ui-gray-light transition duration-300">
              <i className="ri-search-line text-xl"></i>
            </button>
          </div>
          <div>
            <Link
              to="#"
              className=" border-2 border-ui-orange px-13 py-4.75 rounded-4xl text-sm font-bold hover:bg-ui-orange transition duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="2xl:hidden flex items-center justify-between">
        <div className="ml-3 my-3">
          <Link to="/">
            <img
              className="h-5.25"
              src="../../src/assets/logo.png"
              alt="Neuros"
            />
          </Link>
        </div>
        <div className="mr-3 my-3">
          <i className=" text-2xl ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

export default UiHeader;
