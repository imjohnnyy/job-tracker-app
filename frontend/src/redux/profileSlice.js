import { createSlice, createAction } from '@reduxjs/toolkit';

export const updateProfileError  = createAction('updateProfileError');

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {
            id: 0,
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