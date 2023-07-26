import Sidebar from "../components/Sidebar"
import { useDispatch } from "react-redux"
import { userLoggedOut } from "../redux/authenticationSlice"
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import LogoutIcon from '@mui/icons-material/Logout';
import HamburgerNav from "../components/HamburgerNavbar";


const Dashboard = () => {
  
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(userLoggedOut())
    console.log("User has logged out");
  }


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
        <div className="p-8 mx-auto w-96 h-96">
          <Pie data={data} />
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard