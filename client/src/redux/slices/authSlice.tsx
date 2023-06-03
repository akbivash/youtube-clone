import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../types";

const userFromLocalStorage = localStorage.getItem('user')

const initialState: AuthState = {

   user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null,
  isLoading: false,
  isError: false,
  message: "",
 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
     state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
     state.isLoading = false;
     state.isError = false;
     state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
     state.message = 'Login success'
    },
    loginFailure: (state) => {
     state.isLoading = false;
     state.isError = true;
     state.message = "Login error";
    
    },
    logoutStart: (state) => {
     state.isLoading = true;
    },
    logoutSuccess: (state) => {
     state.isLoading = false;
     state.isError = false;
     state.user = null;
     state.message = 'logout success'
    },
    logoutFailure: (state) => {
     state.isError = true;
     state.message = "logout error";
     state.isLoading = false;
    },
   resetError:(state) => {
     state.message = ""
    }
  },
});

export const {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutFailure,
  logoutSuccess,
  resetError
} = authSlice.actions;
export default authSlice.reducer;
