import { createSlice, createAction } from "@reduxjs/toolkit";

export const setApplicationsError = createAction("setApplicationsError");
export const newApplicationError = createAction("newApplicationError");
export const editApplicationError = createAction("editApplicationError");
export const deleteApplicationError = createAction("deleteApplicationError");

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    total: 0,  // Total count for pagination
  },
  reducers: {
    setApplications: (state, action) => {
      return { 
        ...state, 
        applications: action.payload.applications,
        total: action.payload.total 
      };
    },
    // Action to add a new job application to the applications array
    newApplication: (state, action) => {
      return {
        ...state,
        applications: [...state.applications, action.payload],
        total: state.total + 1, 
      };
    },
    // Action to edit an existing job application in the applications array
    editApplication: (state, action) => {
      const applications = state.applications.map((application) => {
        if (application.id === action.payload.id) {
          application = action.payload;
        }
        return application;
      });
      return { 
        ...state, 
        applications: [...applications] 
      };
    },
    // Action to delete a job application from the applications array
    deleteApplication: (state, action) => {
      const applications = state.applications.filter(
        (application) => application.id !== action.payload.id
      );
      return { 
        ...state, 
        applications: [...applications],
        total: state.total > 0 ? state.total - 1 : 0, // Decrement the total count, ensure it doesn't go negative
      };
    }
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
