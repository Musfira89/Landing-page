import React from "react";
import logo from "../../assets/images/logo.png";
import Qrcode from "../../assets/images/Qrcode.png";

const Footer = () => {
  return (
    <div className="flex flex-col px-0 py-8 relative">
      {/* Blue border at the top of the footer */}
      <div
        className="absolute top-0 left-0 right-0 h-16"
        style={{
          background:
            "linear-gradient(to right, #4EABD9, #53AFE7, transparent)",
        }}
      ></div>

      {/* Top Footer */}
      <div className="flex flex-col items-start gap-10 xl:gap-0 xl:flex-row xl:items-start py-24 mt-8">
        {/* First Section */}
        <div className="flex flex-col gap-4 xl:w-2/6 ">
          <img src={logo} alt="logo" width={350} height={100} />
        </div>

        {/* Second Section */}
        <div className="flex flex-col xl:w-1/6 gap-5">
          <h1 className="text-blue-400 font-bold  text-3xl">Navigations</h1>
          <ul className="text-lg text-gray-700 flex flex-col gap-4">
            <li>Home</li>
            <li>Services</li>
            <li> FAQ'S</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col xl:w-1/6 gap-5">
          <h1 className="text-blue-400 font-bold text-3xl">Services</h1>
          <ul className="text-lg text-gray-700 flex flex-col gap-4">
            <li>Self Assessment</li>
            <li>Location Suggestions</li>
            <li>Therapist Bot</li>
            <li>Track Progress</li>
            <li>Visual Representation</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col xl:w-1/6 gap-5">
          <h1 className="text-blue-400 font-bold text-3xl">Helpline</h1>
          <ul className=" text-gray-700 flex flex-col gap-4">
            <li>+92-308-2220203 (WhatsApp)</li>
            <h1 className=" text-blue-400 font-bold text-3xl">QR Code</h1>
            <img src={Qrcode} alt="logo" width={100} height={50} />
          </ul>
        
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" bottom-4 left-0 w-full bg-white border-t-2 border-gray-500/40 py-3 text-gray-700">
        <p className=" text-lg text-center text-gray-600">
          © 2024 Base. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
