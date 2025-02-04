import { createSlice } from '@reduxjs/toolkit';

export const applicationsSlice = createSlice({
    name: 'applications',
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
            return {...state, applications: [...state.applications.map(application => 
                application.id === action.payload.id ? action.payload : application
            )]};
        },
        // Action: Delete an job application from the applications array
        deleteApplication: (state, action) => { 
            return {...state, applications: [...state.applications.filter(application => 
                application.id !== action.payload
            )]};
        }
    }
});

// Export the action creators
export const { setApplications, newApplication, editApplication, deleteApplication } = applicationsSlice.actions;

// Export the reducer function
export default applicationsSlice.reducer;
