import { configureStore } from "@reduxjs/toolkit";
import applicationsSlice from "./applicationsSlice";

export default configureStore({
  reducer: {
    applicationsSlice: applicationsSlice,
  },
});
