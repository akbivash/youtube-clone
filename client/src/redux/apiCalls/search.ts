import { Dispatch } from "@reduxjs/toolkit";
import request from "../../requestMethods";
import { getSearchSuggestions, isError, isLoading, isSuccess } from "../slices/videosSlice";

export const searchResults = async(dispatch:Dispatch,keyword:any ) => {
    try {
      dispatch(isLoading());
      const res = await request.get(`/api/v1/search/${keyword}`);
      dispatch(isSuccess())
      return res.data
    } catch (err) {
      console.log(err);
      dispatch(isError());
    }
  }
  

  export const searchRelatedVideos = async(dispatch:Dispatch,id:any ) => {
    try {
      dispatch(isLoading);
      const res = await request.get(`/api/v1/search/related/${id}`);
      dispatch(isSuccess())

      return res.data
    } catch (err) {
      console.log(err);
      dispatch(isError());
    }
  }
  
  
  export const searchSuggestions = async (dispatch: Dispatch, keyword: any) => {
    try {
      dispatch(isLoading());
      const res = await request.get(`/api/v1/search/${keyword}`);
      dispatch(getSearchSuggestions(res.data))
    } catch (err) {
      dispatch(isError());
      console.log(err);
    }
  };