import { createSlice } from "@reduxjs/toolkit";

export const darkLightSlice = createSlice({
  name: "darkLight",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
const darkLightReducer = darkLightSlice.reducer

export const { toggleTheme } = darkLightSlice.actions;
export default darkLightReducer;