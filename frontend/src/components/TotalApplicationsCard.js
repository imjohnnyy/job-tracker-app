import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getApplicationsPerCategory } from "../services/statistics";
import SendIcon from '@mui/icons-material/Send';


const TotalAppsCard = () => {

  // Dispatch function from Redux to trigger 'getApplicationsPerCategory' action
  const dispatch = useDispatch()

  const applicationsPerCategory = useSelector((state) => state.statisticsSlice.applicationsPerCategory);
  
  // Calculates the total job applications added by the user
  const totalJobApps = Object.values(applicationsPerCategory).reduce((acc, curr) => acc + curr, 0);

  // Fetches the 'applicationsPerCategory' data from Redux store when the component mounts
  useEffect(() => {
    getApplicationsPerCategory(dispatch);
  }, []);


  return (
    <div class="p-6 my-auto mx-auto bg-white shadow-md">
    <div class="flex flex-col items-start">
      <div class="w-16 h-16 p-4 bg-[#e0e0e0] rounded-full flex items-center justify-center">
        <SendIcon style={{fontSize: 35, color: "#2d2e32", marginLeft: 6 }}/>    
      </div>
      <h1 class="mt-2 text-lg font-bold"> {totalJobApps} {totalJobApps < 2 ? 'Job Application Sent' : 'Job Applications Sent'} </h1>
    </div>
  </div>
  )
}
export default TotalAppsCard
