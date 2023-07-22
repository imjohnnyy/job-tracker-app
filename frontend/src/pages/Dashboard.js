import Sidebar from "../components/Sidebar"
import { useDispatch } from "react-redux"
import { userLoggedOut } from "../redux/authenticationSlice"

const Dashboard = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(userLoggedOut())
    console.log("User has logged out");
  }
  
  return (
    <div className="flex h-screen bg-lightergray">   
      {/* Sidebar */}
      <Sidebar />
      
      {/* Right Side Header */}
      <div className="flex-1 p-0">
        <h1 className="flex items-start p-8 text-3xl font-bold bg-white shadow-md">Dashboard</h1>
        <button className="flex items-end p-8 text-3xl font-bold bg-white shadow-md" onClick={handleLogOut}>Sign out</button>
      </div>

      {/* Content */}
     
    </div>
  )
}

export default Dashboard