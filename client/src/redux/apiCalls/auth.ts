import { Dispatch } from "redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
} from "../slices/authSlice";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { closeSettings } from "../slices/componentsSlice";

export const login = (dispatch: Dispatch) => {
  dispatch(loginStart());

  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      const user = res.user;

      let userData = {
        token,
        userName: user.displayName,
        email: user.email,
        image: user.photoURL,
      };
      dispatch(loginSuccess(userData));
    })
    .catch((err) => {
      dispatch(loginFailure());
      console.log('login failed');
    });
};

export const logout = async (dispatch: Dispatch) => {
  signOut(auth)
    .then((res) => {
      dispatch(logoutSuccess());
      localStorage.removeItem("user");
      dispatch(closeSettings());
      console.log("logout success");
    })
    .catch((err) => {
      console.log('logout failed');
      dispatch(logoutFailure());
    });
};
