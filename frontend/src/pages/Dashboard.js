import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-lightergray">   
      {/* Sidebar */}
      <Sidebar />
      
      {/* Right Side Header */}
      <div className="flex-1 p-0">
        <h1 className="flex items-start p-8 text-3xl font-bold bg-white ">Dashboard</h1>
      </div>

      {/* Content */}

    </div>
  )
}

export default Dashboard