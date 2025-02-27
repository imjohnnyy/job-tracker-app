import { createSlice } from '@reduxjs/toolkit';


export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        applicationsPerCategory: [],
        applicationsPerMonth: []
    },
    reducers: {
        setApplicationsPerCategory: (state, action) => {
            return { ...state, applicationsPerCategory: action.payload };
        },
        setApplicationsPerMonth: (state, action) => {
            return { ...state, applicationsPerMonth: action.payload };
        }
    }
});

export const { setApplicationsPerCategory, setApplicationsPerMonth } = statisticsSlice.actions;

export default statisticsSlice.reducer;