import React from "react";
import { Link } from "react-router-dom";

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
            <li className="text-ui-black bg-ui-white rounded-4xl px-4.5 py-2">
              <Link to="/">
                Home <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
            </li>
            <li className="px-4.5 py-2 hover:bg-ui-orange transition duration-300 rounded-4xl">
              <Link to="#">
                Pages <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
            </li>
            <li className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl">
              <Link to="#">
                Services <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
            </li>
            <li className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl">
              <Link to="#">
                Shop <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
            </li>
            <li className="px-4.5 py-2  hover:bg-ui-orange transition duration-300 rounded-4xl">
              <Link to="/blog">
                Blog <i className=" ri-arrow-drop-down-fill"></i>
              </Link>
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
