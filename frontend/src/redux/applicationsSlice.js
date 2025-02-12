import { createSlice, createAction } from "@reduxjs/toolkit";

// Error actions
export const setApplicationsError = createAction("setApplicationsError");
export const newApplicationError = createAction("newApplicationError");
export const editApplicationError = createAction("newEditApplicationError");
export const deleteApplicationError = createAction("deleteApplicationError");

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    total: 0,  // Add a total field for pagination
  },
  reducers: {
    setApplications: (state, action) => {
      return { 
        ...state, 
        applications: action.payload.applications,
        total: action.payload.total // Update total here
      };
    },
    // Action to add a new job application to the applications array
    newApplication: (state, action) => {
      return {
        ...state,
        applications: [...state.applications, action.payload],
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
      return { ...state, applications: [...applications] };
    },
    // Action to delete a job application from the applications array
    deleteApplication: (state, action) => {
      const applications = state.applications.filter(
        (application) => application.id !== action.payload.id
      );
      return { ...state, applications: [...applications] };
    },
    // Optional: You can add actions to set current page and limit (pagination state)
    setPagination: (state, action) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
  },
});

// Export the action creators
export const {
  setApplications,
  newApplication,
  editApplication,
  deleteApplication,
  setPagination, // Action for pagination (optional)
} = applicationsSlice.actions;

// Export the reducer function
export default applicationsSlice.reducer;
