import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

const JobApplicationsChart = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  // const weeklyData = {
  //   labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   datasets: [
  //     {
  //       label: "Weekly",
  //       data: [10, 20, 15, 30, 25, 35, 40],
  //       backgroundColor: "rgba(54, 162, 235, 0.6)",
  //     },
  //   ],
  // };

  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Applications Sent",
        data: [100, 200, 150, 300],
        backgroundColor: "rgba(114, 64, 194, 1)",
      },
    ],
  };

  const [applicationsData, setData] = useState(monthlyData);

  return (
    <div className="w-full h-64 p-4 mx-auto">
      <div className="flex gap-4 mb-4">
        {/* <button onClick={() => setData(monthlyData)}>Monthly</button> */}
      </div>
      <Bar
        data={applicationsData}
        options={{ responsive: true, maintainAspectRatio: false }}
        height={300}
      />
    </div>
  );
};
export default JobApplicationsChart;
