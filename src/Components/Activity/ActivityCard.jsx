import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon from react-icons library

const ActivityCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-blue pb-5 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full" src={imageUrl} alt={heading} />
      <div className="px-6 py-4">
        <div className="text-gray-300 font-bold lg:text-6xl  mb-2">
          {heading}
        </div>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="text-blue-400 hover:text-blue-700 no-underline flex items-center"
        >
          Read More <FaArrowRight className="ml-1" />{" "}
          {/* Render the arrow icon */}
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
