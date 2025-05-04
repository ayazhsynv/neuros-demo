import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div>
      <div className="p-5 flex-1/4 flex flex-col items-start justify-start">
        <h3 className=" text-xl font-semibold mb-2">{title}</h3>
        <p className="leading-7.5 mb-8 text-ui-gray-light">{description}</p>
        <span className="text-3xl bg-ui-white rounded-2xl p-3 text-ui-gray-light">
          <i className={icon}></i>
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
