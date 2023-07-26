import Sidebar from "../components/Sidebar"
import { useDispatch } from "react-redux"
import { userLoggedOut } from "../redux/authenticationSlice"
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import LogoutIcon from '@mui/icons-material/Logout';

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
      {/* Sidebar */}
      <Sidebar />
      
      {/* Right Side Header */}
      <div className="flex-1 p-0">
        <div className="flex items-center justify-between">
          <h1 className="flex items-start p-8 text-3xl font-bold bg-white shadow-md">Dashboard</h1>
          <p className="block px-4 py-3 cursor-pointer" onClick={handleLogOut}>
            <LogoutIcon style={{ fontSize: 25 }} /> Sign Out
          </p>
        </div>
      </div>

      {/* Content */}
      {/* <div class="max-w-[45rem] h-[45rem] mx-auto text-center">
        <Pie data={data} />
      </div>  */}
    </div>
  )
}

export default Dashboard