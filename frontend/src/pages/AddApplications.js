import Sidebar from "../components/Sidebar"
import ApplicationForm from "../components/ApplicationForm"

const AddApplications = () => {

  return (
    <div className="flex h-screen bg-lightergray">   
      {/* Sidebar */}
      <Sidebar />
      
      {/* Right Side Header */}
      <div className="flex-1 p-0">
        <h1 className="flex items-start p-8 text-3xl font-bold bg-white ">Add Job Applications</h1>
      </div>

      {/* Content */}
      <ApplicationForm />
    </div>
  )
}

export default AddApplications