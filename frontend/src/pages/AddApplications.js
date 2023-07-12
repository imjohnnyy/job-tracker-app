import Sidebar from "../components/Sidebar"
import ApplicationForm from "../components/ApplicationForm"

const AddApplications = () => {
    return (
      <div className="flex h-screen bg-lightergray">
        {/* Sidebar */}
        <Sidebar />
  
        <div className="flex flex-col flex-1">
          {/* Right Side Header */}
          <header className="relative p-8 bg-white shadow-md">
            <h1 className="flex items-start text-3xl font-bold">Add Job Applications</h1>
          </header>
  
          {/* Job Application Form */}
          <div className="h-64 p-8">
            <ApplicationForm />
          </div>
        </div>
      </div>
    );
  };

export default AddApplications