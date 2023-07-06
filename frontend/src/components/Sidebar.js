import React, { useState } from 'react';
import Logo from "../assets/images/logo-white.svg";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PostAddIcon from '@mui/icons-material/PostAdd';


const Sidebar = () => {

  return (
    // Remove this top div 
    <div className="flex h-screen bg-lightergray">   
      <div className="flex flex-col w-64 px-8 py-4 bg-gray">
        {/* Logo */}
        <div className="flex justify-between">
            <img src={Logo} alt="Logo" className="w-[175px] h-[60px] static" />
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="space-y-6">
            <li>
              <a href="#dashboard" className="block py-2 font-semibold rounded-sm text-lightgray hover:text-white hover:bg-slate-500">
              <DashboardIcon className="mb-1 mr-1"/> Dashboard
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 font-semibold rounded-sm text-lightgray hover:text-white hover:bg-slate-500">
              <PostAddIcon className="mb-1 ml-[-12px] mr-[2px]" style={{ fontSize: '175%' }}/> Add Jobs
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 font-semibold rounded-sm text-lightgray hover:text-white hover:bg-slate-500">
                <AccountBoxIcon className="mb-1 ml-[-5px] mr-[5px]"/> My Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>

     
    </div>
  );
};

export default Sidebar;
