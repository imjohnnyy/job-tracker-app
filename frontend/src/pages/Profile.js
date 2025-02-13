import { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import HamburgerNav from "../components/HamburgerNavbar";
import ProfileForm from "../components/PofileForm";
import AccountModal from "../components/AccountModal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const [isAccountIconClicked, setIsAccountIconClicked] = useState(false);
  const userDetails = useSelector((state) => state.userSlice.userData);

  const handleToggleAccountModal = () => {
    setIsAccountIconClicked(!isAccountIconClicked);
  };
  
  return (
    <div className="h-screen md:flex bg-lightergray">
      <ToastContainer />
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-4 bg-white shadow-md md:p-8">
          {/* Hamburger Menu for smaller devices */}
          <HamburgerNav />

          {/* Header Title */}
          <div className="flex items-start text-2xl font-bold">
            <h1 className="md:ml-8">My Profile</h1>
          </div>

          {/* Sign Out button and Logo */}
          <p
            className="block px-2 py-1 cursor-pointer md:px-4 md:py-3"
            onClick={handleToggleAccountModal}
          >
            <AccountCircleIcon style={{ fontSize: 40 }} />
          </p>
        </header>

        {/* Profile details */}
        <div className="p-4 md:p-8 max-md:mt-4">
          <h1 className="flex text-2xl font-semibold align-left md:ml-8">
            Hi {userDetails.firstName} 👋
          </h1>
          <ProfileForm />
        </div>
      </div>
      {isAccountIconClicked && (<AccountModal setIsAccountIconClicked={setIsAccountIconClicked} />)}
    </div>
  );
};

export default Profile;
