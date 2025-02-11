import { createSlice, createAction } from "@reduxjs/toolkit";

export const setApplicationsError = createAction("setApplicationsError");
export const newApplicationError = createAction("newApplicationError");
export const editApplicationError = createAction("newEditApplicationError");
export const deleteApplicationError = createAction("deleteApplicationError");

export const applicationsSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [], // Initial state with an empty array for job applications
  },
  reducers: {
    // Action: Set the job applications array to a new array
    setApplications: (state, action) => {
      return { ...state, applications: [...action.payload] };
    },
    // Action: Add a new job application to the applications array
    newApplication: (state, action) => {
      return {...state, applications: [...state.applications, action.payload]};
    },
    // Action: Edit an existing job application in the applications array
    editApplication: (state, action) => {
      const applications = state.applications.map((application) => {
        if (application.id === action.payload.id) {
          application = action.payload;
        }
        return application;
      });
      return { ...state, applications: [...applications] };
    },
    // Action: Delete an job application from the applications array
    deleteApplication: (state, action) => {
      const applications = state.applications.filter(
        (application) => application.id !== action.payload.id
      );
      return { ...state, applications: [...applications] };
    },
  },
});

// Export the action creators
export const {
  setApplications,
  newApplication,
  editApplication,
  deleteApplication,
} = applicationsSlice.actions;

// Export the reducer function
export default applicationsSlice.reducer;
