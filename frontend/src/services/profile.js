import axios from "axios";
import { updateProfile, updateProfileError } from "../redux/profileSlice";

const axiosInstance = axios.create({    
  baseURL: `${process.env.REACT_APP_BASE_URL}/Profile`,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: "Bearer " + sessionStorage.getItem("token"),
  };
  return config;
});

export const UpdateProfile = async (dispatch, profile) => {
  try {
    // PUT an updated profile to our Web API (API call)
    await axiosInstance.put("", profile);

    // Dispatches an action to update the profile from the Redux store
    dispatch(updateProfile(profile));
  } catch (error) {
    console.log("Error: Could not update the profile", error.response?.data || error.message);
    dispatch(updateProfileError());
  }
};
