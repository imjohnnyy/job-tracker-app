import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import HamburgerNav from "../components/HamburgerNavbar";
import AccountModal from "../components/AccountModal"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AddApplications = () => {
  const [isAccountIconClicked, setIsAccountIconClicked] = useState(false);

  const handleToggleAccountModal = () => {
    setIsAccountIconClicked(!isAccountIconClicked);
  }
  return (
    <div class="md:flex bg-lightergray min-h-[150vh]">
      <ToastContainer />
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-4 bg-white shadow-md md:p-8">
          {/* Hamburger Menu for smaller devices */}
          <HamburgerNav />

          {/* Header Title */}
          <div className="flex items-start text-2xl font-bold ">
            <h1 className="md:ml-8">My Applications</h1>
          </div>

          {/* Sign Out button and Logo */}
          <p
            className="block px-2 py-1 cursor-pointer md:px-4 md:py-3"
            onClick={handleToggleAccountModal}
          >
            <AccountCircleIcon style={{ fontSize: 40 }} />
          </p>
        </header>

        {/* Job Application Form */}
        <div className="p-4 md:p-8 max-md:mt-4">
          <ApplicationForm />
          <ApplicationList />
        </div>
      </div>
      {isAccountIconClicked && (<AccountModal setIsAccountIconClicked={setIsAccountIconClicked} />)}
    </div>
  );
};

export default AddApplications;
