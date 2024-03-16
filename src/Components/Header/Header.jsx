import React from 'react';
import Logo from '../../assets/images/logo.png'; // Import your logo image

const Header = () => {
  return (
    <div className=" py-4 pb-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" flex items-start">
        <img src={Logo} alt="logo" width={170} height={90} />
        </div>
        <nav className="bg-white border rounded-xl px-14 py-2">
          {/* Navbar items go here */}
          <ul className="flex items-center space-x-4 p-2">
            <li className="text-blue-400 font-semibold text-lg">HOME</li>
            <li className="text-blue-400 font-semibold text-lg">ACTIVITY</li>
            <li className="text-blue-400 font-semibold text-lg">SERVICES</li>
            <li className="text-blue-400 font-semibold text-lg">FAQ</li>
            <li className="text-blue-400 font-semibold text-lg">ABOUT US</li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-400 text-white py-2 px-9 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">ADMIN</button>
          <button className="bg-orange-500 text-white py-2 px-9 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">USER</button>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
