import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedin: false,
    userData: null,
  },
  reducers: {
    login(state, action) {
      const data = action.payload;
      state.userData = { ...data };
      state.isLoggedin = true;
      localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    logout(state) {
      state.userData = null;
      state.isLoggedin = false;
      localStorage.removeItem("userData");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
