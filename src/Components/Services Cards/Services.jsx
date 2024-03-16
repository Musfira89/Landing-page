import React from "react";
import serviceData from "./constant";

const Services = () => {
  // Sample service data
  const services = serviceData;

  return (
    <div className="services-container">
      <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-center">
        OUR <span className="text-blue-400"> SERVICES</span>{" "}
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Do you need some help with something or do you have questions on some
        features?{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center p-48 pt-14  ">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const { icon, title, description } = service;

  // Define border color based on index
  let borderColor = "";
  if (index === 0) {
    borderColor = "border-blue-400 border-l-4";
  } else if (index === 1) {
    borderColor = "border-orange-400 border-b-4";
  } else if (index === 2) {
    borderColor = "border-blue-400 border-r-4";
  } else if (index === 3) {
    borderColor = "border-blue-400 border-r-4";
  } else if (index === 4) {
    borderColor = "border-orange-400 border-b-4";
  } else if (index === 5) {
    borderColor = "border-blue-400 border-l-4";
  }

  return (
    <div
      className={`bg-white p-12 m-2 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${borderColor}`}
    >
      <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-lg font-bold mb-2 text-blue-400 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Services;
