import { configureStore } from "@reduxjs/toolkit";
import applicationsSlice from "./applicationsSlice";
import authenticationSlice from "./authenticationSlice";

export default configureStore({
  reducer: {
    applicationsSlice: applicationsSlice,
    authenticationSlice: authenticationSlice,
  },
});
