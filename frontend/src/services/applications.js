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
        // Dispatches an action to add a new application to the Redux store
        dispatch(ActionCreators.newApplication({id: 8, company: application.company, position: application.position, 
            city: application.city, date: application.date, type: application.type, status: application.status}));
    } catch {
        console.log("Error");
    }
}


export const DeleteApplication = async (dispatch, application) => {
    try {
        // Dispatches an action to delete an application from the Redux store
        dispatch(ActionCreators.deleteApplication(application.id));
    } catch {
        console.log("Error");
    }
}   

export const EditApplication = async (dispatch, application) => {
    try {
        // Dispatches an action to edit an application from the Redux store
        dispatch(ActionCreators.editApplication(application)); 
    } catch {
        console.log("Error");
    }
}   

