import { setApplications, newApplication, editApplication, deleteApplication } from "../redux/applicationsSlice";
import axios from 'axios';


const axiosInstance = axios.create({    
    baseURL: `${process.env.REACT_APP_BASE_URL}/Applications`,
})

// Appends the JWT token to the Authorization header of the HTTP request such that we can access the endpoint in the Web API
axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
    return config;
});


// HTTP Requests and API calls e.g. GET, POST, PUT, DELETE job applications from WEB API

export const GetApplications = async (dispatch) => {
    try {
        // GET all job applications from our Web API (API call)
        const { data } = await axiosInstance.get();
        
        // Dispatches an action to set the applications in the Redux store
        dispatch(setApplications(data));

    } catch {
        console.log("Error: Could not retrieve job applications");
    }
};


export const NewApplication = async (dispatch, application, user) => {
    try {
        const newApplicationData = {
            ...application,
            user: {
                id: user.id,
                username: user.username,
                password: user.password, 
                firstName : user?.firstName,
                lastName : user?.lastName,
                email: user.email, 
            },
        };

        // POST a new job application to our Web API (API call)
        const { data } = await axiosInstance.post("", newApplicationData);
        // const { data } = await axiosInstance.post("", application);

        // Dispatches an action to add a new application to the Redux store
        console.log("The data is:" + data);
        dispatch(newApplication(application));
    } catch (error) {
        console.log("Error: Could not add the job application", error.response?.data || error.message);

    }
};

export const DeleteApplication = async (dispatch, application) => {
    try {
        // DELETE an job application from our Web API (API call)
         await axiosInstance.delete("", { data: {...application} });

        // Dispatches an action to delete an application from the Redux store
        dispatch(deleteApplication(application));
    } catch {
        console.log("Error: Could not delete the job application");
    }
}   

export const EditApplication = async (dispatch, application) => {
    try {
        // PUT an edited job application to our Web API (API call)
        await axiosInstance.put("", application);

        // Dispatches an action to edit an application from the Redux store
        dispatch(editApplication(application)); 
    } catch {
        console.log("Error: Could not edit the job application");
    }
}   

