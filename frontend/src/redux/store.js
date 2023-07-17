import { configureStore } from "@reduxjs/toolkit";
import applicationsReducer from "./applicationsReducer";

export default configureStore({
  reducer: {
    applicationsReducer: applicationsReducer,
  },
});
