import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSideBar: false,
  },
  reducers: {
    toggleSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
