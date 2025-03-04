import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApplicationsPerCategory,
  getApplicationsPerMonth,
} from "../services/statistics";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import Sidebar from "../components/Sidebar";
import HamburgerNav from "../components/HamburgerNavbar";
import TotalApplicationsCard from "../components/TotalApplicationsCard";
import AccountModal from "../components/AccountModal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import JobApplicationsChart from "../components/JobApplicationsChart";

const Dashboard = () => {
  const [isAccountIconClicked, setIsAccountIconClicked] = useState(false);
  const [parsedProfileInfo, setParsedProfileInfo] = useState({});
  const [parsedUserInfo, setParsedUserInfo] = useState({});
  const userDetails = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails && userDetails.firstName) {
      sessionStorage.setItem(
        "userInfo",
        JSON.stringify({
          username: userDetails.username,
          email: userDetails.email,
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
        })
      );
    }
  }, [userDetails]);

  useEffect(() => {
    const profileData = sessionStorage.getItem("profileData");
    if (profileData) {
      setParsedProfileInfo(JSON.parse(profileData));
    } else {
      const userInfo = sessionStorage.getItem("userInfo");
      setParsedUserInfo(JSON.parse(userInfo));
    }
  }, [userDetails]);

  const handleToggleAccountModal = () => {
    setIsAccountIconClicked(!isAccountIconClicked);
  };

  const applicationsPerCategory = useSelector(
    (state) => state.statisticsSlice.applicationsPerCategory
  );
  const applicationsPerMonth = useSelector(
    (state) => state.statisticsSlice.applicationsPerMonth
  );

  const [pie, setPie] = useState({
    labels: [],
    data: [],
  });

  const [barData, setBarData] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    // Extracting the categories and counts from the applicationsPerCategory object
    const categories = Object.keys(applicationsPerCategory);
    const counts = Object.values(applicationsPerCategory);

    setPie({ labels: categories, data: counts });

    // Extracting the months and counts from the applicationsPerMonth object
    const months = Object.keys(applicationsPerMonth);
    // Convert "YYYY-MM" to "Month" format
    const monthsLabel = months.map(dateString => {
      const [year, month] = dateString.split("-"); 
      const date = new Date(year, month - 1); 
      return new Intl.DateTimeFormat('en', { month: 'long' }).format(date); 
  });
  
    const monthlyJobApplicationsCount = Object.values(applicationsPerMonth);

    setBarData({ labels: monthsLabel, data: monthlyJobApplicationsCount });

  }, [applicationsPerCategory, applicationsPerMonth]);

  useEffect(() => {
    getApplicationsPerCategory(dispatch);
    getApplicationsPerMonth(dispatch);
  }, []);


  // Mapping categories to corresponding colors
  const categoryColors = {
    Ongoing: "#FCF55F", // Yellow
    Accepted: "#4F7942", // Green
    Rejected: "#EE4B2B", // Red
    Declined: "#0096FF", // Blue
  };

  const mappedColors = pie.labels.map(
    (label) => categoryColors[label] || "#000000"
  );

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

        <h1 className="flex mt-6 text-2xl font-semibold align-left md:ml-8 max-md:justify-center">
          Welcome back {parsedUserInfo.firstName || parsedProfileInfo.firstName}{" "}
          👋
        </h1>
        <TotalApplicationsCard />

        {/* Charts Row */}
        <div className="flex flex-col gap-6 mt-8 md:flex-row md:mx-6">
          {/* Pie Chart */}
          <div className="flex items-center justify-center w-full p-4 bg-white rounded-lg shadow-md md:w-1/2 max-md:w-[90%] max-md:ml-7">
            <div className="flex flex-col items-center mt-6">
              <h1 className="mb-4 text-2xl font-bold">
                Monthly Job Applications
              </h1>
              <div className="flex justify-center w-full">
                <div className="min-w-[400px] min-h-[400px] max-w-[400px] max-h-[400px] md:min-w-[475px] md:max-w-[475px]">
                  <JobApplicationsChart data={barData} />
                </div>
              </div>
            </div>
          </div>

          {/* Job Applications Chart */}
          <div className="flex items-center justify-center w-full p-4 bg-white rounded-lg shadow-md md:w-1/2 max-md:w-[90%] max-md:ml-7 max-md:mb-6">
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-2xl font-bold">
                Job Applications Summary
              </h1>
              <div className="flex justify-center w-full">
                <div className="min-w-[350px] min-h-[350px] max-w-[350px] max-h-[350px]">
                  <Pie data={data} />
                </div>
              </div>
            </div>
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
