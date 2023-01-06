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
    setIsLoggedIn: (state) => {},
  },
});

export const { openLoginForm, openSignUpForm, closeForm } = authSlice.actions;
export const isLoggedin = (state) => {
  return state.auth.isLoggedin;
};
export const isOpenLogin = (state) => state.auth.isOpenLogin;
export const isOpenSignUp = (state) => state.auth.isOpenSignUp;
export default authSlice.reducer;
