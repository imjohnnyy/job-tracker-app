import Sidebar from "../components/Sidebar";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import LogoutIcon from '@mui/icons-material/Logout';
import HamburgerNav from "../components/HamburgerNavbar";
import { useDispatch } from "react-redux"
import { userLoggedOut } from "../redux/authenticationSlice"

const AddApplications = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(userLoggedOut())
    console.log("User has logged out");
  }

 
  return (
    <div class="md:flex bg-lightergray min-h-[150vh]">
    {/* Sidebar */}
    <Sidebar />
  
    <div className="flex flex-col flex-1">
      {/* Right Side Header */}
      <header className="relative flex items-center justify-between p-4 bg-white shadow-md md:p-8">
        {/* Hamburger Menu for smaller devices */}
        <HamburgerNav />
  
        {/* Header Title */}
        <div className="flex items-start text-2xl font-bold ">
          <h1 className="md:ml-8">
            My Applications
          </h1>
        </div>
  
        {/* Sign Out button and Logo */}
        <p className="block px-2 py-1 cursor-pointer md:px-4 md:py-3" onClick={handleLogOut}>
          <LogoutIcon style={{ fontSize: 32}} />
        </p>
      </header>
  
      {/* Job Application Form */}
      <div className="p-4 md:p-8 max-md:mt-4">
        <ApplicationForm />
        <ApplicationList />
      </div>
    </div>
  </div>
  );
};

export default AddApplications;
