import { Dispatch } from "redux";
import request from "../../requestMethods";
import {
  isLoading,
  isSuccess,
  isError,
} from "../slices/videosSlice";

export const popularVideos = async (dispatch: Dispatch) => {
  try {
    dispatch(isLoading());
    const res = await request.get("/api/v1/videos");
    dispatch(isSuccess());
    return res.data;
  } catch (err:any) {
    console.log(err);
    dispatch(isError());
  }
};

export const videosByCategory = async (dispatch: Dispatch, id: any) => {
  try {
    dispatch(isLoading());
    const res = await request.get(`api/v1/videos/category/${id}`);
    dispatch(isSuccess());
    return res.data;
  } catch (err:any) {
    dispatch(isError());
    // console.log('server error');
  }
};


export const videoById = async (dispatch: Dispatch, id: any) => {
  try {
    dispatch(isLoading());
    const res = await request.get(`api/v1/videos/${id}`);
    dispatch(isSuccess());
    return res.data.items[0];
  } catch (err) {
    console.log(err);
    dispatch(isError());
  }
};
export const videosById = async(dispatch:Dispatch,id:any ) => {
  try {
    dispatch(isLoading);
    const res = await request.get(`api/v1/videos/${id}`);
    dispatch(isSuccess())
    return res.data.items
  } catch (err) {
    console.log(err);
    dispatch(isError());
  }
}

export const comments = async (dispatch: Dispatch, id: any) => {
  try {
    dispatch(isLoading());
    const res = await request.get(`/api/v1/videos/comments/${id}`);
    dispatch(isSuccess());
  
    return res.data
  } catch (err) {
    console.log(err);
    dispatch(isError());
  }
};
