import { createSlice } from '@reduxjs/toolkit';

const sessionStorageData = sessionStorage.getItem('userData');
const initialUserData = sessionStorageData ? JSON.parse(sessionStorageData) : [];

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: initialUserData,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;

      // Save the updated userData to sessionStorage whenever it changes
      sessionStorage.setItem('userData', JSON.stringify(action.payload));
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;