import { createSlice } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: '',
        isLoggedIn: false,
        error: null,
        username: '',   
        email: '',      
    },
    reducers: {
        // When the user authenticates, the token, username, and email are stored in the session storage (even if the page is refreshed).
        userAuthenticated: (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isLoggedIn: true,
                username: action.payload.username, // storing username
                email: action.payload.email,       // storing email
            }
        },
        // When the user logs out, the token, username, and email are removed from the session storage, and the login status is set to false.
        userLoggedOut: (state) => {
            sessionStorage.removeItem('token'); 
            return {
              ...state,
              token: '',
              isLoggedIn: false,
              username: '',   // clearing username
              email: '',      // clearing email
            };
        },
        invalidLoginCredentials: (state, action) => {
            return {
                ...state,
                token: '',
                isLoggedIn: false,
                error: action.payload
            }
        },
        invalidSignupCredentials: (state, action) => {
            return {
                ...state,
                token: '',
                isLoggedIn: false,
                error: action.payload
            }
        }
    }
});

export const { userAuthenticated, userLoggedOut, invalidLoginCredentials, invalidSignupCredentials } = authenticationSlice.actions;

export default authenticationSlice.reducer;
