import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { getApplicationsPerCategory } from "../services/statistics";
import { userLoggedOut } from "../redux/authenticationSlice"
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import LogoutIcon from '@mui/icons-material/Logout';
import HamburgerNav from "../components/HamburgerNavbar";


const Dashboard = () => {

  // Dispatch function from Redux to trigger 'getApplicationsPerCategory' action
  const dispatch = useDispatch()
  
  const applicationsPerCategory = useSelector((state) => state.statisticsSlice.applicationsPerCategory);

  const [pie, setPie] = useState({
    labels: [],
    data: [],
  });

  // Updates the 'pie' state when 'applicationsPerCategory' changes
  useEffect(() => {
    const categories = Object.keys(applicationsPerCategory);
    const counts = Object.values(applicationsPerCategory);
    
     // Update the 'pie' state with the extracted data
    setPie({
      labels: categories,
      data: counts,
    });

  }, [applicationsPerCategory]);

  // Fetches the 'applicationsPerCategory' data from Redux store when the component mounts
  useEffect(() => {
    getApplicationsPerCategory(dispatch);
  }, []);

  const handleLogOut = () => {
    dispatch(userLoggedOut())
  }


  // Data for the pie chart
  const data = {
    labels: pie.labels,
    datasets: [{
      data: pie.data,
      backgroundColor: [
        '#FCF55F', // Yellow 
        '#4F7942', // Green 
        '#EE4B2B', // Red 
        '#0096FF', // Blue 
      ]
    }]
  };

  return (
    <div className="flex h-screen bg-lightergray">   
      {/* Side navbar */}
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-8 bg-white shadow-md">
  
          {/* Hamburger Menu for smaller devices */}
          <HamburgerNav />
          
          {/* Header Title */}
          <div className="flex items-start text-3xl font-bold">
            <h1 className="max-md:items-center max-md:justify-center max-md:ml-8">
              Dashboard
            </h1>
          </div>

          {/* Sign Out button and Logo */}
          <p className="block px-4 py-3 cursor-pointer" onClick={handleLogOut}>
            <LogoutIcon style={{ fontSize: 25 }} /> Sign Out
          </p>
        </header>

        {/* Pie Chart */}
        <div className="p-4 mx-auto my-auto bg-white rounded-lg shadow-md">
          <h1 className="flex ml-2 text-2xl font-bold item-start">Activity</h1>
          <div className="p-8 mx-auto w-96 h-96">
            <Pie data={data} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard