import Sidebar from "../components/Sidebar";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import HamburgerNav from "../components/HamburgerNav";


const AddApplications = () => {

  return (
    <div class="flex bg-lightergray min-h-[150vh]">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-8 bg-white shadow-md">
          <div className="flex items-start text-3xl font-bold">
            <h1 className="max-md:items-center max-md:justify-center max-md:ml-8">
              Add Job Applications
            </h1>
          </div>
         <HamburgerNav />
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
