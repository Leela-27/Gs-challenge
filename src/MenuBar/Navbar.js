import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    navigate('/login');
  };

  return (
    <div>
      <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Menu</h1>
        <div className="flex items-center">
          <button 
            onClick={toggleInfo} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Company Info
          </button>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </nav>
      {showInfo && (
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Company Information</h2>
          <p>Company: Geeksynergy Technologies Pvt Ltd</p>
          <p>Address: Sanjayanagar, Bengaluru-56</p>
          <p>Phone: XXXXXXXXX09</p>
          <p>Email: XXXXXX@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
