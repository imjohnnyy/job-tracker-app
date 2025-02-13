import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationsPerCategory } from "../services/statistics";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import Sidebar from "../components/Sidebar";
import HamburgerNav from "../components/HamburgerNavbar";
import TotalApplicationsCard from "../components/TotalApplicationsCard";
import AccountModal from "../components/AccountModal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Dashboard = () => {
  const [isAccountIconClicked, setIsAccountIconClicked] = useState(false);
  const handleToggleAccountModal = () => {
    setIsAccountIconClicked(!isAccountIconClicked);
  };

  const dispatch = useDispatch();
  const applicationsPerCategory = useSelector(
    (state) => state.statisticsSlice.applicationsPerCategory
  );

  const [pie, setPie] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    const categories = Object.keys(applicationsPerCategory);
    const counts = Object.values(applicationsPerCategory);

    setPie({
      labels: categories,
      data: counts,
    });
  }, [applicationsPerCategory]);

  useEffect(() => {
    getApplicationsPerCategory(dispatch);
  }, []);

  // Mapping categories to corresponding colors
  const categoryColors = {
    Ongoing: "#FCF55F", // Yellow
    Accepted: "#4F7942", // Green
    Rejected: "#EE4B2B", // Red
    Declined: "#0096FF", // Blue
  };

  // Dynamically map the colors based on category labels
  const mappedColors = pie.labels.map(
    (label) => categoryColors[label] || "#000000"
  ); // Default to black if no color is found
  
  const data = {
    labels: pie.labels,
    datasets: [
      {
        data: pie.data,
        backgroundColor: mappedColors,
      },
    ],
  };

  return (
    <div className="h-screen md:flex bg-lightergray">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <header className="relative flex items-center justify-between p-4 bg-white shadow-md md:p-8">
          <HamburgerNav />
          <div className="flex items-start text-2xl font-bold">
            <h1 className="md:ml-8">Dashboard</h1>
          </div>
          <p
            className="block px-2 py-1 cursor-pointer md:px-4 md:py-3"
            onClick={handleToggleAccountModal}
          >
            <AccountCircleIcon style={{ fontSize: 40 }} />
          </p>
        </header>

        <TotalApplicationsCard />

        <div className="p-4 mx-auto my-4 mt-12 bg-white rounded-lg shadow-md md:my-auto md:mx-6 md:mr-8">
          <h1 className="flex items-start ml-2 text-2xl font-bold">
            My Statistics
          </h1>
          <div className="w-full p-2 mx-auto md:p-8 md:w-96 h-80 md:h-96">
            <Pie data={data} />
          </div>
        </div>
      </div>
      {isAccountIconClicked && (
        <AccountModal setIsAccountIconClicked={setIsAccountIconClicked} />
      )}
    </div>
  );
};

export default Dashboard;
