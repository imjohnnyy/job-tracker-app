import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

const JobApplicationsChart = ({ data }) => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  // Ensure chart data exists before using it
  const [applicationsData, setApplicationsData] = useState({
    labels: [],
    datasets: [
      {
        label: "Applications Sent",
        data: [],
        backgroundColor: "rgba(114, 64, 194, 1)",
      },
    ],
  });

  useEffect(() => {
    if (data?.labels?.length > 0 && data?.data?.length > 0) {
      setApplicationsData({
        labels: data.labels,
        datasets: [
          {
            label: "Applications Sent",
            data: data.data,
            backgroundColor: "rgba(114, 64, 194, 1)",
          },
        ],
      });
    }
  }, [data]); 

  // const monthlyData = {
  //   labels: ["Jan", "Feb", "Mar", "Apr"],
  //   datasets: [
  //     {
  //       label: "Applications Sent",
  //       data: [100, 200, 150, 300],
  //       backgroundColor: "rgba(114, 64, 194, 1)",
  //     },
  //   ],
  // };

  
  return (
    <div className="w-full h-64 p-4 mx-auto">
      <Bar
        // data={monthlyData}
        data={applicationsData}
        options={{ responsive: true, maintainAspectRatio: false }}
        height={250}
        width={475}
      />
    </div>
  );
};

export default JobApplicationsChart;
