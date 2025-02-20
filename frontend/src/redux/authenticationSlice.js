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
        // When the user authenticates, the token, username, email, first name and last name are stored in the session storage (even if the page is refreshed).
        userAuthenticated: (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isLoggedIn: true,
                username: action.payload.username, // storing username
                email: action.payload.email,       // storing email
                firstName: action.payload.firstName, // storing firstName
                lastName: action.payload.lastName, // storing lastName
            }
        },
        // When the user logs out, the token, username, email, first name and last name are removed from the session storage, and the login status is set to false.
        userLoggedOut: (state) => {
            sessionStorage.removeItem('token'); 
            sessionStorage.removeItem('profileData');
            sessionStorage.removeItem('userInfo');
            return {
              ...state,
              token: '',
              isLoggedIn: false,
              username: '',   
              email: '',      
              firstName: '', 
              lastName: '', 
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
