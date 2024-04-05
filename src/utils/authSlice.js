import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signupdata: null,
    token: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null,
  },

  reducers: {
    setSignupData(state, action) {
      state.signupdata = action.payload;
    },
    setToken(state, action) {
        localStorage.setItem("token", action.payload)
      state.token = action.payload;
    },
  },
});

export const { setToken, setSignupData } = authSlice.actions;

export default authSlice.reducer;
