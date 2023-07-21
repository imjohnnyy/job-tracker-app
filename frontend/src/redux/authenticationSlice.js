import { createSlice } from '@reduxjs/toolkit'

// This Authentication Slice that is used to store the token in the session storage and stores the login status of the user.

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: '',
        isLoggedIn: false,
    },
    reducers: {
        // When the user authenticates, the token is stored in the session storage (even if the page is refreshed).
        userAuthenticated: (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state, ...{
                    token: action.payload.token,
                    isLoggedIn: true,
                }
            }
        },
        // When the user logs out, the token is removed from the session storage.
        logOut: () => {
            sessionStorage.clear();
        }

    }
});

export const { userAuthenticated, logOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;