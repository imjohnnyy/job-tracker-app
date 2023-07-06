import React, { useState } from 'react';

const Sidebar = () => {


  return (
    <div className="flex h-screen bg-lightergray">
      {/* Sidebar */}
      <div className="flex flex-col w-64 px-8 py-4 bg-gray">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Sidebar</h1>
          <button
            className="block focus:outline-none"
          >
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="space-y-6">
            <li>
              <a href="#dashboard" className="block text-gray-500 hover:text-gray-800">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#about" className="block text-gray-500 hover:text-gray-800">
                Add Application
              </a>
            </li>
          </ul>
        </nav>
      </div>

     
    </div>
  );
};

export default Sidebar;
