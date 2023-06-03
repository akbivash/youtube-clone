import { useSelector } from "react-redux";
import { InitialState, UserState } from "../../../types";
import { Dispatch } from "@reduxjs/toolkit";
import { isError, isLoading, isSuccess } from "../slices/videosSlice";
import request from "../../requestMethods";

export const subscriptions = async (dispatch: Dispatch,user:any) => {
  if (!user && user === null) return;
  try {
    dispatch(isLoading());
    const res = await request.get("/subscriptions", {
      params: {
        part: "snippet,contentDetails",
        key: "AIzaSyADiJH020OIf1yVI6tOLZ6RZ-krih4XVDk",
      },
    });
    dispatch(isSuccess());
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch(isError());
  }
};
