import axios from "axios";
import { userAuthenticated } from "../redux/authenticationSlice";


const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});


export const SignUp = async (dispatch, userCredentials) => {
    try {
        // Makes a POST request to the "/signup" endpoint with the provided user credentials
        const { data } = await axiosInstance.post("/signup", userCredentials);

        // If the request is successful, dispatch the userAuthenticated action with the returned data
        dispatch(userAuthenticated(data));
    } catch {
        console.log("Error: User already exists");
    }
};

export const SignIn = async (dispatch, userCredentials) => {
    try {
        // Makes a POST request to the "/signin" endpoint with the provided user credentials
        const { data } = await axiosInstance.post("/signin", userCredentials);

        // If the request is successful, dispatch the userAuthenticated action with the returned data
        dispatch(userAuthenticated(data));
    } catch {
        console.log("Error: Incorrect username or password");
    }
};
