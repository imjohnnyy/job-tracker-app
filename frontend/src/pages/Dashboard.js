import { useState } from "react";
import Sidebar from "../components/Sidebar"
import { useDispatch } from "react-redux"
import { userLoggedOut } from "../redux/authenticationSlice"
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isExpandNavbar, setIsExpandNavbar] = useState(false);
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(userLoggedOut())
    console.log("User has logged out");
  }

  // Navbar toggle function
  const handleNav = () => {
    setIsExpandNavbar(!isExpandNavbar);
  };

  // Navigation using React Router
  const navigate = useNavigate();


  // Data for the pie chart
  const data = {
    labels: ['Ongoing', 'Accepted', 'Rejected', 'Declined'],
    datasets: [{
      data: [3, 1, 5, 2],
      backgroundColor: [
        '#FCF55F', // Yellow for Ongoing status
        '#4F7942', // Green for Accepted status
        '#EE4B2B', // Red for Rejected status
        '#0096FF', // Blue for Declined status
      ]
    }]
  };

  return (
    <div className="flex h-screen bg-lightergray">   
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-8 bg-white shadow-md">
          <div className="flex items-start text-3xl font-bold">
            <h1 className="max-md:items-center max-md:justify-center max-md:ml-8">
              Dashboard
            </h1>
            
          </div>

          {/* Navigation option for smaller devices (Hamburger menu navbar) */}
          <div className="block px-4 py-3 md:hidden" onClick={handleNav}>
            <MenuIcon style={{ fontSize: 35 }} />
            <ul
              className={
                isExpandNavbar
                  ? "fixed left-0 top-0 w-[100%] h-full bg-white ease-in-out duration-500 flex flex-col items-center justify-center text-2xl text-gray font-semibold"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <div className={"flex ml-auto mr-12 mb-20 mt-[-120px]"}>
                <CloseIcon style={{ fontSize: 35 }} />
              </div>
              <li className={"py-5"}>
                <h1 onClick={() => navigate('/')} className={"hover:text-sky-500"}>
                  Dashboard
                </h1>
              </li>
              <li className={"py-5"}>
                <h1 href="#add-applications" onClick={() => navigate('/add-applications')} className={"hover:text-sky-500"}>
                  Add Jobs
                </h1>
              </li>
              <li className={"py-5"}>
                <h1 href="#myprofile" className={"hover:text-sky-500"}>
                  My Profile
                </h1>
              </li>
            </ul>
          </div>

          <p className="block px-4 py-3 cursor-pointer" onClick={handleLogOut}>
            <LogoutIcon style={{ fontSize: 25 }} /> Sign Out
          </p>
        </header>

        {/* Pie Chart */}
        <div className="p-8 mx-auto w-96 h-96">
          <Pie data={data} />
        </div>
      </div>


    </div>
  )
}

export default Dashboard