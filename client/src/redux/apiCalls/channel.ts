import { Dispatch } from "@reduxjs/toolkit";
import request from "../../requestMethods";
import { isError, isLoading, isSuccess } from "../slices/videosSlice";

export const getChannel = async (dispatch: Dispatch, id: any) => {
  try {
    dispatch(isLoading());
    const res = await request.get(`api/v1/channels/${id}`);
    dispatch(isSuccess());
    
    return res.data.items[0]
    
  } catch (err) {
    console.log(err);
    dispatch(isError());
  }
};
