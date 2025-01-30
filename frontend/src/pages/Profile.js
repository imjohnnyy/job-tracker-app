import Sidebar from "../components/Sidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import HamburgerNav from "../components/HamburgerNavbar";
import ProfileForm from "../components/PofileForm";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector to access Redux state
import { userLoggedOut } from "../redux/authenticationSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userSlice.userData);

  const handleLogOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <div className="md:flex bg-lightergray min-h-[150vh]">
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
            onClick={handleLogOut}
          >
            <LogoutIcon style={{ fontSize: 32 }} />
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
    </div>
  );
};

export default Profile;
