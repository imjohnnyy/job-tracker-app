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
    <div class="flex bg-lightergray min-h-[150vh]">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-8 bg-white shadow-md">

          {/* Hamburger Menu for smaller devices */}
          <HamburgerNav />

          {/* Header Title */}
          <div className="flex items-start text-3xl font-bold">
            <h1 className="max-md:items-center max-md:justify-center max-md:ml-8">
              My Job Applications
            </h1>
          </div>

          {/* Sign Out button and Logo */}
          <p className="block py-3 pl-0 cursor-pointer max-md:w-1/3 max-md:mr-[-2rem]" onClick={handleLogOut}>
            <LogoutIcon style={{ fontSize: 25 }} /> Sign Out
          </p>
        </header>

        {/* Job Application Form */}
        <div className="h-64 p-8">
          <ApplicationForm />
          <ApplicationList />
        </div>
      </div>
    </div>
  );
};

export default AddApplications;
