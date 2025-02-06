import axios from "axios";
import {
  invalidLoginCredentials,
  invalidSignupCredentials,
  userAuthenticated,
} from "../redux/authenticationSlice";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, userCredentials) => {
  try {
    // Makes a POST request to the "/signup" endpoint with the provided user credentials
    const { data } = await axiosInstance.post("/signup", userCredentials);

    // If the request is successful, dispatch the userAuthenticated action with the returned data
    dispatch(userAuthenticated(data));
  } catch (error) {
    // Handle server response errors
    const { status, data } = error.response;

    // Handle specific error statuses (example: username or email already in use)
    if (status === 409) {
      if (data.message.includes("This username already exists!")) {
        dispatch(invalidSignupCredentials("Username is already taken."));
      } else if (
        data.message.includes("This email address is already taken!")
      ) {
        dispatch(invalidSignupCredentials("Email is already in use."));
      } else {
        dispatch(
          invalidSignupCredentials("Invalid input. Please check your details.")
        );
      }
    } else if (status === 400) {
      if (data.message.includes("Username is required!")) {
        dispatch(invalidSignupCredentials("Username is required."));
      } else if (data.message.includes("Email is required!")) {
        dispatch(invalidSignupCredentials("Email is required."));
      } else {
        dispatch(
          invalidSignupCredentials(
            "Please ensure all required fields are filled."
          )
        );
      }
    } else {
      dispatch(
        invalidSignupCredentials("An error occurred. Please try again later.")
      );
    }
  }
};

export const SignIn = async (dispatch, userCredentials) => {
  try {
    // Makes a POST request to the "/signin" endpoint with the provided user credentials
    const { data } = await axiosInstance.post("/signin", userCredentials);

    // If the request is successful, dispatch the userAuthenticated action with the returned data
    dispatch(userAuthenticated(data));
  } catch {
    dispatch(invalidLoginCredentials("Invalid credentials, please try again"));
  }
};
