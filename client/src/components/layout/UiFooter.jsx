import React from "react";
import { Link } from "react-router-dom";
import styles from "./UiFooter.module.css";

const UiFooter = () => {
  return (
    <footer className="mx-10 mb-12 flex flex-col justify-center items-center rounded-3xl bg-ui-black text-ui-off-white">
      <div className="w-full py-6 px-10">
        <div className="flex flex-wrap justify-around py-6">
          <div className="mt-13.5 mx-3.75">
            <Link to="/">
              <img
                className="h-5.25"
                src="../../src/assets/logo.png"
                alt="Neuros"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:gap-10">
            <div className="mt-13.5 mx-3.75">
              <h6 className="text-lg font-bold mb-5">Call Center</h6>
              <p className="mb-10 font-medium">
                <a
                  className="hover:text-ui-orange transition duration-300"
                  href="tel:800 100 975 20 34"
                >
                  800 100 975 20 34
                </a>
                <br />
                <a
                  className="hover:text-ui-orange transition duration-300"
                  href="tel:+ (123) 1800-234-5678"
                >
                  + (123) 1800-234-5678
                </a>
              </p>
              <h6 className="text-lg font-bold mb-5">Email</h6>
              <a
                className="hover:text-ui-orange transition duration-300 font-medium"
                href="mailto:neuros@mail.co"
              >
                neuros@mail.co
              </a>
            </div>
            <div className="mt-13.5 mx-3.75">
              <h6 className="text-lg font-bold mb-5">Our Location</h6>
              <p className="mb-10 font-medium ">
                USA, New York -1060
                <br />
                Str. First Avenue 1
              </p>
              <h6 className="text-lg font-bold mb-5">Social Media</h6>
              <ul className="flex">
                <li className="mr-5">
                  <a href="https://facebook.com">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li className="mx-5">
                  <a href="https://x.com">
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </li>
                <li className="mx-5">
                  <a href="https://linkedin.com">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li className="ml-5">
                  <a href="https://youtube.com">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center md:gap-30">
            <div className="mt-13.5 mx-3.75">
              <h6 className="text-lg font-bold mb-2">Company</h6>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    News & Media
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-13.5 mx-3.75">
              <h6 className="text-lg font-bold mb-2">Services</h6>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Deep learning solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Model evaluation
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Data Science Consult
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Neural Integration
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-ui-gray-light transition duration-300 font-medium"
                    to="#"
                  >
                    Real-time predicion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-6 px-40.5">
        <div className={styles.copyright}>Copyright</div>
      </div>
    </footer>
  );
};

export default UiFooter;
