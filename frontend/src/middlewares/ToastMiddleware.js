import {
  newApplication,
  editApplication,
  deleteApplication,
  setApplicationsError,
  newApplicationError,
  editApplicationError,
  deleteApplicationError,
} from "../redux/applicationsSlice";
import {
  invalidLoginCredentials,
  invalidSignupCredentials,
} from "../redux/authenticationSlice";
import { toast } from "react-toastify";

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case newApplication.type:
      toast.success("New application added successfully");
      break;
    case editApplication.type:
      toast.success("Application edited successfully");
      break;
    case deleteApplication.type:
      toast.success("Application deleted successfully");
      break;
    case setApplicationsError.type:
      toast.error("Error loading applications");
      break;
    case newApplicationError.type:
      toast.error("Error adding new application");
      break;
    case editApplicationError.type:
      toast.error("Error editing application");
      break;
    case deleteApplicationError.type:
      toast.error("Error deleting application");
      break;
    case invalidLoginCredentials.type:
      toast.error("Invalid credentials, please try again");
      break;
    case invalidSignupCredentials.type:
      // Check if the action has a payload (error message)
      const errorMessage = action.payload || "Invalid sign up credentials, please try again";
      toast.error(errorMessage);
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
