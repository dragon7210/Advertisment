import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedin: localStorage.getItem("token") ? true : false,
    isOpenLogin: false,
    isOpenSignUp: false,
    isAuthenticated: false,
  },
  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedin = true;
      console.log(state.auth)
    },
    clearIsLoggedIn: (state) => {
      state.isLoggedin = true;
    },
  },
});

export const { setIsLoggedIn, clearIsLoggedIn } = authSlice.actions;
export const isLoggedin = (state) => state.auth.isLoggedin;
export const isOpenLogin = (state) => state.auth.isOpenLogin;
export const isOpenSignUp = (state) => state.auth.isOpenSignUp;
export default authSlice.reducer;
