import axios from 'axios';
import { setApplicationsPerCategory } from '../redux/statisticsSlice';

const axiosInstance = axios.create({    
    baseURL: `${process.env.REACT_APP_BASE_URL}/statistics`,
})

// Appends the JWT token to the Authorization header of the HTTP request such that we can access the endpoint in the Web API.
axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
    return config;
});

export const getApplicationsPerCategory = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();  // API call to our endpoint (https://localhost:7043/statistics) for the GET method to retrieve stats data.
        dispatch(setApplicationsPerCategory(data)); // Dispatches an action to set the job applications per category in the Redux store.
    } catch (error) {
        console.log("Error" + error)
    }
};