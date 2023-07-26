import { createSlice } from '@reduxjs/toolkit';


export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        applicationsPerCategory: [],
    },
    reducers: {
        setApplicationsPerCategory: (state, action) => {
            return { ...state, applicationsPerCategory: action.payload };
        }
    }
});

export const { setApplicationsPerCategory } = statisticsSlice.actions;

export default statisticsSlice.reducer;