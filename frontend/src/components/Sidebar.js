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
        <nav className="mt-[5rem]">
          <ul className="space-y-3">
            <li>
              <a href="#dashboard" className="flex items-center justify-start py-2 text-lg font-semibold rounded-sm text-lightgray hover:text-white hover:bg-slate-500">
              <DashboardIcon className="my-1 ml-[10px] mr-[8px]" style={{ fontSize: '150%' }} /> Dashboard
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center justify-start py-2 text-lg font-semibold rounded-sm text-lightgray hover:text-white hover:bg-slate-500">
              <PostAddIcon className="my-1 ml-[9px] mr-[5px]" style={{ fontSize: '180%' }} /> Add Jobs
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center justify-start py-2 text-lg font-semibold rounded-sm text-lightgray hover:text-white hover:bg-slate-500">
                <AccountBoxIcon className="my-1 ml-[10px] mr-[8px]" style={{ fontSize: '150%' }}/> My Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>

     
    </div>
  );
};

export default Sidebar;
