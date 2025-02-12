import {
  setApplications,
  newApplication,
  editApplication,
  deleteApplication,
  setApplicationsError,
  newApplicationError,
  editApplicationError,
  deleteApplicationError,
} from "../redux/applicationsSlice";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Applications`,
});

// Appends the JWT token to the Authorization header of the HTTP request such that we can access the endpoint in the Web API
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: "Bearer " + sessionStorage.getItem("token"),
  };
  return config;
});

// HTTP Requests and API calls e.g. GET, POST, PUT, DELETE job applications from WEB API

export const GetApplications = async (dispatch, currentPage, itemsPerPage) => {
  try {
    // Fetch data from the API with pagination
    const { data } = await axiosInstance.get(`?page=${currentPage}&limit=${itemsPerPage}`);

    // Dispatch both applications and total count to Redux
    dispatch(setApplications({
      applications: data.applications,  // the array of applications
      total: data.totalCount            // the total count for pagination
    }));
  } catch (error) {
    dispatch(setApplicationsError());
  }
};


export const NewApplication = async (dispatch, application) => {
  try {
    // POST a new job application to our Web API (API call)
     const { data } = await axiosInstance.post("", application);

    // Dispatches an action to add a new application to the Redux store
    console.log("The data is:" + data);
    dispatch(newApplication(data));
  } catch (error) {
    dispatch(newApplicationError());
    console.log(
      "Error: Could not add the job application",
      error.response?.data || error.message
    );
  }
};

export const DeleteApplication = async (dispatch, application) => {
  try {
    // DELETE an job application from our Web API (API call)
    await axiosInstance.delete("", { data: { ...application } });

    // Dispatches an action to delete an application from the Redux store
    dispatch(deleteApplication(application));
  } catch {
    dispatch(deleteApplicationError());
  }
};

export const EditApplication = async (dispatch, application) => {
  try {
    // PUT an edited job application to our Web API (API call)
    await axiosInstance.put("", application);

    // Dispatches an action to edit an application from the Redux store
    dispatch(editApplication(application));
  } catch {
    dispatch(editApplicationError());
  }
};
