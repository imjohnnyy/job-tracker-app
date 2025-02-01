import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {
            firstName: '',
            lastName: '',
            email: '',
        },
    },
    reducers: {
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
    },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;