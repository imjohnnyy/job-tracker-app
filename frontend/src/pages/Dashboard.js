import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationsPerCategory } from "../services/statistics";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import Sidebar from "../components/Sidebar";
import HamburgerNav from "../components/HamburgerNavbar";
import TotalApplicationsCard from "../components/TotalApplicationsCard";
import AccountModal from "../components/AccountModal";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  const [isAccountIconClicked, setIsAccountIconClicked] = useState(false);
  const handleToggleAccountModal = () => {
    setIsAccountIconClicked(!isAccountIconClicked);
  };

  // Dispatch function from Redux to trigger 'getApplicationsPerCategory' action
  const dispatch = useDispatch();
  const applicationsPerCategory = useSelector(
    (state) => state.statisticsSlice.applicationsPerCategory
  );

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

  // Data for the pie chart
  const data = {
    labels: pie.labels,
    datasets: [
      {
        data: pie.data,
        backgroundColor: [
          "#FCF55F", // Yellow
          "#4F7942", // Green
          "#EE4B2B", // Red
          "#0096FF", // Blue
        ],
      },
    ],
  };

  return (
    <div className="h-screen md:flex bg-lightergray">
      {/* Side navbar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Right Side Header */}
        <header className="relative flex items-center justify-between p-4 bg-white shadow-md md:p-8">
          {/* Hamburger Menu for smaller devices */}
          <HamburgerNav />

          {/* Header Title */}
          <div className="flex items-start text-2xl font-bold">
            <h1 className="md:ml-8">Dashboard</h1>
          </div>

          {/* Sign Out button and Logo */}
          <p
            className="block px-2 py-1 cursor-pointer md:px-4 md:py-3"
            onClick={handleToggleAccountModal}
          >
            <AccountCircleIcon style={{ fontSize: 40 }} />
          </p>
        </header>

        {/* Total Job Applications Card */}
        <TotalApplicationsCard />

        {/* Pie Chart */}
        <div className="p-4 mx-auto my-4 mt-12 bg-white rounded-lg shadow-md md:my-auto md:mx-6 md:mr-8">
          <h1 className="flex items-start ml-2 text-2xl font-bold">
            My Statistics
          </h1>
          <div className="w-full p-2 mx-auto md:p-8 md:w-96 h-80 md:h-96">
            <Pie data={data} />
          </div>
        </div>
      </div>
      {isAccountIconClicked && (<AccountModal setIsAccountIconClicked={setIsAccountIconClicked} />)}
    </div>
  );
};

export default Dashboard;
