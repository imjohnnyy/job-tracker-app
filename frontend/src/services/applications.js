import { ActionCreators } from "../redux/applicationsReducer";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://localhost:7043/Applications",
});

// HTTP Requests and API calls e.g. GET, POST, PUT, DELETE job applications from WEB API

export const GetApplications = async (dispatch) => {
    try {
        // GET all job applications from our Web API (API call)
        const { data } = await axiosInstance.get();
        
        // Dispatches an action to set the applications in the Redux store
        dispatch(ActionCreators.setApplications(data));

    } catch {
        console.log("Error");
    }
};


export const NewApplication = async (dispatch, application) => {
    try {
        // POST an new job application to our Web API (API call)
        const { data } = await axiosInstance.post("", application);

        // Dispatches an action to add a new application to the Redux store
        dispatch(ActionCreators.newApplication({ data }));
    } catch {
        console.log("Error");
    }
}


export const DeleteApplication = async (dispatch, application) => {
    try {
        // DELETE an job application from our Web API (API call)
         await axiosInstance.delete("", application);

        // Dispatches an action to delete an application from the Redux store
        dispatch(ActionCreators.deleteApplication(application));
    } catch {
        console.log("Error");
    }
}   

export const EditApplication = async (dispatch, application) => {
    try {
        // PUT an edited job application to our Web API (API call)
        await axiosInstance.put("", application);

        // Dispatches an action to edit an application from the Redux store
        dispatch(ActionCreators.editApplication(application)); 
    } catch {
        console.log("Error");
    }
}   

