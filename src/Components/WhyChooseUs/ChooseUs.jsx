import React from "react";
import { BsSquare } from "react-icons/bs";

import Choose from "../../assets/images/Choose.png";
const ChooseUs = () => {
  return (
    <div className="relative pb-24">
      <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-center">
        Why <span className="text-blue-400">Choose Us</span>
      </h2>
      <p className="text-gray-600 mb-6 text-center ">
        Here's why choosing us makes a difference:
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 pl-36 flex justify-center mb-26 ">
          <ul className=" text-gray-500 text-lg">
            <li className="flex items-center mb-6">
              <BsSquare className="text-blue-500 border-blue-400 border-solid border-4 mr-3 p-1" />
              Personalized Insights with Actionable Recommendations
            </li>
            <li className="flex items-center mb-6">
              <BsSquare className="text-blue-500 border-blue-400 border-solid border-4 mr-3 p-1" />
              Empowering Self-Assessment at Home{" "}
            </li>
            <li className="flex items-center mb-6">
              <BsSquare className="text-blue-500 border-blue-400 border-solid border-4 mr-3 p-1" />
              Location-Based Suggestions for Professional Evaluation
            </li>
            <li className="flex items-center mb-6">
              <BsSquare className="text-blue-500 border-blue-400 border-solid border-4 mr-3 p-1" />
              Real-Time Progress Tracking{" "}
            </li>
            <li className="flex items-center mb-6">
              <BsSquare className="text-blue-500 border-blue-400 border-solid border-4 mr-3 p-1" />
              Guidance at Your Fingertips with a Virtual Chatbot
            </li>
            <li className="flex items-center mb-6">
              <BsSquare className="text-blue-500 border-blue-400 border-solid border-4 mr-3 p-1" />
              Visual Representation for a Clear Understanding{" "}
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src={Choose} alt="placeholder" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
