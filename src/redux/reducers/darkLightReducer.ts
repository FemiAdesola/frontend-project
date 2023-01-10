import { createSlice } from "@reduxjs/toolkit";

export const darkLightSlice = createSlice({
  name: "darkLight",
  initialState: {
    lightTheme : false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme  = !state.lightTheme ;
    },
  },
});
const darkLightReducer = darkLightSlice.reducer

export const { toggleTheme } = darkLightSlice.actions;
export default darkLightReducer;